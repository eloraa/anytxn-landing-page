import { navlinks } from '@/lib/consts';
import { Logo } from '../logo/logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002045]">
        <div className="container flex items-center justify-between py-11">
          <a href="/en">
            <Logo className="w-[127px] lg:w-[217px] text-white" />
          </a>
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-primary/50 px-6 py-4">Our Solutions</p>
            <ul className="flex items-center">
              {navlinks
                .find(link => link.submenu)
                ?.submenu?.map((link: { title: string; href: string }, index: number) => (
                  <li key={index}>
                    <Link className="px-6 py-4 transition-colors duration-300 last:pr-0 hover:text-primary/80" href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex gap-4 lg:hidden lg:gap-10 text-white ml-2">
            <a href="https://www.linkedin.com/company/anytxn" className="flex items-center transition-opacity duration-300 hover:opacity-70">
              <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                <path
                  d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="tel:+6590021890" className="flex items-center transition-opacity duration-300 hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a href="mailto:enquiry@anytxn.com" className="flex items-center transition-opacity duration-300 hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#00152D] border-t border-primary/50">
        <div className="container flex flex-col items-center justify-between py-6 text-sm text-primary lg:flex-row lg:text-base">
          <p>
            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <div className="flex items-center gap-[14px] max-lg:mt-4">
            <div>
              <a className="transition-colors duration-300 hover:text-blue-highlight" href="/en/privacy-policy">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
