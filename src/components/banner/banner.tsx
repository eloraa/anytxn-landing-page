import Image from 'next/image';
import { DesktopPattern } from './desktop-pattern';
import { MobilePattern } from './mobile-pattern';
import { Button } from '../button/button';
import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      <section className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%] bg-banner-gradient bg-clip-banner-section">
        <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
          <div className="h-fit lg:flex-[65] xl:flex-[75]">
            <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
              <h1 className="lg:max-w-max lg:whitespace-pre-line font-semibold leading-tight text-5xl lg:text-7xl font-montserrat text-white">Embrace the future of finance</h1>
              <h5 className="text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-montserrat">
                Reimagine financial services with AnyTech&apos;s open platform, distributed banking solution that powers transformation
              </h5>
            </header>

            <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
              <Button className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] rounded-md text-lg" asChild>
                <Link href="/en/contact-us">
                  <span>Reach Out to Us</span>
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

          <div></div>
        </div>

        <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-banner">
          <figure className="h-[115%] w-[115%] object-cover">
            <Image src="/assets/backgrounds/banner.jpg" width="7952" height="5304" className="h-full w-full object-cover" alt="Banner Background" />
          </figure>
          <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(190deg,#1f80f0 15.05%,rgba(31,128,240,0) 30.39%)' }}></div>
        </div>

        <DesktopPattern className="hidden lg:block absolute h-full w-full object-cover inset-0" />
        <MobilePattern className="lg:hidden absolute top-0 left-0 w-[110%] h-[65%] object-cover" />
      </section>
      <div className="block lg:hidden translate-y-[-20%] -mb-[10%]">
        <figure className="object-cover overflow-hidden" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)' }}>
          <Image src="/assets/backgrounds/banner.jpg" className="h-full w-full object-cover scale-150" sizes="100vw" alt="background image" width="7952" height="5304" />
        </figure>{' '}
        <div className="gradient-overlay"></div>
      </div>
    </>
  );
};
