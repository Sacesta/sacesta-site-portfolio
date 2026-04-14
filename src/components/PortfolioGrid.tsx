import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { caseStudiesData } from '../data/caseStudies';
import '../styles/Showcase.css';

// Import assets as per original MagicBento (assuming paths are correct)
import esimPlatformBg from '../assets/esim-platform-bg.png';
import zenaiBg from '../assets/zenai.png';
import mayuriBg from '../assets/mayuri.png';
import evokeBg from '../assets/evoke.png';
import shividBg from '../assets/shivid-bg.png';
import crmBg from '../assets/crmbg.png';
import seacatBg from '../assets/seacatbg.png';
import visit from '../assets/visitahmdavadbg.png';
import picbg from '../assets/picbg.png';
import xray from '../assets/xray.png';
import bharatupline from '../assets/bharatupline.png';
import comehomebg from '../assets/comehombg.png';

const seacatBoatsBg = seacatBg;

const assetMap: Record<string, string> = {
  'esim-platform': esimPlatformBg,
  'zenn-ai': zenaiBg,
  'collaboration': mayuriBg,
  'evoke-dholavira': evokeBg,
  'security': shividBg,
  'security-2': shividBg,
  'hustlerguys-crm': crmBg,
  'seacatboats': seacatBoatsBg,
  'analytics': visit,
  'dashboard': picbg,
  'ai-diagnostics': xray,
  'automation': bharatupline,
  'bharat-upline': bharatupline,
  'integration': comehomebg,
};

import { CaseStudyData } from '../data/caseStudies';

const PortfolioCard: React.FC<{ study: CaseStudyData; index: number }> = ({ study, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleClick = () => {
    navigate(`/case-study/${study.id}`, { state: { caseStudy: study } });
  };

  const image = assetMap[study.id] || '';

  return (
    <motion.div
      ref={cardRef}
      className="premium-card"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-spotlight" />
      <div className="card-image-wrapper">
        <img src={image} alt={study.title} className="card-image" />
      </div>
      <div className="card-info">
        <h3 className="card-title">{study.title}</h3>
        <p className="card-description">{study.subtitle || study.description}</p>
      </div>
    </motion.div>
  );
};

const PortfolioGrid: React.FC = () => {
  return (
    <div className="portfolio-grid-wrapper">
      {caseStudiesData.map((study, idx) => (
        <PortfolioCard key={study.id} study={study} index={idx} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
