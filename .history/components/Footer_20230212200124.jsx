import React from 'react';
import { useUserContext } from '@/contexts/UserContext';
import Socials from './Socials';
import data from "data.json";

const Footer = () => {

const {dbUser}=useUserContext();

  return (
    <footer className="footer">
        <div className="footer__container container">
            
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#ownership" className="footer__link">Ownerships</a>
                </li>
            </ul>
            <div className="footer__social">

            
            {data?.socials?.map((social) => {
              return <Socials title={social?.title} key={social?.href} />;
            })}
          
     
            </div>
            <span className="footer__copy">&#169;2022 Manuel LABRIDY All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer