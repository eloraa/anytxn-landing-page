'use client';
import Link from 'next/link';
import { Button } from '../button/button';
import { Logo } from '../logo/logo';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../hover-card/hover-card';
import { useState, useEffect } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { cls } from '@/lib';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';
import { navlinks } from '@/lib/consts';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const languages = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'th', label: 'THAI' },
    { code: 'id', label: 'BAHASA INDONESIA' },
    { code: 'zh', label: 'TRADITIONAL CHINESE' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Handle background color change
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Handle header show/hide on mobile
      if (window.innerWidth < 1024) {
        // lg breakpoint
        if (scrollPosition > lastScrollY) {
          // scrolling down
          setIsVisible(false);
        } else {
          // scrolling up
          setIsVisible(true);
        }
        setLastScrollY(scrollPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cls(
        'text-white w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999] fixed transition-all duration-300',
        isScrolled ? 'bg-primary' : 'bg-transparent',
        'max-lg:bg-primary max-lg:py-8',
        !isVisible && 'max-lg:-translate-y-full'
      )}
    >
      <div className="relative z-[9999] container flex items-center justify-between text-white">
        <figure>
          <Logo className="w-[134px] h-auto object-contain lg:w-[170px]" />
        </figure>
        <button className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div
          className={cls(
            'lg:hidden absolute top-full left-0 transform bg-blue-main transition-transform duration-300 ease-in-out overflow-y-auto w-full bg-primary',
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6 space-y-6">
            <nav>
              <ul className="space-y-4">
                {navlinks.map((link, index) => (
                  <li key={index}>
                    {link.submenu ? (
                      <div className="space-y-2">
                        <button onClick={() => toggleSubmenu(index)} className="flex items-center justify-between w-full font-medium">
                          {link.title}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openSubmenuIndex === index ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubmenuIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                          <ul className="pl-4 space-y-2 py-2">
                            {link.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link href={subItem.href} className="text-white hover:text-gray-300 transition-colors block py-1">
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <Link href={link.href} className="text-white hover:text-gray-300 transition-colors block">
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}

                <li>
                  <div>
                    <button onClick={() => setIsLanguageOpen(!isLanguageOpen)} className="flex items-center justify-between w-full font-medium text-sm border border-white/15 rounded-full py-2 px-3">
                      <div className="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {selectedLanguage.label}
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isLanguageOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <ul className="pl-4 space-y-2 py-2 text-sm">
                        {languages.map(lang => (
                          <li key={lang.code}>
                            <button
                              onClick={() => {
                                setSelectedLanguage(lang);
                                setIsLanguageOpen(false);
                              }}
                              className={`w-full text-left py-1 hover:text-gray-300 transition-colors ${selectedLanguage.code === lang.code ? 'text-primary-light' : 'text-white'}`}
                            >
                              {lang.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            <Button variant="outline" size="lg" className="w-full text-lg font-semibold" asChild>
              <Link href="/contact-us">
                Contact Us
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

        <nav className="max-lg:hidden">
          <ul className="flex items-center gap-6 font-medium">
            {navlinks.map((link, index) => (
              <li key={index}>
                {link.submenu ? (
                  <HoverCard openDelay={0} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button className="flex items-center gap-2 focus:outline-none">
                        {link.title}
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-data-[state=open]:rotate-180">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-48 bg-white text-gray-900 rounded-md shadow-lg p-0" side="bottom" align="start">
                      <div className="flex flex-col">
                        {link.submenu.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.href} className="px-4 py-3 border-b last:border-b-0 hover:text-primary transition-colors">
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ) : (
                  <Link href={link.href}>{link.title}</Link>
                )}
              </li>
            ))}

            <li>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-2 focus:outline-none text-sm rounded-full px-3 py-2 border border-white/15">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {selectedLanguage.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-48 bg-white text-gray-900 rounded-md shadow-lg p-0" side="bottom">
                  <div className="flex flex-col text-sm">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-4 py-3 text-left border-b last:border-b-0 hover:text-primary transition-colors ${selectedLanguage.code === lang.code ? 'text-primary' : ''}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </li>
          </ul>
        </nav>
        <Button variant="outline" size="lg" className="max-lg:hidden text-lg font-semibold">
          Contact Us
          <span>
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.25 4.39844L2.0625 7.58594C1.82812 7.82031 1.47656 7.82031 1.26562 7.58594L0.726562 7.07031C0.515625 6.83594 0.515625 6.48438 0.726562 6.27344L3 4.02344L0.726562 1.75C0.515625 1.53906 0.515625 1.1875 0.726562 0.953125L1.26562 0.414062C1.47656 0.203125 1.82812 0.203125 2.0625 0.414062L5.25 3.60156C5.46094 3.83594 5.46094 4.1875 5.25 4.39844Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </Button>
      </div>
    </header>
  );
};
