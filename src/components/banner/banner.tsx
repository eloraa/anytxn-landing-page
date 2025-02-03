import Image from 'next/image';

export const Banner = () => {
  return (
    <section className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]">
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <h1 className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white">Embrace the future of finance</h1>
            <h5 className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat">
              Reimagine financial services with AnyTech&apos;s open platform, distributed banking solution that powers transformation
            </h5>
          </header>

          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <a className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main" href="/en/contact-us">
              <span>Reach Out to Us</span>
              {/* Placeholder for chevron icon */}
              <span>→</span>
            </a>
          </div>
        </div>

        <div></div>
      </div>

      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full">
        <figure className="h-[115%] w-[115%] object-cover">
          <Image src="/assets/backgrounds/banner.jpg" width="7952" height="5304" className="h-full w-full object-cover" alt="Banner Background" />
        </figure>
      </div>

      {/* Placeholder for mobile background */}
      <div className="lg:hidden absolute top-0 left-0 w-[110%] h-[65%] bg-gray-800">{/* Add your mobile background here */}</div>
    </section>
  );
};
