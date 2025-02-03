// https://github.com/eloraa/aryuk-folio-react/blob/master/src/classes/effect.js
const distance = function (x1: number, y1: number, x2: number, y2: number): number {
  const a = x1 - x2;
  const b = y1 - y2;

  return Math.hypot(a, b);
};

const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

interface EffectProps {
  element: HTMLElement | SVGElement;
  innerElement?: HTMLElement | SVGElement;
  direction?: 'both' | 'x' | 'y';
  amt?: number;
  triggerFromDistance?: boolean;
  disfreq?: number;
  freq?: number;
  invert?: boolean;
  alwaysActive?: boolean;
}

interface DOMElements {
  element: HTMLElement | SVGElement;
  innerElement: HTMLElement | SVGElement | null;
}

interface RenderedValue {
  previous: number;
  current: number;
  amt: number;
}

interface RenderedState {
  tx: RenderedValue;
  ty: RenderedValue;
  previousMatrix: {
    element: string;
    innerElement: string | null;
  };
}

interface MousePosition {
  x: number;
  y: number;
}

export default class Effect {
  private DOM: DOMElements;
  private distanceTrigger: boolean;
  private disfreq: number;
  private freq: number;
  private direction: 'both' | 'x' | 'y';
  private amt: number;
  private rendered: RenderedState;
  private state: { intersecting: boolean };
  private mousepos: MousePosition;
  private rect!: DOMRect;
  private distanceToTrigger!: number | null;
  private warned: boolean;
  private invert: boolean;
  private animationFrameId: number | null = null;
  private boundCalculatePosition: () => void = () => {};
  private boundMouseMove: (evt: MouseEvent) => void = () => {};
  private boundEnter: () => void = () => {};
  private alwaysActive: boolean;

  constructor({ element, innerElement, direction = 'both', amt = 0.1, triggerFromDistance = true, disfreq = 0.7, freq = 0.3, invert = false, alwaysActive = false }: EffectProps) {
    this.DOM = {
      element,
      innerElement: innerElement || null,
    };
    this.distanceTrigger = triggerFromDistance;
    this.disfreq = disfreq;
    this.freq = freq;
    this.direction = direction;
    this.amt = amt;
    this.warned = false;
    this.invert = invert;
    this.alwaysActive = alwaysActive;

    this.rendered = {
      tx: { previous: 0, current: 0, amt: this.amt },
      ty: { previous: 0, current: 0, amt: this.amt },
      previousMatrix: {
        element: window.getComputedStyle(this.DOM.element).getPropertyValue('transform'),
        innerElement: this.DOM.innerElement ? window.getComputedStyle(this.DOM.innerElement).getPropertyValue('transform') : null,
      },
    };

    this.state = {
      intersecting: alwaysActive,
    };

    this.mousepos = {
      x: 0,
      y: 0,
    };

    this.calculatePosition();
    this.initEvents();
    this.render();
  }

  private calculatePosition(): void {
    this.rect = this.DOM.element.getBoundingClientRect();
    this.distanceToTrigger = this.distanceTrigger ? this.rect.width * this.disfreq : null;
  }

  private updateMousePos(e: MouseEvent): MousePosition {
    return {
      x: e.clientX,
      y: e.clientY,
    };
  }

  private initEvents(): void {
    this.boundCalculatePosition = this.calculatePosition.bind(this);
    this.boundMouseMove = (evt: MouseEvent) => (this.mousepos = this.updateMousePos(evt));
    this.boundEnter = this.enter.bind(this);

    window.addEventListener('resize', this.boundCalculatePosition);
    window.addEventListener('mousemove', this.boundMouseMove);
    
    if (!this.alwaysActive) {
      this.DOM.element.addEventListener('mouseenter', this.boundEnter);
    }
  }

