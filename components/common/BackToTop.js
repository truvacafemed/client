'use client'
import React, { useEffect } from 'react';

export default function BackToTop() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {

    let scrollPosition = 0;

    const isScrollingDown = () => {      
      let scrollingDown = false;
      let newScrollPosition = window.pageYOffset;
      if (newScrollPosition > scrollPosition) {
        scrollingDown = true;
      }
      scrollPosition = newScrollPosition;
      return scrollingDown;
    };
    const handleScroll = () => {
        const scrollToTopButton = document.querySelector('[data-back-to-top-button]');
        if (isScrollingDown() || window.pageYOffset == 0) {
          scrollToTopButton.classList.add('opacity-0', 'invisible');
          scrollToTopButton.classList.remove('opacity-100', 'visible');
        } else {
          scrollToTopButton.classList.remove('opacity-0', 'invisible');
          scrollToTopButton.classList.add('opacity-100', 'visible');
        }
      };
      
      window.addEventListener("scroll", handleScroll);
  
    });
  
    return (
      <div data-back-to-top-button role="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top" className="fixed bottom-4 right-2 z-10 bg-transparent text-white group w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-back-to-top opacity-0 invisible">
        <img src='/img/up-icon.png' width={48} height={48}/>
      </div>
    )
  
  }