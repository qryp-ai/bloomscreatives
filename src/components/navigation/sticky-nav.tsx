"use client";

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BloomsLogo from '@/assets/BLOOMS CREATIVES LOGO PNG HIGH.png';
import ChatWidget from '@/components/widgets/chat-widget';

const navItems = [
  { href: "/#top", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "#", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function StickyNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);
  const { pathname } = useLocation();



  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    // if (typeof window === 'undefined') return; // Not needed in Vite (client-side only)
    const hero = document.querySelector('#top');
    if (!hero) {
      // If there is no hero section (e.g., on non-home routes), hide the logo
      setHideLogo(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Show logo only when the hero is in view; hide otherwise
        setHideLogo(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const overlayClasses = isOpen
    ? 'translate-y-0 opacity-100'
    : '-translate-y-full opacity-0';

  const getMenuItemClasses = (index: number) => {
    return `transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`;
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-background z-[9990] flex flex-col justify-center items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${overlayClasses}`}
      >
        <nav className="flex flex-col items-center gap-y-4 md:gap-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-display text-[12vw] sm:text-[8vw] md:text-[6vw] text-foreground uppercase tracking-tight leading-none hover:text-primary transition-colors duration-300 ${getMenuItemClasses(index)}`}
              style={{ transitionDelay: `${isOpen ? 200 + index * 100 : (navItems.length - index - 1) * 50}ms` }}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);

                if (item.href === '#') return;

                const [path, hash] = item.href.split('#');

                if (window.location.pathname !== path) {
                  window.location.href = item.href;
                  return;
                }

                if (hash) {
                  const element = document.getElementById(hash);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Update URL without reload
                    window.history.pushState(null, '', item.href);
                  }
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState(null, '', path);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <header className="fixed -top-2 sm:-top-3 md:-top-4 left-0 right-0 z-[9999] p-0 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <Link
            to="/"
            className={`pointer-events-auto ml-6 md:ml-20 transition-opacity duration-300 ${hideLogo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Home"
          >
            <img
              src={BloomsLogo}
              alt="Blooms Creative Logo"
              className="block align-middle w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            style={{ backgroundColor: isOpen ? 'var(--color-primary)' : 'var(--color-secondary)' }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-7 h-5 sm:w-8 sm:h-6">
              <span className={`block absolute h-[3px] w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'}`} style={{ backgroundColor: 'var(--color-secondary-foreground)' }}></span>
              <span className={`block absolute h-[3px] w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] top-1/2 -translate-y-1/2 ${isOpen ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: 'var(--color-secondary-foreground)' }}></span>
              <span className={`block absolute h-[3px] w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0'}`} style={{ backgroundColor: 'var(--color-secondary-foreground)' }}></span>
            </div>
          </button>
        </div>
      </header>

      <ChatWidget />
    </>
  );
}