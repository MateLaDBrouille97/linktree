import React from 'react';
import { useUserContext } from '@/contexts/UserContext';


const Footer = () => {

const {dbUser}=useUserContext();

  return (
    <footer className="footer">
        <div className="footer__container container">
            
            
            <span className="footer__copy">&#169;2022 Manuel LABRIDY All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer