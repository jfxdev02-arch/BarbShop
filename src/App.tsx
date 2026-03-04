import { useState, useEffect } from 'react'
import './App.css'

// SVG Icons Components
const ScissorsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z"/>
  </svg>
)

const BeardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3 5.5c-2.33 0-4.32-1.45-5.12-3.5h1.67c.69 1.19 1.97 2 3.45 2s2.76-.81 3.45-2h1.67c-.8 2.05-2.79 3.5-5.12 3.5z"/>
  </svg>
)

const RazorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
  </svg>
)

const HairIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const StarIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className="star-icon">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="check-icon">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
)

// Barber Pole SVG Animation
const BarberPole = () => (
  <svg viewBox="0 0 40 200" className="barber-pole">
    <defs>
      <linearGradient id="poleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#d4af37"/>
        <stop offset="50%" stopColor="#f4e5c2"/>
        <stop offset="100%" stopColor="#d4af37"/>
      </linearGradient>
      <pattern id="stripes" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
        <rect width="20" height="40" fill="#1a1a1a"/>
        <rect x="20" width="20" height="40" fill="#d4af37"/>
      </pattern>
    </defs>
    <rect x="5" y="0" width="30" height="10" rx="2" fill="url(#poleGradient)"/>
    <rect x="5" y="10" width="30" height="180" fill="url(#stripes)" className="pole-stripes"/>
    <rect x="5" y="190" width="30" height="10" rx="2" fill="url(#poleGradient)"/>
  </svg>
)