  private render(): void {
    const distanceMouseButton = distance(this.mousepos.x + window.scrollX, this.mousepos.y + window.scrollY, this.rect.left + this.rect.width / 2, this.rect.top + this.rect.height / 2);

    let x = 0;
    let y = 0;

    if (this.alwaysActive || !this.distanceTrigger || (distanceMouseButton < (this.distanceToTrigger || 0) && this.state.intersecting)) {
      x = (this.mousepos.x + window.scrollX - (this.rect.left + this.rect.width / 2)) * this.freq;
      y = (this.mousepos.y + window.scrollY - (this.rect.top + this.rect.height / 2)) * this.freq;
      
      if (this.invert) {
        x = -x;
        y = -y;
      }
    } else {
      this.state.intersecting = false;
    }

    this.rendered.tx.current = x;
    this.rendered.ty.current = y;

    for (const key in this.rendered) {
      if (key === 'tx' || key === 'ty') {
        this.rendered[key].previous = lerp(this.rendered[key].previous, this.rendered[key].current, this.rendered[key].amt);
      }
    }

    if (this.direction === 'both') {
      if (this.DOM.element instanceof SVGElement) {
        this.DOM.element.style.transform = `translate(${this.rendered.tx.previous}px, ${this.rendered.ty.previous}px) ${
          this.rendered.previousMatrix.element === 'none' ? '' : this.rendered.previousMatrix.element
        }`;
      } else {
        this.DOM.element.style.transform = `translate3d(${this.rendered.tx.previous}px, ${this.rendered.ty.previous}px, 0) ${
          this.rendered.previousMatrix.element === 'none' ? '' : this.rendered.previousMatrix.element
        }`;
      }

      if (this.DOM.innerElement) {
        if (this.DOM.innerElement instanceof SVGElement) {
          this.DOM.innerElement.style.transform = `translate(${-this.rendered.tx.previous * 0.6}px, ${-this.rendered.ty.previous * 0.6}px) ${
            this.rendered.previousMatrix.innerElement === 'none' ? '' : this.rendered.previousMatrix.innerElement || ''
          }`;
        } else {
          this.DOM.innerElement.style.transform = `translate3d(${-this.rendered.tx.previous * 0.6}px, ${-this.rendered.ty.previous * 0.6}px, 0) ${
            this.rendered.previousMatrix.innerElement === 'none' ? '' : this.rendered.previousMatrix.innerElement || ''
          }`;
        }
      }
    } else if (this.direction === 'x') {
      if (this.DOM.element instanceof SVGElement) {
        this.DOM.element.style.transform = `translate(${this.rendered.tx.previous}px, 0) ${
          this.rendered.previousMatrix.element === 'none' ? '' : this.rendered.previousMatrix.element
        }`;
      } else {
        this.DOM.element.style.transform = `translate3d(${this.rendered.tx.previous}px, 0, 0) ${
          this.rendered.previousMatrix.element === 'none' ? '' : this.rendered.previousMatrix.element
        }`;
      }

      if (this.DOM.innerElement) {
        if (this.DOM.innerElement instanceof SVGElement) {
          this.DOM.innerElement.style.transform = `translate(${-this.rendered.tx.previous * 0.6}px, 0) ${
            this.rendered.previousMatrix.innerElement === 'none' ? '' : this.rendered.previousMatrix.innerElement || ''
          }`;
        } else {
          this.DOM.innerElement.style.transform = `translate3d(${-this.rendered.tx.previous * 0.6}px, 0, 0) ${
            this.rendered.previousMatrix.innerElement === 'none' ? '' : this.rendered.previousMatrix.innerElement || ''
          }`;
        }
      }
    } else if (this.direction === 'y') {
      if (this.DOM.element instanceof SVGElement) {
        this.DOM.element.style.transform = `translate(0, ${this.rendered.ty.previous}px) ${
          this.rendered.previousMatrix.element === 'none' ? '' : this.rendered.previousMatrix.element
        }`;
      } else {
        this.DOM.element.style.transform = `translate3d(0, ${this.rendered.ty.previous}px, 0) ${
          this.rendered.previousMatrix.element === 'none' ? '' : this.rendered.previousMatrix.element
        }`;
      }

      if (this.DOM.innerElement) {
        if (this.DOM.innerElement instanceof SVGElement) {
          this.DOM.innerElement.style.transform = `translate(0, ${-this.rendered.ty.previous * 0.6}px) ${
            this.rendered.previousMatrix.innerElement === 'none' ? '' : this.rendered.previousMatrix.innerElement || ''
          }`;
        } else {
          this.DOM.innerElement.style.transform = `translate3d(0, ${-this.rendered.ty.previous * 0.6}px, 0) ${
            this.rendered.previousMatrix.innerElement === 'none' ? '' : this.rendered.previousMatrix.innerElement || ''
          }`;
        }
      }
    } else {
      if (!this.warned) {
        console.warn('unknown direction');
        this.warned = true;
      }
    }

    this.animationFrameId = requestAnimationFrame(this.render.bind(this));
  }

  private enter(): void {
    this.state.intersecting = true;
  }

  public destroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    window.removeEventListener('resize', this.boundCalculatePosition);
    window.removeEventListener('mousemove', this.boundMouseMove);
    
    if (!this.alwaysActive) {
      this.DOM.element.removeEventListener('mouseenter', this.boundEnter);
    }
  }
}
