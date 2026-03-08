import { motion, useScroll, useMotionValueEvent, useTransform, useAnimation } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { ScrollVelocity } from './ScrollVelocity';
import Antigravity from './Antigravity';
import TiltedCard from './TiltedCard';
import './App.css';


/* ─────────────── Nav Bar ─────────────── */
function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="nav-logo">Kairo</a>
      <div className="nav-links">
        <a href="#about">Philosophy</a>
        <a href="#pricing">Pricing</a>
        <a
          href="https://api.whatsapp.com/send/?phone=7009580010&text=Hey&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >Get Access</a>
      </div>
    </motion.nav>
  );
}

/* ─────────────── Baymax Float ─────────────── */
function BaymaxFloat() {
  const controls = useAnimation();

  useEffect(() => {
    controls
      .start({ opacity: 1, y: 0, transition: { duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] } })
      .then(() => {
        if (!window.matchMedia('(max-width: 540px)').matches) {
          controls.start({
            y: [0, -32, 0],
            transition: { duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 },
          });
        }
      });
  }, []);

  return (
    <motion.img
      src="/baymax.png"
      alt="Baymax"
      className="hero-baymax"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      draggable={false}
    />
  );
}

/* ─────────────── Hero ─────────────── */
function Hero() {
  return (
    <section className="hero">
      {/* Antigravity particle canvas — full hero background */}
      <div className="hero-canvas">
        <Antigravity
          count={300}
          magnetRadius={9}
          ringRadius={9}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#c5a881"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      {/* Ambient glow orbs */}
      <div className="hero-glow hero-glow--amber" />
      <div className="hero-glow hero-glow--blue" />

      {/* Grain texture */}
      <div className="hero-grain" />

      {/* Baymax — floating right */}
      <BaymaxFloat />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow-dot" />
          right place · right time
        </motion.div>

        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Kairo
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Like journaling&hellip; <em>but the journal talks back.</em>
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=7009580010&text=Hey&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-pill"><div className="scroll-dot" /></div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

/* ─────────────── Story Section ─────────────── */
const STORY_BLOCKS = [
  { text: "We all carry thoughts we don't say out loud.", big: true, gap: '0.8rem' },
  { text: "Sometimes sharing them is the first step to feeling lighter. Kairo gives you a space to do exactly that.", big: false, gap: '6.5rem' },
  { text: "Your thoughts matter.", big: true, gap: '0rem' },
  { text: "Your feelings matter.", big: true, gap: '0.4rem' },
  { text: "And taking a moment to reflect on them is never wasted time.", big: false, gap: '0' },
];

function StorySection() {
  return (
    <div className="story-scroll">
      <div className="story-content">
        {STORY_BLOCKS.map((block, i) => (
          <motion.p
            key={i}
            className={[
              'story-block',
              block.big ? 'story-block--big' : 'story-block--small',
              block.italic ? 'story-block--italic' : '',
            ].join(' ')}
            style={{ marginBottom: block.gap }}
            initial={{ color: block.big ? '#2e2820' : 'rgba(201,168,124,0.18)' }}
            whileInView={{ color: block.big ? '#D6CBBA' : '#C9A87C' }}
            viewport={{ once: false, margin: '0px 0px -30% 0px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {block.text}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── Philosophy Band ─────────────── */
function PhilosophyBand() {
  return (
    <div id="about" className="philosophy-band">
      <ScrollVelocity
        texts={[
          'Buddhism · Stoicism · Bhagwad Geeta · Osho'
        ]}
        velocity={80}
        className="philo-text"
        numCopies={4}
      />
      <ScrollVelocity
        texts={[
          'Rumi · Pragmatism · Cynicism · Second Arrow'
        ]}
        velocity={80}
        className="philo-text philo-text--muted"
        numCopies={4}
      />
    </div>
  );
}

/* ─────────────── About / Deep perspectives ─────────────── */
function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <motion.div
          className="about-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="label-line" />
          Our Philosophy
        </motion.div>

        <motion.h2
          className="about-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Deep perspectives.<br />
          <span className="text-accent">Zero toxic positivity.</span>
        </motion.h2>

        <motion.p
          className="about-body"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          We combine world‑class philosophical frameworks to give you the real clarity your mind craves, not empty encouragement.
        </motion.p>

        {/* Framework Cards */}
        <div className="framework-grid">
          {[
            { name: 'Buddhism', desc: 'Let go. Be present.', icon: '☸' },
            { name: 'Stoicism', desc: 'Control what you can.', icon: '⚖' },
            { name: 'Bhagwad Geeta', desc: 'Act without attachment.', icon: '🌿' },
            { name: 'Osho', desc: 'Celebrate the self.', icon: '✦' },
            { name: "Rumi's Presence", desc: 'Live inside the moment.', icon: '🌹' },
            { name: 'Pragmatism', desc: 'Truth is what works.', icon: '◈' },
            { name: 'Cynicism', desc: 'Strip back to virtue.', icon: '⌁' },
            { name: 'Second Arrow Logic', desc: 'Pain is one arrow. Suffer less.', icon: '→' },
          ].map((f, i) => (
            <motion.div
              className="framework-card"
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <span className="card-icon">{f.icon}</span>
              <h3 className="card-name">{f.name}</h3>
              <p className="card-desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Feature / Languages ─────────────── */
function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="features-inner">
        <motion.div
          className="features-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-label">
            <span className="label-line" />The best part
          </div>
          <h2 className="features-heading">
            Talk in any language<br />you <em>think</em> in.
          </h2>
        </motion.div>

        <motion.div
          className="features-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lang-pills">
            {['English', 'Hindi', 'Hinglish'].map((l, i) => (
              <motion.span
                className="lang-pill"
                key={l}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                {l}
              </motion.span>
            ))}
          </div>
          <p className="features-body">
            It&apos;s like chatting with someone who <strong>never judges</strong>, 
            understands every perspective, and keeps your conversations completely private.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── Building Animation ─────────────── */
const buildLines = [
  '> initializing Kairo Premium Plus...',
  '> Developer not found',
];

function BuildingAnimation() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (currentLine >= buildLines.length) {
      const reset = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCharIdx(0);
      }, 2000);
      return () => clearTimeout(reset);
    }
    const line = buildLines[currentLine];
    if (charIdx < line.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, line]);
        setCurrentLine(l => l + 1);
        setCharIdx(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [currentLine, charIdx]);

  const current = currentLine < buildLines.length ? buildLines[currentLine].slice(0, charIdx) : '';

  return (
    <div className="build-terminal">
      {visibleLines.map((l, i) => (
        <div key={i} className={`build-line ${i === 0 ? 'build-line--ok' : 'build-line--error'}`}>{l}</div>
      ))}
      {currentLine < buildLines.length && (
        <div className={`build-line ${currentLine === 0 ? 'build-line--ok' : 'build-line--error'} build-line--active`}>
          {current}<span className="build-cursor" />
        </div>
      )}
    </div>
  );
}

/* ─────────────── Pricing Section ─────────────── */
const CARD_BG = 'data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22400%22 height%3D%22520%22%3E%3Crect width%3D%22400%22 height%3D%22520%22 fill%3D%22%23141210%22%2F%3E%3C%2Fsvg%3E';

function PricingSection() {
  const plans = [
    {
      tag: 'Premium',
      name: 'Kairo Premium',
      tagline: 'My server bills are as real as my perspective.',
      price: '₹99',
      period: 'per month',
      highlight: true,
      features: ['No limits, just deep talks.', 'All philosophical frameworks', 'Private & non-judgmental'],
      note: "You'll get your subscription details via WhatsApp.",
      extra: null,
      torn: false,
    },
    {
      tag: 'Premium Plus',
      name: 'Kairo Premium Plus',
      tagline: 'Something extraordinary is being assembled.',
      price: '₹249',
      period: 'per month',
      highlight: false,
      features: ['Voice conversations', 'Better model, deeper analysis'],
      note: null,
      extra: <BuildingAnimation />,
      torn: false,
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-inner">
        <motion.div
          className="about-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-line" />
          Pricing
        </motion.div>

        <motion.h2
          className="pricing-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Choose your depth
        </motion.h2>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`pricing-tilt-wrapper${plan.torn ? ' pricing-tilt-wrapper--torn' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltedCard
                imageSrc={CARD_BG}
                containerHeight="auto"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}>
                    <div className="pricing-card-top">
                      <span className="pricing-tag">{plan.tag}</span>
                      {!plan.highlight && <span className="pricing-soon">Coming Soon</span>}
                    </div>
                    <h3 className="pricing-name">{plan.name}</h3>
                    <p className="pricing-tagline">{plan.tagline}</p>
                    <div className="pricing-price">
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </div>
                    <ul className="pricing-features">
                      {plan.features.map(f => (
                        <li key={f}><span className="feat-dot" />{f}</li>
                      ))}
                    </ul>
                    {plan.note && <p className="pricing-note">{plan.note}</p>}
                    {plan.extra && <div className="pricing-extra">{plan.extra}</div>}
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ─────────────── Footer ─────────────── */
const POLICIES = [
  {
    label: 'Refund Policy',
    text: "Since this is a digital service, we don't offer refunds, but you can cancel your subscription at any time to avoid future charges.",
  },
  {
    label: 'Privacy Policy',
    text: 'We respect your privacy. Your chats are processed to give you responses and are never shared with third parties for advertising.',
  },
  {
    label: 'Terms & Conditions',
    text: 'By using Kairo, you agree that this is an AI companion and not a substitute for professional medical or mental health advice.',
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <span className="footer-logo">Kairo</span>
          <p className="footer-tagline">Your space to think out loud.</p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <span className="footer-label">Contact Us</span>
          <a href="mailto:vishavgarg90@gmail.com" className="footer-email">
            vishavgarg90@gmail.com
          </a>
        </div>

        {/* Policies */}
        <div className="footer-policies">
          {POLICIES.map((p) => (
            <div key={p.label} className="footer-policy">
              <span className="footer-policy-label">{p.label}</span>
              <p className="footer-policy-text">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Kairo. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── App ─────────────── */
export default function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <StorySection />
      <PhilosophyBand />

      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