// Decorative Elements
const DecorativeLine = () => (
  <svg viewBox="0 0 200 20" className="decorative-line">
    <path d="M0 10 Q 50 0, 100 10 T 200 10" stroke="currentColor" fill="none" strokeWidth="2"/>
    <circle cx="100" cy="10" r="4" fill="currentColor"/>
  </svg>
)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '', time: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
    setFormData({ name: '', phone: '', service: '', date: '', time: '' })
  }

  const services = [
    {
      icon: <ScissorsIcon />,
      title: "Corte Premium",
      description: "Cortes modernos e clássicos com técnicas avançadas",
      price: "R$ 45",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop"
    },
    {
      icon: <BeardIcon />,
      title: "Barba Completa",
      description: "Modelagem, tosa e finalização com produtos premium",
      price: "R$ 35",
      duration: "30 min",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop"
    },
    {
      icon: <RazorIcon />,
      title: "Barbearia Clássica",
      description: "Corte + Barba com toalha quente e navalha",
      price: "R$ 70",
      duration: "90 min",
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop"
    },
    {
      icon: <HairIcon />,
      title: "Pigmentação",
      description: "Pigmentação capilar para cobrir falhas",
      price: "R$ 80",
      duration: "60 min",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop"
    },
    {
      icon: <ScissorsIcon />,
      title: "Sobrancelha",
      description: "Design e alinhamento de sobrancelhas masculinas",
      price: "R$ 20",
      duration: "15 min",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=300&fit=crop"
    },
    {
      icon: <StarIcon filled />,
      title: "Combo Executivo",
      description: "Corte + Barba + Sobrancelha + Hidratação",
      price: "R$ 120",
      duration: "120 min",
      image: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=400&h=300&fit=crop"
    }
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&h=400&fit=crop"
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Melhor barbearia da cidade! Profissionais extremamente capacitados e ambiente aconchegante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Ricardo Santos",
      text: "Atendimento impecável e resultados incríveis. Sou cliente há 3 anos e nunca me decepcionei.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "André Costa",
      text: "Ambiente premium e preços justos. A equipe está sempre atualizada com as últimas tendências.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ]

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav container">
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 50 50" className="logo-svg">
                <path d="M25 5 L30 20 L45 20 L33 30 L38 45 L25 35 L12 45 L17 30 L5 20 L20 20 Z" 
                      fill="#d4af37" stroke="#d4af37" strokeWidth="1"/>
                <circle cx="25" cy="25" r="8" fill="#1a1a1a"/>
                <text x="25" y="29" textAnchor="middle" fontSize="10" fill="#d4af37" fontWeight="bold">B</text>
              </svg>
            </div>
            <span>BarbShop</span>
          </a>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galeria</a></li>
            <li><a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Depoimentos</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>

          <a href="#agendamento" className="btn-cta">Agendar</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-bg">
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop" 
            alt="Barbershop" 
            className="hero-image"
          />
        </div>
        
        <div className="barber-pole-left">
          <BarberPole />
        </div>
        <div className="barber-pole-right">
          <BarberPole />
        </div>

        <div className="hero-content container">
          <div className="hero-badge">
            <StarIcon filled />
            <span>5.0 - 200+ clientes satisfeitos</span>
          </div>
          
          <h1>
            <span className="hero-subtitle">Bem-vindo à</span>
            <span className="hero-title">BarbShop</span>
          </h1>
          
          <DecorativeLine />
          
          <p className="hero-description">
            Transforme seu visual com os melhores profissionais da cidade. 
            Cortes modernos, barbas impecáveis e uma experiência única de cuidado masculino.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Clientes Atendidos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Profissionais</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#agendamento" className="btn-primary">
              <span>Agendar Horário</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
            <a href="#servicos" className="btn-secondary">
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nossos Serviços</span>
            <h2>Serviços <span className="highlight">Exclusivos</span></h2>
            <DecorativeLine />
            <p>Oferecemos uma variedade de serviços para cuidar do seu visual com excelência</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <div className="service-icon">{service.icon}</div>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <div className="service-price">
                      <span className="price-label">A partir de</span>
                      <span className="price-value">{service.price}</span>
                    </div>
                    <div className="service-duration">
                      <ClockIcon />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <a href="#agendamento" className="service-btn">Agendar</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <div className="about-image-main">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop" alt="Nossa barbearia" />
              </div>
              <div className="about-image-secondary">
                <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop" alt="Corte de cabelo" />
              </div>
              <div className="about-experience">
                <span className="experience-number">10+</span>
                <span className="experience-text">Anos de Tradição</span>
              </div>
            </div>

            <div className="about-content">
              <span className="section-tag">Sobre Nós</span>
              <h2>Uma Tradição de <span className="highlight">Excelência</span></h2>
              <DecorativeLine />
              
              <p className="about-description">
                Fundada em 2014, a BarbShop nasceu com o objetivo de revolucionar a experiência 
                de cuidado masculino. Nossa missão é proporcionar não apenas cortes impecáveis, 
                mas momentos de relaxamento e autoestima.
              </p>

              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon"><CheckIcon /></div>
                  <div className="feature-content">
                    <h4>Profissionais Certificados</h4>
                    <p>Equipe com formação em técnicas modernas e clássicas</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon"><CheckIcon /></div>
                  <div className="feature-content">
                    <h4>Produtos Premium</h4>
                    <p>Utilizamos apenas marcas de alta qualidade</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon"><CheckIcon /></div>
                  <div className="feature-content">
                    <h4>Ambiente Aconchegante</h4>
                    <p>Espaço pensado para seu conforto e bem-estar</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon"><CheckIcon /></div>
                  <div className="feature-content">
                    <h4>Atendimento Personalizado</h4>
                    <p>Cada cliente é único e tratado com exclusividade</p>
                  </div>
                </div>
              </div>

              <a href="#contato" className="btn-primary">
                Conheça Nossa Equipe
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="gallery">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Nosso Trabalho</span>
            <h2>Galeria de <span className="highlight">Cortes</span></h2>
            <DecorativeLine />
            <p>Veja alguns dos nossos trabalhos e inspire-se para seu novo visual</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
                <img src={image} alt={`Trabalho ${index + 1}`} />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <ScissorsIcon />
                    <span>Ver Detalhes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <InstagramIcon />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="testimonials">
        <div className="testimonials-bg">
          <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop" alt="" />
          <div className="testimonials-overlay"></div>
        </div>
        
        <div className="container">
          <div className="section-header light">
            <span className="section-tag">Depoimentos</span>
            <h2>O que nossos <span className="highlight">clientes</span> dizem</h2>
            <DecorativeLine />
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} filled />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="agendamento" className="booking">
        <div className="container">
          <div className="booking-wrapper">
            <div className="booking-info">
              <span className="section-tag">Agendamento</span>
              <h2>Agende seu <span className="highlight">Horário</span></h2>
              <DecorativeLine />
              
              <p className="booking-description">
                Reserve seu horário de forma rápida e prática. Nossa equipe entrará em contato 
                para confirmar seu agendamento.
              </p>

              <div className="booking-contact">
                <div className="contact-item">
                  <PhoneIcon />
                  <div>
                    <span className="contact-label">Telefone</span>
                    <span className="contact-value">(11) 99999-9999</span>
                  </div>
                </div>
                <div className="contact-item">
                  <ClockIcon />
                  <div>
                    <span className="contact-label">Horário</span>
                    <span className="contact-value">Seg-Sáb: 9h às 20h</span>
                  </div>
                </div>
                <div className="contact-item">
                  <LocationIcon />
                  <div>
                    <span className="contact-label">Endereço</span>
                    <span className="contact-value">Rua das Barbearias, 123</span>
                  </div>
                </div>
              </div>

              <div className="booking-social">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>

            <div className="booking-form-wrapper">
              <form onSubmit={handleSubmit} className="booking-form">
                <h3>Formulário de Agendamento</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="Seu nome"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Serviço</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title} - {service.price}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Data</label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Horário</label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="submit-btn">
                  {formSubmitted ? (
                    <>
                      <CheckIcon />
                      Agendamento Enviado!
                    </>
                  ) : (
                    <>
                      Agendar Horário
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870366!2d-46.65463492374057!3d-23.561414361470844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-info-detailed">
              <h3>Informações de Contato</h3>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon"><LocationIcon /></div>
                  <div className="detail-content">
                    <h4>Endereço</h4>
                    <p>Rua das Barbearias, 123<br/>Centro - São Paulo/SP<br/>CEP: 01234-567</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon"><PhoneIcon /></div>
                  <div className="detail-content">
                    <h4>Telefone</h4>
                    <p>(11) 99999-9999<br/>(11) 3333-3333</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon"><ClockIcon /></div>
                  <div className="detail-content">
                    <h4>Horário de Funcionamento</h4>
                    <p>Segunda a Sexta: 9h às 20h<br/>Sábado: 9h às 18h<br/>Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <h4>Redes Sociais</h4>
                <div className="social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <InstagramIcon />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo">
                <div className="logo-icon">
                  <svg viewBox="0 0 50 50" className="logo-svg">
                    <path d="M25 5 L30 20 L45 20 L33 30 L38 45 L25 35 L12 45 L17 30 L5 20 L20 20 Z" 
                          fill="#d4af37" stroke="#d4af37" strokeWidth="1"/>
                    <circle cx="25" cy="25" r="8" fill="#1a1a1a"/>
                    <text x="25" y="29" textAnchor="middle" fontSize="10" fill="#d4af37" fontWeight="bold">B</text>
                  </svg>
                </div>
                <span>BarbShop</span>
              </a>
              <p>Transformando homens em cavalheiros desde 2014. Sua barbearia de confiança em São Paulo.</p>
            </div>

            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>

            <div className="footer-services">
              <h4>Serviços</h4>
              <ul>
                <li><a href="#servicos">Corte Premium</a></li>
                <li><a href="#servicos">Barba Completa</a></li>
                <li><a href="#servicos">Barbearia Clássica</a></li>
                <li><a href="#servicos">Pigmentação</a></li>
                <li><a href="#servicos">Combo Executivo</a></li>
              </ul>
            </div>

            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Receba novidades e promoções exclusivas</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Seu e-mail" required />
                <button type="submit">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p>&copy; 2024 BarbShop. Todos os direitos reservados.</p>
              <div className="footer-socials">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
