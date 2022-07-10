import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div id="#home" className="app__header app__flex">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
     
      className="app__header-info">
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Reynaldo</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Computer Science and Engineering</p>
          <p className="p-text">Bachelor Student</p>
        </div>
      </div>
    </motion.div> 
  </div>
);

export default AppWrap(Header, 'home');
