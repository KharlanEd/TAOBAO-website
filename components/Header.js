import { useEffect } from 'react';
import styled from '../styles/Header.module.css'

export const Header = () => {

   function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: targetPosition,
        behavior: 'smooth' 
      });
    }
  }

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleAnchorClick(event) {
    event.preventDefault(); 
    const target = event.currentTarget.getAttribute('href');
    smoothScroll(target);
  }

 
  useEffect(() => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

  
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });
return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [handleAnchorClick])


  return (
    <header className={styled.header} >
      <nav className={styled.nav}>
             <a href='#hero' className={styled.heder_link}>
        <svg width="100%" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Про мене</span>
      </a>
            <a href='#about' className={styled.heder_link}>
        <svg width="100%" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Курс</span>
        </a>
        
            <a href='#services' className={styled.heder_link}>
        <svg width="100%" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Тарифи</span>
        </a>

              <a href='#reviews' className={styled.heder_link}>
        <svg width="100%" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Відгуки</span>
      </a>
      </nav>
    </header>
  );
};