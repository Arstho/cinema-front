import React from 'react';
import styles from './footer.module.css'
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  const handleMain = () => {
    navigate('/')
  }
  return (
    <footer>
      <div>
        <h4>Поддержка</h4>
        <ul>
          <li>Связаться с нами: (928) 890-72-65</li>
          <li>Наша почта: muslim_abdulov@mail.ru</li>
          <li>Написать в вацап: <a href="whatsapp://send?phone=1234567890">(928) 016-55-34</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
      <h1 className={styles.footerLogo} onClick={handleMain}>KINO</h1>
      <div>
        <h4>Наши социальные страницы</h4>
        <ul>
          <li><a href="https://vk.com">VK</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};