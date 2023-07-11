import styled from '../styles/Header.module.css'

export const Header = () => {
  return (
    <header className={styled.header} >
      <nav className={styled.nav}>
             <a className={styled.heder_link}>
        <svg width="150px" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Про мене</span>
      </a>
            <a className={styled.heder_link}>
        <svg width="150px" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Купить</span>
      </a>
              <a className={styled.heder_link}>
        <svg width="150px" height="50px" viewBox="0 0 180 60" className={styled.svg}>
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Відгуки</span>
      </a>
      </nav>
    </header>
  );
};