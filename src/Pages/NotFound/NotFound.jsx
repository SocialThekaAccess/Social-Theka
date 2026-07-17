import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__container">
        
        {/* Decorative Elements */}
        <div className="not-found__blob not-found__blob--1" />
        <div className="not-found__blob not-found__blob--2" />
        
        <div className="not-found__content">
          
          {/* 404 Number */}
          <div className="not-found__number-wrap">
            <h1 className="not-found__number">404</h1>
            <div className="not-found__number-shadow">404</div>
          </div>
          
          {/* Message */}
          <h2 className="not-found__title">Page Not Found</h2>
          <p className="not-found__message">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
          </p>
          
          {/* Actions */}
          <div className="not-found__actions">
            <Link to="/" className="not-found__btn not-found__btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Go Back Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="not-found__btn not-found__btn--ghost"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Go Back
            </button>
          </div>
          
          {/* Quick Links */}
          <div className="not-found__links">
            <p className="not-found__links-label">Quick Links:</p>
            <div className="not-found__links-grid">
              <Link to="/services/seo" className="not-found__link">
                SEO Services
              </Link>
              <Link to="/services/social-media" className="not-found__link">
                Social Media
              </Link>
              <Link to="/services/web-development" className="not-found__link">
                Web Development
              </Link>
              <Link to="/contact" className="not-found__link">
                Contact Us
              </Link>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default NotFound;
