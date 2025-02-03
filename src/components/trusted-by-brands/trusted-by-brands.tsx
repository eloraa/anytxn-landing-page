import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel/carousel';

interface Brand {
  title: string;
  alt: string;
  imageUrl: string;
  width: number;
  height: number;
}

export const brands: Brand[] = [
  {
    title: 'BANK OF CHENGDE',
    alt: 'BANK OF CHENGDE',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png',
    width: 603,
    height: 414,
  },
  {
    title: 'BANK OF CHINA',
    alt: 'BANK OF CHINA',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png',
    width: 2560,
    height: 768,
  },
  {
    title: 'Bank of Shanghai',
    alt: 'Bank of Shanghai logo',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png',
    width: 778,
    height: 258,
  },
  {
    title: 'CGB',
    alt: 'CGB',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png',
    width: 1000,
    height: 182,
  },
  {
    title: 'CHINA CITIC BANK',
    alt: 'CHINA CITIC BANK',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png',
    width: 960,
    height: 540,
  },
  {
    title: 'OneBank',
    alt: 'OneBank',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png',
    width: 855,
    height: 292,
  },
  {
    title: 'PING AN BANK',
    alt: 'PING AN BANK',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png',
    width: 1599,
    height: 628,
  },
  {
    title: 'POSTAL SAVINGS BANK OF CHINA',
    alt: 'POSTAL SAVINGS BANK OF CHINA',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png',
    width: 1626,
    height: 250,
  },
  {
    title: 'sea',
    alt: 'sea',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png',
    width: 5000,
    height: 1970,
  },
  {
    title: 'Shandong City Commercial Banks Alliance',
    alt: 'Shandong City Commercial Banks Alliance',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png',
    width: 500,
    height: 330,
  },
  {
    title: 'VipFubon Consumer Finanace',
    alt: 'VipFubon Consumer Finanace',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg',
    width: 318,
    height: 61,
  },
  {
    title: 'XIAMEN INTERNATIONAL BANK',
    alt: 'XIAMEN INTERNATIONAL BANK',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png',
    width: 724,
    height: 137,
  },
  {
    title: 'XW',
    alt: 'XW',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png',
    width: 800,
    height: 527,
  },
  {
    title: 'SPD BANK',
    alt: 'SPD BANK',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png',
    width: 1200,
    height: 337,
  },
  {
    title: 'DCS',
    alt: 'DCS',
    imageUrl: 'https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png',
    width: 862,
    height: 289,
  },
];

const stats = [
  { number: 20, prefix: '>', suffix: '', description: 'Years of Experience' },
  { number: 40, prefix: '', suffix: '+', description: 'Financial Institutions' },
  { number: 200, prefix: '>', suffix: 'm', description: 'Customers Each' },
];

export const TrustedBrands = () => {
  return (
    <section className="mb-sm">
      <div className="container">
        <h6 className="lg:text-lg font-bold text-primary uppercase font-montserrat tracking-wide text-center">TRUSTED BY THE BEST</h6>

        <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center border-dashed max-lg:justify-between flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs">
              <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-primary to-[#0057BB] text-transparent bg-clip-text">
                {stat.prefix}
                {stat.number}
                {stat.suffix}
              </h2>
              <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">{stat.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-xl hidden md:grid grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-[34px] mt-12">
          {brands.map((brand, index) => (
            <div key={index} className="relative aspect-[170/100] flex items-center">
              <Image src={brand.imageUrl} alt={brand.alt} fill className="object-contain" sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw" />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-lg mt-12">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            skipSnaps: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="basis-[170px]">
                <div className="relative aspect-[170/100] flex items-center">
                  <Image src={brand.imageUrl} alt={brand.alt} fill className="object-contain" sizes="170px" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
