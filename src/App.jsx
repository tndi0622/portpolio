import React, { useState, useRef } from 'react';
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
  FaFigma,
  FaUndo
} from 'react-icons/fa';
import { SiFlutter, SiNextdotjs } from 'react-icons/si';
import './App.css';

function App() {
  const pages = [
    { id: 'profile', label: 'PROFILE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'work', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const totalPages = pages.length;
  const mainRef = useRef(null);

  const handleReset = () => {
    setResetKey(prev => prev + 1);
    setHasMoved(false);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);



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
    <div className="dossier-container" ref={mainRef}>
      {/* Reset Button - Conditional Rendering with Animation */}
      <AnimatePresence>
        {hasMoved && (
          <motion.button
            className="reset-btn"
            onClick={handleReset}
            title="Reset Layout"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUndo /> <span>RESET CARDS</span>
          </motion.button>
        )}
      </AnimatePresence>

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
        <motion.div
          className="dossier-page"
          style={getPageStyle(0)}
        >
          <div className="page-header">
            <span className="page-label">FILE NO. 001 </span>
          </div>
          <div className="cover-content">
            <div className="cover-text">
              <div className="profile-intro-info" style={{ marginTop: '30px' }}>
                <div className="intro-badge">
                  <span className="badge-label">NAME</span>
                  <span className="badge-value">이광수</span>
                </div>
                <div className="intro-badge">
                  <span className="badge-label">AGE</span>
                  <span className="badge-value">25 (2001)</span>
                </div>
              </div>
              <div style={{ marginTop: '30px' }}>
                <p style={{ color: 'var(--text-muted)', maxWidth: '450px', lineHeight: '1.8' }}>
                  안녕하세요! 끊임없이 성장하는 웹 개발자 이광수입니다. <br />
                  사용자에게 편리하고 즐거운 경험을 제공하는 웹 사이트를 만드는 것에 열정을 가지고 있습니다.
                </p>
              </div>
            </div>
            <div className="timeline-area">
              <div className="timeline-container">
                <div className="timeline-stem"></div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">2025 - 2026</span>
                    <h3 className="timeline-title">영진직업전문학교 수료</h3>
                    <p className="timeline-desc">
                      생성형 AI 기반 UI/UX 디자인 <br />
                      웹 앱 개발 컨텐츠 개발 과정
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">CURRENT STATUS</span>
                    <h3 className="timeline-title">Creative Developer</h3>
                    <p className="timeline-desc">Available for Collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Page 2: Skills */}
        <motion.div
          className="dossier-page"
          style={getPageStyle(1)}
        >
          <div className="page-header">
            <span className="page-label">FILE NO. 002 </span>
          </div>
          <h2 className="page-title" style={{ marginBottom: '40px' }}>TECH SKILLS</h2>
          <div className="skills-grid">
            {[
              { name: 'HTML5', icon: <FaHtml5 />, color: '#e34c26', desc: 'Semantic structure & SEO' },
              { name: 'CSS3', icon: <FaCss3Alt />, color: '#264de4', desc: 'Layout, Animations & Responsive' },
              { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', desc: 'ES6+, Async, DOM Manipulation' },
              { name: 'React', icon: <FaReact />, color: '#61dbfb', desc: 'Component hooks, SPA state management' },
              { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000', desc: 'SSR, Static Site Generation & API Routes' },
              { name: 'Flutter', icon: <SiFlutter />, color: '#02569B', desc: 'Cross-platform Mobile/Web Development' },
              { name: 'PHP', icon: <FaPhp />, color: '#8993be', desc: 'Server-side logic & MySQL integration' },
              { name: 'Figma', icon: <FaFigma />, color: '#f24e1e', desc: 'Prototyping & Design system' },
            ].map((skill, idx) => (
              <motion.div
                className="skill-report-item"
                key={`${resetKey}-${idx}`}
                drag
                dragConstraints={mainRef}
                dragMomentum={true}
                onDragStart={() => setHasMoved(true)}
                whileDrag={{ scale: 1.1, zIndex: 3000 }}
                animate={{ x: 0, y: 0 }}
                dragTransition={{
                  power: 0.4,           // Natural momentum
                  timeConstant: 200,    // Smooth deceleration
                  bounceStiffness: 300, // Softer bounce off walls
                  bounceDamping: 20     // Stable landing
                }}
                dragElastic={0.8}      // Softer wall interaction to prevent glitching
                style={{ cursor: 'grab' }}
              >
                <div className="skill-report-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '10px' }}>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Page 3: Work */}
        <motion.div
          className="dossier-page"
          style={getPageStyle(2)}
        >
          <div className="page-header">
            <span className="page-label">FILE NO. 003 </span>
          </div>
          <h2 className="page-title" style={{ marginBottom: '40px' }}>WORK SAMPLES</h2>
          <div className="projects-list">
            {[
              {
                title: 'Game Info Site',
                desc: '반응형 웹 디자인을 적용한 게임 정보 제공 사이트',
                live: 'https://tndi0622.github.io/Responsible_web/',
                github: 'https://github.com/tndi0622/Responsible_web',
                img: '/img/project1.png',
                tech: ['HTML5', 'CSS3', 'JavaScript']
              },
              {
                title: 'Horoscope Site',
                desc: 'PHP/MySQL 기반 별자리 운세 애플리케이션',
                live: 'https://random.dothome.co.kr/server/index.php',
                github: 'https://github.com/tndi0622/test_server',
                img: '/img/project2.png',
                tech: ['PHP', 'MySQL', 'JavaScript']
              },
              {
                title: 'Dokju (獨酒)',
                desc: '일본 전통주 전문 E-commerce 플랫폼',
                live: 'https://sake.dothome.co.kr/dokju/',
                github: 'https://github.com/tndi0622/dokju',
                img: '/img/project3.png',
                tech: ['PHP', 'MySQL', 'HTML5', 'CSS3']
              },
              {
                title: 'Farming Letter',
                desc: 'Next.js 기반 게임 인사이트 뉴스레터',
                live: 'https://farming-letter-vbm7.vercel.app/',
                github: 'https://github.com/tndi0622/Farming_Letter',
                img: '/img/project4.png',
                tech: ['Next.js', 'React']
              },
              {
                title: 'Eco Helper (에코도우미)',
                desc: '지역별 맞춤형 쓰레기 배출 및 재활용 관리 서비스',
                live: 'https://eco-henna-five.vercel.app/',
                github: 'https://github.com/tndi0622/eco',
                img: '/img/project5.png',
                tech: ['React', 'TypeScript', 'Next.js']
              }
            ].map((project, idx) => (
              <div
                className="project-page-card"
                key={idx}
              >
                <div className="project-visual">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tech-stack">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                      VIEW SITE <FaExternalLinkAlt size={12} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-project-link github-link">
                      CODE <FaGithub size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Page 4: Contact */}
        <motion.div
          className="dossier-page"
          style={getPageStyle(3)}
        >
          <div className="page-header">
            <span className="page-label">FILE NO. 004 </span>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 className="page-title">GET IN TOUCH</h2>
            <div className="contact-memo" style={{ marginTop: '40px' }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>tndi0622@naver.com</p>
              <p style={{ color: 'var(--text-muted)' }}>새로운 프로젝트나 협업 제안은 언제든 환영합니다.</p>
              <div className="social-grid">
                <a href="https://github.com/tndi0622" target="_blank" className="social-item"><FaGithub /></a>
                <button
                  className={`social-item icon-btn ${showCard ? 'active' : ''}`}
                  onClick={() => setShowCard(!showCard)}
                  title="View Business Card"
                >
                  <FaEnvelope />
                </button>
                <a href="#" className="social-item"><FaBlog /></a>
                <a href="#" className="social-item"><FaInstagram /></a>
              </div>

              <AnimatePresence>
                {showCard && (
                  <motion.div
                    className="business-card-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowCard(false)}
                  >
                    <motion.div
                      className="business-card"
                      initial={{ scale: 0.5, y: 50, rotateX: 45 }}
                      animate={{ scale: 1, y: 0, rotateX: 0 }}
                      exit={{ scale: 0.5, y: 50, rotateX: 45 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="card-top">
                        <span className="card-logo">LGS</span>
                        <span className="card-rank">CREATOR</span>
                      </div>
                      <div className="card-main">
                        <h2 className="card-name">이광수</h2>
                        <div className="card-info">
                          <p><span>TEL.</span> 010 - 7979 - 4510</p>
                          <p><span>E-MAIL.</span> tndi0622@naver.com</p>
                        </div>
                      </div>
                      <div className="card-decoration"></div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div style={{ marginTop: '100px', opacity: 0.5, fontSize: '0.8rem', letterSpacing: '2px' }}>
              <p>&copy; 2026 ARCHIVE SYSTEM. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </motion.div>
      </div >
    </div >
  );
}

export default App;
