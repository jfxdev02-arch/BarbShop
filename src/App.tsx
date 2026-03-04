import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">✂️</span>
            <span className="logo-text">BarbShop</span>
          </div>
          
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li onClick={() => scrollTo('home')}>Início</li>
            <li onClick={() => scrollTo('services')}>Serviços</li>
            <li onClick={() => scrollTo('about')}>Sobre</li>
            <li onClick={() => scrollTo('gallery')}>Galeria</li>
            <li onClick={() => scrollTo('contact')}>Contato</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Estilo é <span className="highlight">personalidade</span>
          </h1>
          <p className="hero-subtitle">
            A melhor experiência em cortes masculinos da cidade
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Agendar Horário
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('services')}>
              Ver Serviços
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-shape"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">Oferecemos os melhores serviços para você</p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Corte de Cabelo</h3>
              <p>Cortes modernos e clássicos com técnicas avançadas</p>
              <span className="price">R$ 45</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🪒</div>
              <h3>Barba</h3>
              <p>Barba perfeita com navalha e toalha quente</p>
              <span className="price">R$ 35</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💈</div>
              <h3>Corte + Barba</h3>
              <p>Combo completo para um visual impecável</p>
              <span className="price">R$ 70</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Pigmentação</h3>
              <p>Pigmentação de barba e cabelo</p>
              <span className="price">R$ 80</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🧔</div>
              <h3>Bigode</h3>
              <p>Design e manutenção de bigode</p>
              <span className="price">R$ 25</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌿</div>
              <h3>Sobrancelha</h3>
              <p>Design de sobrancelha masculina</p>
              <span className="price">R$ 20</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="about-img-placeholder">
                <span>💈</span>
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">Sobre Nós</h2>
              <p>
                Fundada em 2015, a BarbShop nasceu com o objetivo de transformar a 
                experiência do corte masculino. Nossa equipe de profissionais altamente 
                qualificados está sempre atualizada com as últimas tendências do mercado.
              </p>
              <p>
                Oferecemos um ambiente acolhedor, moderno e sofisticado, onde você pode 
                relaxar enquanto cuida do seu visual. Qualidade e satisfação do cliente 
                são nossas prioridades.
              </p>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">8+</span>
                  <span className="stat-label">Anos de Experiência</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Clientes Satisfeitos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Profissionais</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="section-subtitle">Alguns dos nossos trabalhos</p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">📸 Corte Degradê</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">📸 Barba Estilizada</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">📸 Corte Navalhado</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">📸 Bigode Clássico</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">📸 Undercut</div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">📸 Pompadour</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">Agende seu horário ou tire suas dúvidas</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Endereço</h4>
                  <p>Rua das Barbas, 123 - Centro</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Telefone</h4>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-3333</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h4>Horário de Funcionamento</h4>
                  <p>Seg - Sex: 9h às 20h</p>
                  <p>Sáb: 9h às 18h</p>
                </div>
              </div>
              
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>contato@barbshop.com</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Seu Nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Seu Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Seu Telefone" required />
              </div>
              <div className="form-group">
                <select>
                  <option value="">Selecione o Serviço</option>
                  <option value="corte">Corte de Cabelo</option>
                  <option value="barba">Barba</option>
                  <option value="combo">Corte + Barba</option>
                  <option value="pigmentacao">Pigmentação</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Mensagem (opcional)" rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">✂️</span>
                <span className="logo-text">BarbShop</span>
              </div>
              <p>A melhor experiência em cortes masculinos</p>
            </div>
            
            <div className="footer-social">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📸 Instagram</a>
              <a href="#" className="social-link">📱 WhatsApp</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 BarbShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
