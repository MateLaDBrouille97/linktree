import React from 'react';
import { useUserContext } from '@/contexts/UserContext';
import Socials from './Socials';
import data from "data.json";

const Footer = () => {

const {dbUser}=useUserContext();

  return (
    <footer className="footer">
        <div className="footer__container container">
            
            
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