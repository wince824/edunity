
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';
import footer1 from "../../../assets/footer1.svg"
import footer2 from '../../../assets/footer2.svg';
import footer3 from '../../../assets/footer3.svg';
import footer4 from '../../../assets/footer4.svg'
import footer5 from '../../../assets/footer5.svg';
import footer6 from '../../../assets/footer6.svg';


const Footer = () => {
  return (
    <footer className={styles.footer}>
     
      <div className={styles.topBar}>
        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <MapPin size={20} />
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.label}>Address:</span>
            <span className={styles.value}>1925 Boggess Street</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <Phone size={20} />
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.label}>Phone:</span>
            <span className={styles.value}>(00) 875 784 568</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div className={styles.iconCircle}>
            <Mail size={20} />
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.label}>Email:</span>
            <span className={styles.value}>info@gmail.com</span>
          </div>
        </div>
      </div>

      
      <div className={styles.mainContent}>
        
        <div className={styles.section}>
          <div className={styles.logo}>
            <svg className={styles.logoIcon} viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="6" fill="url(#gradient)"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#7B68EE"/>
                  <stop offset="100%" stopColor="#9B84FF"/>
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>edunity</span>
          </div>
          <p className={styles.description}>
            Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <Facebook size={18} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <Instagram size={18} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon}>
              <Twitter size={18} />
            </a>
          </div>
        </div>

        
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Our Services:</h3>
          <ul className={styles.linkList}>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Management</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Blog News</a></li>
          </ul>
        </div>

        
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Gallery</h3>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
               <img src={footer1} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={footer6} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={footer2} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={footer3} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={footer4} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
              <img src={footer5} alt="Gallery 1" className={styles.galleryImage} />
            </div>
            <div className={styles.galleryItem}>
             
            </div>
          </div>
        </div>

       
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Subscribe</h3>
          <form className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Enter your email:" 
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className={styles.copyright}>
        Copyright © 2024 <span className={styles.brand}>edunity</span> || All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;