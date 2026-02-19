import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChevronDown,
  FaExternalLinkAlt,
  FaCode,
  FaEnvelope,
  FaPhone,
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
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <a href="#home">LGS</a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Header / Hero Section */}
      {/* Header / Hero Section */}
      <header id="home">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <br />
            <span className="highlight">Lee Gwang Su</span>
          </motion.h1>
          <motion.span
            className="typing-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Creative Web Developer & UI/UX Designer
          </motion.span>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="#projects" className="btn-hero">View My Work</a>
          </motion.div>


        </div>

        {/* Right Side Visual */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="hero-image-placeholder">
            {/* Abstract Code/Globe Visual Placeholder */}
            <FaCode size={100} color="var(--primary)" style={{ opacity: 0.8 }} />
          </div>
        </motion.div>

        {/* Scroll Down Indicator - Absolute text bottom */}
        <motion.div
          className="scroll-down"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown />
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                안녕하세요! 끊임없이 성장하는 <strong>웹 개발자 이광수</strong>입니다.
                사용자에게 편리하고 즐거운 경험을 제공하는 웹 사이트를 만드는 것에 열정을 가지고 있습니다.
                새로운 기술을 배우는 것을 두려워하지 않고, 항상 도전하는 자세로 임하겠습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="title">Tech Skills</h2>
          <motion.div className="skills-container" variants={container}>
            <motion.div className="skill-item" variants={item} whileHover={{ y: -5 }}>
              <FaHtml5 className="skill-icon html" />
              <span>HTML5</span>
            </motion.div>
            <motion.div className="skill-item" variants={item} whileHover={{ y: -5 }}>
              <FaCss3Alt className="skill-icon css" />
              <span>CSS3</span>
            </motion.div>
            <motion.div className="skill-item" variants={item} whileHover={{ y: -5 }}>
              <FaJs className="skill-icon js" />
              <span>JavaScript</span>
            </motion.div>
            <motion.div className="skill-item" variants={item} whileHover={{ y: -5 }}>
              <FaReact className="skill-icon react" />
              <span>React</span>
            </motion.div>
            <motion.div className="skill-item" variants={item} whileHover={{ y: -5 }}>
              <FaPhp className="skill-icon php" />
              <span>PHP</span>
            </motion.div>
            <motion.div className="skill-item" variants={item} whileHover={{ y: -5 }}>
              <FaFigma className="skill-icon figma" />
              <span>Figma</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <h2 className="title">My Projects</h2>
          <div className="projects">
            {/* Project 1 */}
            <motion.div className="project-card" whileHover={{ y: -10 }}>
              <div className="card-image">
                <img src="/img/project1.png" alt="반응형 웹 프로젝트" />
                <div className="overlay">
                  <a href="https://tndi0622.github.io/Responsible_web/" target="_blank" className="btn-icon">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="card-content">
                <h3>Game Info Site</h3>
                <p>반응형 웹 디자인을 적용한 게임 정보 제공 사이트입니다.</p>
                <div className="tags">
                  <span>HTML</span><span>CSS</span><span>JS</span>
                </div>
                <div className="card-footer">
                  <a href="https://tndi0622.github.io/Responsible_web/" target="_blank" className="btn-project-link">
                    View Project <FaExternalLinkAlt className="link-icon" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div className="project-card" whileHover={{ y: -10 }}>
              <div className="card-image">
                <img src="/img/project2.png" alt="서버 프로그램 구현" />
                <div className="overlay">
                  <a href="https://random.dothome.co.kr/server/index.php" target="_blank" className="btn-icon">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="card-content">
                <h3>Horoscope Site</h3>
                <p>PHP와 MySQL을 활용한 별자리 운세 확인 웹 애플리케이션입니다.</p>
                <div className="tags">
                  <span>PHP</span><span>MySQL</span>
                </div>
                <div className="card-footer">
                  <a href="https://random.dothome.co.kr/server/index.php" target="_blank" className="btn-project-link">
                    View Project <FaExternalLinkAlt className="link-icon" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3: Dokju Shopping Mall */}
            <motion.div className="project-card" whileHover={{ y: -10 }}>
              <div className="card-image">
                <img src="/img/project3.png" alt="Dokju Traditional Liquor" />
                <div className="overlay">
                  <a href="https://sake.dothome.co.kr/dokju/" target="_blank" className="btn-icon">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="card-content">
                <h3>Dokju (獨酒)</h3>
                <p>일본 전통주(사케) 전문 쇼핑몰. 사용자 취향 맞춤 추천 및 고급스러운 쇼핑 경험 제공.</p>
                <div className="tags">
                  <span>PHP</span><span>MySQL</span><span>E-commerce</span>
                </div>
                <div className="card-footer">
                  <a href="https://sake.dothome.co.kr/dokju/" target="_blank" className="btn-project-link">
                    View Project <FaExternalLinkAlt className="link-icon" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 4: Farming Letter */}
            <motion.div className="project-card" whileHover={{ y: -10 }}>
              <div className="card-image">
                <img src="/img/project4.png" alt="Farming Letter" />
                <div className="overlay">
                  <a href="https://farming-letter-vbm7.vercel.app/" target="_blank" className="btn-icon">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="card-content">
                <h3>Farming Letter</h3>
                <p>매주 배송되는 PC & 콘솔 게임 인사이트 뉴스레터. 최신 트렌드와 핫딜 정보를 제공합니다.</p>
                <div className="tags">
                  <span>Next.js</span><span>React</span><span>Newsletter</span>
                </div>
                <div className="card-footer">
                  <a href="https://farming-letter-vbm7.vercel.app/" target="_blank" className="btn-project-link">
                    View Project <FaExternalLinkAlt className="link-icon" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="social-links">
          <a href="https://github.com/tndi0622?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:tndi0622@naver.com"><FaEnvelope /></a>
          <a href="#"><FaBlog /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p>Built by Lee Gwang Su.</p>
        <p>&copy; 2026 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
