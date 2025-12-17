import React, { useState } from 'react';
import styles from './Yearly.module.css';
import year1 from "../../assets/year1.svg";
import year2 from "../../assets/year2.svg";
import year3 from "../../assets/year3.svg";


const ClockIcon = () => (
  <svg 
    width="16" 
    height="16" 
    fill="none" 
    stroke="#7768e5" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);


const LocationIcon = () => (
  <svg 
    width="16" 
    height="16" 
    fill="none" 
    stroke="#7768e5"
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
    />
  </svg>
);


const BackgroundSVG = () => (
  <svg className={styles.background} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
   
    <g opacity="0.15" transform="translate(950, 80)">
      <path
        d="M50 30 L10 45 L10 70 L50 85 L90 70 L90 45 Z M10 45 L50 30 L90 45 M50 85 L50 30"
        fill="none"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M95 50 L95 70 Q95 75 90 75 L10 75 Q5 75 5 70 L5 50"
        fill="none"
        stroke="#6366f1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>


   
   
    <circle cx="150" cy="450" r="40" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.1"/>
    
  </svg>
);


const EventCard = ({ date, month, title, description, time, location, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.eventCard} ${isHovered ? styles.eventCardHover : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.dateBadge}>
          <span className={styles.dateDay}>{date}</span>
          <span className={styles.dateMonth}>{month}</span>
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventDescription}>{description}</p>
        <div className={styles.eventMeta}>
          <div className={styles.metaItem}>
            <ClockIcon />
            <span>Time: {time}</span>
          </div>
          <div className={styles.metaItem}>
            <LocationIcon />
            <span>Location: {location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const YearlyEventsSection = () => {
  const events = [
    {
      
      title: 'print, and publishing industries for previewing',
      description: 'Lorem ipsum dolor sit amet, consectetur elit, sed doesumod tempor',
      time: '11:00am to 3:00pm',
      location: 'USA',
      image: year1,
    },
    {
      
      title: 'print, and publishing industries for previewing',
      description: 'Lorem ipsum dolor sit amet, consectetur elit, sed doesumod tempor',
      time: '11:00am to 3:00pm',
      location: 'USA',
      image: year2,
    },
    {
     
      title: 'print, and publishing industries for previewing',
      description: 'Lorem ipsum dolor sit amet, consectetur elit, sed doesumod tempor',
      time: '11:00am to 3:00pm',
      location: 'USA',
      image: year3,
    },
  ];

  return (
    <section className={styles.container}>
      <BackgroundSVG />
      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.subtitle}>≡ OUR EVENTS</p>
          <h2 className={styles.title}>Yearly Events And Program</h2>
        </div>
        <div className={styles.eventsGrid}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearlyEventsSection;