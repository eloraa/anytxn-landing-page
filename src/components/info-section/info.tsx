import Image from 'next/image';
import React from 'react';

export const Info = () => {
  return (
    <>
      <section className="container mt-[62px]">
        <main className="grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
          <div className="md:space-y-sm space-y-xs">
            <h6 className="lg:text-lg font-bold text-primary uppercase font-montserrat">POWERING THE FUTURE OF FINANCE</h6>
            <h2 className="whitespace-pre-line font-montserrat text-4xl lg:text-6xl font-medium mt-4">Uncovering new ways to delight customers</h2>

            <div className="!my-[60px] md:hidden block relative h-fit lg:text-clip">
              <ImageSection />
            </div>

            <div className="lg:pt-2">
              <div>
                <div className="mt-6 text-foreground/80">
                  <p>
                    <strong>
                      AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial
                      services.
                    </strong>
                  </p>
                </div>
                <div className="text-foreground/80">
                  <p>
                    <br />
                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative h-fit lg:text-clip">
            <ImageSection />
          </div>
        </main>
      </section>

      <svg className="max-h-[240px] md:my-sm my-lg w-full min-h-[60px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M-240 0L1680 0L-240 280L-240 0Z" fill="url(#paint0_linear_6055_471)"></path>
        <defs>
          <linearGradient id="paint0_linear_6055_471" x1="458.5" y1="1561.14" x2="392.705" y2="52.1879" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F80F0"></stop>
            <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

const ImageSection = () => {
  const baseAnimationDuration = 10;
  const durationMultipliers = {
    first: 1,
    second: 1.2,
    third: 1.4,
    bg: 3,
    fg: 2.5,
  };

  return (
    <>
      <figure className="w-[76%] mx-auto" style={{ boxShadow: '0px 23px 30px 0px #16437763' }}>
        <Image src="/info.png" width="1124" height="1364" alt="POWERING THE FUTURE OF FINANCE" className="object-cover w-full h-full" sizes="(min-width: 1024px) 45vw, 95vw" loading="lazy" />
      </figure>

      <div>
        <figure
          className="absolute top-[10%] right-[12%] translate-x-1/2 w-[min(115px,_30%)] rounded-full drop-shadow-2xl animate-bounce"
          style={{
            transform: 'translateX(50%)',
            animationDuration: `${baseAnimationDuration * durationMultipliers.first}s`,
          }}
        >
          <Image src="/info-svg-1.svg" width="116" height="115" alt="anybass" sizes="115px" className="object-contain w-full h-full" loading="lazy" />
        </figure>

        <figure
          className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl animate-bounce"
          style={{
            animationDuration: `${baseAnimationDuration * durationMultipliers.second}s`,
          }}
        >
          <Image src="/info-svg-2.svg" width="89" height="88" alt="anypass" sizes="87px" className="object-contain w-full h-full" loading="lazy" />
        </figure>

        <figure
          className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl animate-bounce"
          style={{
            transform: 'translateX(-50%)',
            animationDuration: `${baseAnimationDuration * durationMultipliers.third}s`,
          }}
        >
          <Image src="/info-svg-3.svg" width="74" height="75" alt="anycaas" sizes="73px" className="object-contain w-full h-full" loading="lazy" />
        </figure>
      </div>

      <figure
        className="absolute inset-0 w-full h-full -z-10 animate-pulse"
        style={{
          animationDuration: `${baseAnimationDuration * durationMultipliers.bg}s`,
        }}
      >
        <Image className="object-cover w-full h-full overflow-visible" loading="lazy" src="/background.svg" fill alt="background frame" />
      </figure>

      <figure
        className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%] animate-pulse"
        style={{
          animationDuration: `${baseAnimationDuration * durationMultipliers.fg}s`,
        }}
      >
        <Image className="object-cover w-full h-full overflow-visible" loading="lazy" src="/foreground.png" fill alt="foreground frame" />
      </figure>
    </>
  );
};
