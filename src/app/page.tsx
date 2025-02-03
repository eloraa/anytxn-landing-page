import { Banner } from '@/components/banner/banner';
import { Info } from '@/components/info-section/info';
import { Philosophy } from '@/components/Philosophy/Philosophy';
import { SectionGap } from '@/components/section-gap/section-gap';
import { Technology } from '@/components/technology/technology';
import { TrustedBrands } from '@/components/trusted-by-brands/trusted-by-brands';

export default function Home() {
  return (
    <>
      <Banner />
      <Info />
      <SectionGap />
      <Philosophy />
      <SectionGap />
      <Technology />
      <SectionGap />
      <TrustedBrands />
      <SectionGap />
    </>
  );
}
