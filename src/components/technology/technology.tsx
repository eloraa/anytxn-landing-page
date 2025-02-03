'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/carousel/carousel';
import { EmblaCarouselType } from 'embla-carousel';
import { cls } from '@/lib';
import { Button } from '../button/button';

interface Technology {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<EmblaCarouselType | undefined>(undefined);

  const technologies: Technology[] = [
    {
      title: 'Customer focused',
      subtitle: 'Purpose-built financial services',
      description:
        "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.\n\nExperience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
      image: {
        src: 'https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg',
        alt: 'Customer Focused',
      },
    },
    {
      title: 'Agile and adaptable',
      subtitle: 'Agile and adaptable for growth',
      description:
        'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.\n\nOptimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
      image: {
        src: 'https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg',
        alt: 'Agile and Adaptable',
      },
    },
    {
      title: 'Compliance ready',
      subtitle: 'Manage compliance with ease',
      description:
        'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.\n\nTransform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.',
      image: {
        src: 'https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png',
        alt: 'Compliance Ready',
      },
    },
    {
      title: 'Secure and safe',
      subtitle: 'Highly secure and safe',
      description:
        'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.\n\nJoin over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.',
      image: {
        src: 'https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg',
        alt: 'Secure and Safe',
      },
    },
  ];

  return (
    <section className="container">
      <header className="md:space-y-sm space-y-xs text-center">
        <h6 className="lg:text-lg font-bold text-primary uppercase font-montserrat tracking-wide">TECHNOLOGY BUILT FOR YOU</h6>
        <h2 className="whitespace-pre-line font-montserrat text-4xl lg:text-6xl font-medium mt-4">The future of finance</h2>
      </header>

      <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
        {technologies.map((tech, index) => (
          <Button
            variant="secondary"
            size="lg"
            key={index}
            onClick={() => {
              setActiveIndex(index);
              carouselApi?.scrollTo(index);
            }}
            className={cls(
              '!font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-full transition-colors duration-300 text-primary lg:text-lg bg-transparent',
              activeIndex === index ? 'bg-primary/20 hover:bg-primary/30' : 'hover:bg-primary/10'
            )}
          >
            {tech.title}
          </Button>
        ))}
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          setApi={api => {
            setCarouselApi(api);
            api?.on('select', () => {
              setActiveIndex(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {technologies.map((tech, index) => (
              <CarouselItem key={index}>
                <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] p-[24px] lg:h-[550px] bg-white shadow-md rounded-lg">
                  <section className="lg:space-y-md space-y-sm flex flex-col justify-center">
                    <header className="lg:space-y-md space-y-xs">
                      <h6 className="lg:text-lg font-bold text-primary uppercase font-montserrat tracking-wide">{tech.title}</h6>
                      <h3 className="text-2xl lg:text-4xl mt-2">{tech.subtitle}</h3>
                    </header>

                    <div className="md:hidden h-[150px] relative">
                      <Image src={tech.image.src} alt={tech.image.alt} fill className="object-cover rounded-[8px]" />
                    </div>

                    <div className="text-sm lg:text-base text-foreground/80 mt-6 whitespace-pre-line">{tech.description}</div>
                  </section>

                  <div className="hidden md:block h-[425px] relative">
                    <Image src={tech.image.src} alt={tech.image.alt} fill className="object-cover rounded-[16px]" />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
