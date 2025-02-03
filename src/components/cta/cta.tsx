import Link from 'next/link';
import { DesktopPattern } from './desktop-pattern';
import { MobilePattern } from './mobile-pattern';
import { Button } from '../button/button';

export function CTASection() {
  return (
    <section id="common-cta_container" className="relative h-[60vh] lg:h-[530px] w-full text-white bg-clip-cta overflow-hidden bg-cta-gradient bg-no-repeat bg-cover md:z-20 z-0">
      <div className="container flex w-full items-start justify-center h-full relative z-10 flex-col mt-6">
        <h2 className="font-montserrat text-3xl lg:text-5xl text-white font-semibold mb-[24px]">Legacy no longer</h2>
        <p className="text-base lg:text-lg 2xl:text-xl lg:whitespace-pre-line mb-[30px]">Talk to us to find out how we can transform your organisation for the future</p>
        <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full">
          <Button className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] rounded-md text-lg" asChild>
            <Link href="/contact-us">
              <span>Contact Us</span>
              <span>
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.25 4.39844L2.0625 7.58594C1.82812 7.82031 1.47656 7.82031 1.26562 7.58594L0.726562 7.07031C0.515625 6.83594 0.515625 6.48438 0.726562 6.27344L3 4.02344L0.726562 1.75C0.515625 1.53906 0.515625 1.1875 0.726562 0.953125L1.26562 0.414062C1.47656 0.203125 1.82812 0.203125 2.0625 0.414062L5.25 3.60156C5.46094 3.83594 5.46094 4.1875 5.25 4.39844Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <DesktopPattern className="lg:block hidden absolute h-[120%] w-[120%] left-[-10%] top-[-10%]" />
      <MobilePattern className="block lg:hidden absolute inset-0 top-0 left-0 h-full w-full" />
    </section>
  );
}
