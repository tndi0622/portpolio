import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaBlog,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaFigma
} from 'react-icons/fa';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { id: 'profile', label: 'PROFILE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'work', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const getPageStyle = (index) => {
    const diff = index - currentPage;

    if (diff === 0) {
      return {
        zIndex: 100,
        transform: 'translateX(0) rotateY(0) scale(1)',
        opacity: 1,
        pointerEvents: 'auto'
      };
    } else if (diff < 0) {
      // Past pages (moved to the left and out)
      return {
        zIndex: 10,
        transform: `translateX(-120%) rotateY(-45deg) scale(0.9)`,
        opacity: 0,
        pointerEvents: 'none'
      };
    } else {
      // Future pages (stacked behind)
      return {
        zIndex: 100 - index,
        transform: `translateX(${diff * 20}px) translateY(${diff * 10}px) translateZ(${-diff * 100}px) scale(${1 - diff * 0.05})`,
        opacity: 1 - diff * 0.3,
        pointerEvents: 'none'
      };
    }
  };

  return (
    <div className="dossier-container">
      {/* Index Tabs */}
      <div className="index-tabs">
        {pages.map((page, index) => (
          <button
            key={page.id}
            className={`tab ${currentPage === index ? 'active' : ''}`}
            onClick={() => setCurrentPage(index)}
          >
            {page.label}
          </button>
        ))}
      </div>

      {/* Pages Stack */}
      <div className="pages-stack">
        {/* Page 1: Profile */}
        <div className="dossier-page" style={getPageStyle(0)}>
          <div className="page-header">
            <span className="page-label">FILE NO. 001 / PERSONNEL</span>
            <div className="dossier-stamp">APPROVED</div>
          </div>
          <div className="cover-content">
            <div className="cover-text">
              <motion.h1
                className="page-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                HELLO,<br />
                I'M <span style={{ color: 'var(--accent)' }}>LEE GWANG SU</span>
              </motion.h1>
              <motion.p
                className="typing-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Creative Web Developer & UI/UX Designer
              </motion.p>
              <div style={{ marginTop: '40px' }}>
                <p style={{ color: 'var(--text-muted)', maxWidth: '450px', lineHeight: '1.8' }}>
                  안녕하세요! 끊임없이 성장하는 웹 개발자 이광수입니다.
                  사용자에게 편리하고 즐거운 경험을 제공하는 웹 사이트를 만드는 것에 열정을 가지고 있습니다.
                  새로운 기술을 배우는 것을 두려워하지 않고, 항상 도전하는 자세로 임하겠습니다.
                </p>
              </div>
            </div>
            <div className="cover-image-area">
              <motion.div
                className="hero-image-placeholder"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <FaCode size={120} color="var(--primary)" style={{ opacity: 0.2 }} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Page 2: Skills */}
        <div className="dossier-page" style={getPageStyle(1)}>
          <div className="page-header">
            <span className="page-label">FILE NO. 002 / SPECIFICATIONS</span>
            <div className="dossier-stamp" style={{ borderColor: 'var(--secondary)' }}>CLASSIFIED</div>
          </div>
          <h2 className="page-title" style={{ marginBottom: '40px' }}>TECH SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-report-item">
              <FaHtml5 className="skill-report-icon" style={{ color: '#e34c26' }} />
              <h3>HTML5</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>Semantic structure & SEO</p>
            </div>
            <div className="skill-report-item">
              <FaCss3Alt className="skill-report-icon" style={{ color: '#264de4' }} />
              <h3>CSS3</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>Layout, Animations & Responsive</p>
            </div>
            <div className="skill-report-item">
              <FaJs className="skill-report-icon" style={{ color: '#f7df1e' }} />
              <h3>JavaScript</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>ES6+, Async, DOM Manipulation</p>
            </div>
            <div className="skill-report-item">
              <FaReact className="skill-report-icon" style={{ color: '#61dbfb' }} />
              <h3>React</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>Component hooks, SPA state management</p>
            </div>
            <div className="skill-report-item">
              <FaPhp className="skill-report-icon" style={{ color: '#8993be' }} />
              <h3>PHP</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>Server-side logic & MySQL integration</p>
            </div>
            <div className="skill-report-item">
              <FaFigma className="skill-report-icon" style={{ color: '#f24e1e' }} />
              <h3>Figma</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>Prototyping & Design system</p>
            </div>
          </div>
        </div>

        {/* Page 3: Work */}
        <div className="dossier-page" style={getPageStyle(2)}>
          <div className="page-header">
            <span className="page-label">FILE NO. 003 / CASE_STUDIES</span>
            <div className="dossier-stamp">ACTIVE PROJECTS</div>
          </div>
          <h2 className="page-title" style={{ marginBottom: '40px' }}>WORK SAMPLES</h2>
          <div className="projects-list">
            <div className="project-page-card">
              <div className="project-visual">
                <img src="/img/project1.png" alt="Game Info Site" />
              </div>
              <div>
                <h3>Game Info Site</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0' }}>반응형 웹 디자인을 적용한 게임 정보 제공 사이트</p>
                <a href="https://tndi0622.github.io/Responsible_web/" target="_blank" className="btn-project-link">VIEW CASE <FaExternalLinkAlt size={12} /></a>
              </div>
            </div>
            <div className="project-page-card">
              <div className="project-visual">
                <img src="/img/project2.png" alt="Horoscope Site" />
              </div>
              <div>
                <h3>Horoscope Site</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0' }}>PHP/MySQL 기반 별자리 운세 애플리케이션</p>
                <a href="https://random.dothome.co.kr/server/index.php" target="_blank" className="btn-project-link">VIEW CASE <FaExternalLinkAlt size={12} /></a>
              </div>
            </div>
            <div className="project-page-card">
              <div className="project-visual">
                <img src="/img/project3.png" alt="Dokju Traditional Liquor" />
              </div>
              <div>
                <h3>Dokju (獨酒)</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0' }}>일본 전통주 전문 E-commerce 플랫폼</p>
                <a href="https://sake.dothome.co.kr/dokju/" target="_blank" className="btn-project-link">VIEW CASE <FaExternalLinkAlt size={12} /></a>
              </div>
            </div>
            <div className="project-page-card">
              <div className="project-visual">
                <img src="/img/project4.png" alt="Farming Letter" />
              </div>
              <div>
                <h3>Farming Letter</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '10px 0' }}>Next.js 기반 게임 인사이트 뉴스레터</p>
                <a href="https://farming-letter-vbm7.vercel.app/" target="_blank" className="btn-project-link">VIEW CASE <FaExternalLinkAlt size={12} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Page 4: Contact */}
        <div className="dossier-page" style={getPageStyle(3)}>
          <div className="page-header">
            <span className="page-label">FILE NO. 004 / FINAL_MEMO</span>
            <div className="dossier-stamp" style={{ borderStyle: 'solid', color: 'var(--primary)' }}>URGENT</div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 className="page-title">GET IN TOUCH</h2>
            <div className="contact-memo" style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>tndi0622@naver.com</p>
              <p style={{ color: 'var(--text-muted)' }}>새로운 프로젝트나 협업 제안은 언제든 환영합니다.</p>
              <div className="social-grid">
                <a href="https://github.com/tndi0622" target="_blank" className="social-item"><FaGithub /></a>
                <a href="mailto:tndi0622@naver.com" className="social-item"><FaEnvelope /></a>
                <a href="#" className="social-item"><FaBlog /></a>
                <a href="#" className="social-item"><FaInstagram /></a>
              </div>
            </div>
            <div style={{ marginTop: '100px', opacity: 0.5, fontSize: '0.8rem', letterSpacing: '2px' }}>
              <p>&copy; 2026 ARCHIVE SYSTEM. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
