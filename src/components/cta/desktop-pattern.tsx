'use client';
import { forwardRef, useEffect, useRef } from 'react';
import Effect from '@/lib/classes/Effect';

type PatternProps = {
  className?: string;
};

export const DesktopPattern = forwardRef<SVGSVGElement, PatternProps>(({ className, ...props }, ref) => {
  const backgroundRef = useRef<SVGGElement>(null);
  const foregroundRef = useRef<SVGGElement>(null);
  const effectsRef = useRef<Effect[]>([]);

  useEffect(() => {
    if (backgroundRef.current && foregroundRef.current) {
      const backgroundEffect = new Effect({
        element: backgroundRef.current,
        freq: 0.02,
        amt: 0.05,
        direction: 'both',
        alwaysActive: true,
      });

      const foregroundEffect = new Effect({
        element: foregroundRef.current,
        freq: 0.03,
        amt: 0.08,
        direction: 'both',
        invert: true,
        alwaysActive: true,
      });

      effectsRef.current = [backgroundEffect, foregroundEffect];

      return () => {
        effectsRef.current.forEach(effect => effect.destroy());
        effectsRef.current = [];
      };
    }
  }, []);

  return (
    <svg className={className} {...props} ref={ref} preserveAspectRatio="xMidYMid slice" viewBox="0 0 2316 1021" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cta-background-patterns">
        <g id="dark-patterns" ref={backgroundRef}>
          <g id="Vector" style={{ mixBlendMode: 'multiply' }}>
            <path d="M1968.32 314.946V192.878L1492.64 587.535H1639.77L1968.32 314.946Z" fill="url(#paint0_linear_1_547)"></path>
          </g>
          <g id="Vector_2" style={{ mixBlendMode: 'multiply' }}>
            <path d="M2036.7 424.054V301.985L1561.03 696.643H1708.15L2036.7 424.054Z" fill="url(#paint1_linear_1_547)"></path>
          </g>
          <g id="Vector_3" style={{ mixBlendMode: 'multiply' }}>
            <path d="M856.409 397.443V212.315L135 810.849H358.134L856.409 397.443Z" fill="url(#paint2_linear_1_547)"></path>
          </g>
          <g id="Vector_4" style={{ mixBlendMode: 'multiply' }}>
            <path d="M819.587 305.826V188L360.44 568.941H502.456L819.587 305.826Z" fill="url(#paint3_linear_1_547)"></path>
          </g>
          <g id="Vector_5" style={{ mixBlendMode: 'multiply' }}>
            <path d="M2315.5 349.533V143L1510.68 810.739H1759.61L2315.5 349.533Z" fill="url(#paint4_linear_1_547)"></path>
          </g>
          <g id="Vector_6" style={{ mixBlendMode: 'multiply' }}>
            <path d="M1688.78 477.271V395.506L1370.15 659.858H1468.7L1688.78 477.271Z" fill="url(#paint5_linear_1_547)"></path>
          </g>
          <g id="Vector_7" style={{ mixBlendMode: 'multiply' }}>
            <path d="M1739.88 320.611V252.731L1475.36 472.193H1557.17L1739.88 320.611Z" fill="url(#paint6_linear_1_547)"></path>
          </g>
          <g id="Vector_8" style={{ mixBlendMode: 'multiply' }}>
            <path d="M1641.43 402.256V312.585L1292 602.499H1400.08L1641.43 402.256Z" fill="url(#paint7_linear_1_547)"></path>
          </g>
          <g id="Vector_9" filter="url(#filter0_f_1_547)">
            <path d="M2098.33 317.372V245.249L1817.28 478.428H1904.21L2098.33 317.372Z" fill="url(#paint8_linear_1_547)"></path>
          </g>
          <g id="Vector_10" filter="url(#filter1_f_1_547)">
            <path d="M1872.34 193.563V121.44L1591.29 354.619H1678.22L1872.34 193.563Z" fill="url(#paint9_linear_1_547)"></path>
          </g>
          <g id="Vector_11">
            <path d="M2013.32 46L1658.17 340.653H1683.57L2013.32 67.0733V46Z" fill="url(#paint10_linear_1_547)"></path>
            <path d="M2013.32 46L1658.17 340.653H1683.57L2013.32 67.0733V46Z" fill="url(#paint11_linear_1_547)"></path>
          </g>
          <g id="Vector_12" filter="url(#filter2_f_1_547)">
            <path d="M1854.1 284.937V234.027L1655.71 398.623H1717.07L1854.1 284.937Z" fill="url(#paint12_linear_1_547)"></path>
          </g>
        </g>
        <g id="light-patterns" ref={foregroundRef}>
          <g id="Vector_13" filter="url(#filter3_f_1_547)">
            <path d="M1764 384.676V268.997L1390 642.997H1505.68L1764 384.676Z" fill="url(#paint13_linear_1_547)"></path>
          </g>
          <g id="Vector_14" filter="url(#filter4_f_1_547)">
            <path d="M1345 579.677V463.998L971 837.998H1086.68L1345 579.677Z" fill="url(#paint14_linear_1_547)"></path>
          </g>
          <g id="Vector_15" filter="url(#filter5_f_1_547)">
            <path d="M623 351.677V235.998L249 609.998H364.679L623 351.677Z" fill="url(#paint15_linear_1_547)"></path>
          </g>
          <g id="Vector_16" filter="url(#filter6_f_1_547)">
            <path d="M2138 558.86V466.997L1841 763.997H1932.86L2138 558.86Z" fill="url(#paint16_linear_1_547)"></path>
          </g>
          <path id="Vector_17" d="M1406 435.302V361.997L1169 598.997H1242.3L1406 435.302Z" fill="url(#paint17_linear_1_547)"></path>
          <g id="Vector_18" filter="url(#filter7_f_1_547)">
            <path d="M1442 229.997L1107 564.997H1130.94L1442 253.937V229.997Z" fill="url(#paint18_linear_1_547)"></path>
          </g>
          <g id="Vector_19" filter="url(#filter8_f_1_547)">
            <path d="M684 113.998L349 448.998H372.939L684 137.937V113.998Z" fill="url(#paint19_linear_1_547)"></path>
          </g>
          <g id="Vector_20" filter="url(#filter9_f_1_547)">
            <path d="M427 132.998L92 467.998H115.939L427 156.937V132.998Z" fill="url(#paint20_linear_1_547)"></path>
          </g>
          <g id="Vector_21" filter="url(#filter10_f_1_547)">
            <path d="M1886 335.997L1507 714.997H1534.08L1886 363.081V335.997Z" fill="url(#paint21_linear_1_547)"></path>
            <path d="M1886 335.997L1507 714.997H1534.08L1886 363.081V335.997Z" fill="url(#paint22_linear_1_547)"></path>
          </g>
          <g id="Vector_22" filter="url(#filter11_f_1_547)">
            <path d="M1693 281.998L1314 660.998H1341.08L1693 309.082V281.998Z" fill="url(#paint23_linear_1_547)"></path>
            <path d="M1693 281.998L1314 660.998H1341.08L1693 309.082V281.998Z" fill="url(#paint24_linear_1_547)"></path>
          </g>
          <g id="Vector_23" filter="url(#filter12_f_1_547)">
            <path d="M400 620.998L21 999.998H48.0835L400 648.082V620.998Z" fill="url(#paint25_linear_1_547)"></path>
            <path d="M400 620.998L21 999.998H48.0835L400 648.082V620.998Z" fill="url(#paint26_linear_1_547)"></path>
          </g>
          <g id="Vector_24" filter="url(#filter13_f_1_547)">
            <path d="M614 21.9982L235 400.998H262.084L614 49.0819V21.9982Z" fill="url(#paint27_linear_1_547)"></path>
            <path d="M614 21.9982L235 400.998H262.084L614 49.0819V21.9982Z" fill="url(#paint28_linear_1_547)"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_1_547" x="1795.28" y="223.249" width="325.049" height="277.179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter1_f_1_547" x="1540.29" y="70.4401" width="383.049" height="335.179" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter2_f_1_547" x="1604.71" y="183.027" width="300.387" height="266.597" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter3_f_1_547" x="1339" y="217.997" width="476" height="476" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter4_f_1_547" x="949" y="441.998" width="418" height="418" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter5_f_1_547" x="227" y="213.998" width="418" height="418" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter6_f_1_547" x="1819" y="444.997" width="341" height="341" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter7_f_1_547" x="1086" y="208.997" width="377" height="377" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter8_f_1_547" x="328" y="92.9979" width="377" height="377" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter9_f_1_547" x="71" y="111.998" width="377" height="377" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter10_f_1_547" x="1486" y="314.997" width="421" height="421" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter11_f_1_547" x="1293" y="260.998" width="421" height="421" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter12_f_1_547" x="0" y="599.998" width="421" height="421" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <filter id="filter13_f_1_547" x="214" y="0.998169" width="421" height="421" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_1_547"></feGaussianBlur>
        </filter>
        <linearGradient id="paint0_linear_1_547" x1="1284.93" y1="953.252" x2="1712.65" y2="343.23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear_1_547" x1="1353.31" y1="1062.36" x2="1781.04" y2="452.338" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint2_linear_1_547" x1="-180.015" y1="1365.49" x2="468.664" y2="440.338" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint3_linear_1_547" x1="159.946" y1="921.947" x2="572.804" y2="333.127" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint4_linear_1_547" x1="1159.24" y1="1429.51" x2="1882.92" y2="397.388" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint5_linear_1_547" x1="1231.02" y1="904.825" x2="1517.52" y2="496.216" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint6_linear_1_547" x1="1359.85" y1="675.562" x2="1597.7" y2="336.34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint7_linear_1_547" x1="1139.41" y1="871.153" x2="1453.62" y2="423.033" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#0059BF" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint8_linear_1_547" x1="1766.18" y1="497.444" x2="2039.43" y2="216.389" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint9_linear_1_547" x1="1621.35" y1="343.084" x2="1757.38" y2="186.949" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F80F0"></stop>
          <stop offset="1" stopColor="#005CC7"></stop>
        </linearGradient>
        <linearGradient id="paint10_linear_1_547" x1="1539.82" y1="386.104" x2="1820.1" y2="122.109" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint11_linear_1_547" x1="1593.6" y1="364.682" x2="1938.9" y2="9.53058" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint12_linear_1_547" x1="1619.64" y1="412.046" x2="1812.53" y2="213.655" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint13_linear_1_547" x1="1322" y1="673.497" x2="1755" y2="303.997" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint14_linear_1_547" x1="903" y1="868.498" x2="1336" y2="498.998" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint15_linear_1_547" x1="181" y1="640.498" x2="614" y2="270.998" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint16_linear_1_547" x1="1787" y1="788.218" x2="2130.85" y2="494.791" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint17_linear_1_547" x1="1133.51" y1="606.285" x2="1275.78" y2="429.168" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint18_linear_1_547" x1="1116.85" y1="555.755" x2="1433.94" y2="261.347" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40FEFF"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint19_linear_1_547" x1="358.848" y1="439.755" x2="675.938" y2="145.348" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40FEFF"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint20_linear_1_547" x1="101.848" y1="458.755" x2="418.938" y2="164.348" gradientUnits="userSpaceOnUse">
          <stop stopColor="#40FEFF"></stop>
          <stop offset="1" stopColor="#1F80F0" stopOpacity="0.49"></stop>
        </linearGradient>
        <linearGradient id="paint21_linear_1_547" x1="1643.28" y1="647.974" x2="2003.25" y2="397.707" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint22_linear_1_547" x1="1279.1" y1="776.321" x2="1815.37" y2="217.592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0"></stop>
        </linearGradient>
        <linearGradient id="paint23_linear_1_547" x1="1450.28" y1="593.974" x2="1810.25" y2="343.707" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint24_linear_1_547" x1="1086.1" y1="722.321" x2="1622.37" y2="163.592" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0"></stop>
        </linearGradient>
        <linearGradient id="paint25_linear_1_547" x1="157.276" y1="932.975" x2="517.248" y2="682.708" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint26_linear_1_547" x1="-206.902" y1="1061.32" x2="329.37" y2="502.593" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0"></stop>
        </linearGradient>
        <linearGradient id="paint27_linear_1_547" x1="371.276" y1="333.975" x2="731.248" y2="83.7077" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="#4B4B4B" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint28_linear_1_547" x1="7.09845" y1="462.322" x2="543.37" y2="-96.4076" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E9EA"></stop>
          <stop offset="1" stopColor="#1F80F0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
});

DesktopPattern.displayName = 'Pattern1';
