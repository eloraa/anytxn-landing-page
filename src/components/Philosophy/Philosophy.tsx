import Image from 'next/image';
import React from 'react';

interface PhilosophyCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ icon, iconAlt, title, description }) => {
  return (
    <li className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm" style={{ transform: 'translateY(0px)', opacity: 1 }}>
      <figure className="w-fit rounded-full">
        <Image src={`${icon}?auto=format`} width="50" height="50" sizes="50px" alt={iconAlt} className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]" loading="lazy" />
      </figure>
      <h4 className="font-montserrat lg:text-xl text-lg font-semibold !mt-5">{title}</h4>
      <p className="text-foreground/80">{description}</p>
    </li>
  );
};

export const Philosophy = () => {
  const philosophies = [
    {
      icon: 'https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg',
      iconAlt: 'Full suite solutions',
      title: 'Full-suite solutions',
      description: 'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.',
    },
    {
      icon: 'https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png',
      iconAlt: 'Simplify the complex',
      title: 'Simplify the complex',
      description: 'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.',
    },
    {
      icon: 'https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg',
      iconAlt: 'Cutting-edge tech',
      title: 'Cutting-edge tech',
      description: 'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.',
    },
  ];

  return (
    <section className="container md:mb-[128px]">
      <header className="md:space-y-sm space-y-xs text-center">
        <h6 className="lg:text-lg font-bold text-primary uppercase font-montserrat tracking-wide">OUR PHILOSOPHY</h6>
        <h2 className="whitespace-pre-line font-montserrat text-4xl lg:text-6xl font-medium mt-4">Human-centred innovation</h2>
      </header>

      <figure className="py-[32px]">
        <Image src="/philosophy.png" width="2206" height="727" sizes="95vw" className="h-full w-full hidden md:block" alt="Human-centred innovation diagram" loading="lazy" />
      </figure>

      <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
        {philosophies.map((philosophy, index) => (
          <PhilosophyCard key={index} icon={philosophy.icon} iconAlt={philosophy.iconAlt} title={philosophy.title} description={philosophy.description} />
        ))}
      </ul>
    </section>
  );
};
