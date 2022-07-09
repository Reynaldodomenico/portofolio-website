import React from 'react';
import { FaFacebookF, FaGithub,FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/Reynaldodomenico">
      <div>
        <FaGithub/>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/reynaldo-domenico-54209a21a/">
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href="https://www.facebook.com/reynaldo.domenico.1">
      <div>
        <FaFacebookF/>
      </div>
    </a>   
  </div>
  
);

export default SocialMedia;