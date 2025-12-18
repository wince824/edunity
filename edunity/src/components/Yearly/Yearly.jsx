import React, { useState } from 'react';
import styles from './Yearly.module.css';
import year1 from "../../assets/year1.svg";
import year2 from "../../assets/year2.svg";
import year3 from "../../assets/year3.svg";


const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.10938 2.13867C3.53516 0.712891 5.25391 0 7.26562 0C9.27734 0 10.9863 0.712891 12.3926 2.13867C13.8184 3.54492 14.5312 5.25391 14.5312 7.26562C14.5312 9.27734 13.8184 10.9961 12.3926 12.4219C10.9863 13.8281 9.27734 14.5312 7.26562 14.5312C5.25391 14.5312 3.53516 13.8281 2.10938 12.4219C0.703125 10.9961 0 9.27734 0 7.26562C0 5.25391 0.703125 3.54492 2.10938 2.13867ZM8.93555 10.2539C9.13086 10.3906 9.29688 10.3711 9.43359 10.1953L10.2539 9.05273C10.3906 8.85742 10.3711 8.69141 10.1953 8.55469L8.32031 7.20703V3.16406C8.32031 2.92969 8.20312 2.8125 7.96875 2.8125H6.5625C6.32812 2.8125 6.21094 2.92969 6.21094 3.16406V8.08594C6.21094 8.20312 6.25977 8.30078 6.35742 8.37891L8.93555 10.2539Z" fill="#7768E5"/>
</svg>

);


const LocationIcon = () => (
  <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.03906 14.707C4.57031 14.0234 4.0332 13.252 3.42773 12.3926C2.8418 11.5332 2.42188 10.9277 2.16797 10.5762C1.91406 10.2246 1.62109 9.79492 1.28906 9.28711C0.957031 8.75977 0.732422 8.38867 0.615234 8.17383C0.517578 7.95898 0.400391 7.68555 0.263672 7.35352C0.146484 7.02148 0.0683594 6.73828 0.0292969 6.50391C0.00976562 6.25 0 5.95703 0 5.625C0 4.0625 0.546875 2.73437 1.64062 1.64062C2.73438 0.546875 4.0625 0 5.625 0C7.1875 0 8.51562 0.546875 9.60938 1.64062C10.7031 2.73437 11.25 4.0625 11.25 5.625C11.25 5.95703 11.2305 6.25 11.1914 6.50391C11.1719 6.73828 11.0938 7.02148 10.957 7.35352C10.8398 7.68555 10.7227 7.95898 10.6055 8.17383C10.5078 8.38867 10.293 8.75977 9.96094 9.28711C9.62891 9.79492 9.33594 10.2246 9.08203 10.5762C8.82812 10.9277 8.39844 11.5332 7.79297 12.3926C7.20703 13.252 6.67969 14.0234 6.21094 14.707C6.07422 14.9023 5.87891 15 5.625 15C5.37109 15 5.17578 14.9023 5.03906 14.707ZM3.95508 7.29492C4.42383 7.74414 4.98047 7.96875 5.625 7.96875C6.26953 7.96875 6.81641 7.74414 7.26562 7.29492C7.73438 6.82617 7.96875 6.26953 7.96875 5.625C7.96875 4.98047 7.73438 4.43359 7.26562 3.98438C6.81641 3.51562 6.26953 3.28125 5.625 3.28125C4.98047 3.28125 4.42383 3.51562 3.95508 3.98438C3.50586 4.43359 3.28125 4.98047 3.28125 5.625C3.28125 6.26953 3.50586 6.82617 3.95508 7.29492Z" fill="#7768E5"/>
<a href="https://www.figma.com/design/Nx4sNsAeWJfmVVOXuDSmxJ/Untitled?node-id=2-1452">
<rect fill="black" fill-opacity="0" width="11.25" height="15"/>
</a>
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
          <div className = {styles.titleRow}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_1907)">
<g clip-path="url(#clip1_2_1907)">
<g clip-path="url(#clip2_2_1907)">
<path d="M13.6114 2.26562C13.6114 2.13619 13.5065 2.03125 13.3771 2.03125C13.2476 2.03125 13.1427 2.13619 13.1427 2.26562V12.7476H2.24829V0.46875H3.37595V3.25206C3.37595 3.34741 3.43373 3.43325 3.52204 3.46919C3.61032 3.50506 3.71163 3.48394 3.7782 3.41563L4.62213 2.54947L5.4661 3.41563C5.5111 3.46181 5.57198 3.48647 5.63401 3.48647C5.6637 3.48647 5.69366 3.48081 5.72226 3.46919C5.81057 3.43328 5.86835 3.34744 5.86835 3.25206V0.46875H13.1427V1.32812C13.1427 1.45756 13.2477 1.5625 13.3771 1.5625C13.5065 1.5625 13.6115 1.45756 13.6115 1.32812V0.234375C13.6115 0.104937 13.5065 0 13.3771 0H2.01395C1.57935 0 1.17088 0.169094 0.863852 0.476156C0.55682 0.783219 0.387695 1.19166 0.387695 1.62625V14.3737L0.387758 14.3749C0.388352 15.2711 1.1176 16 2.01391 16H13.3772C13.5066 16 13.6116 15.8951 13.6116 15.7656L13.6114 2.26562ZM5.39957 0.46875V2.67569L4.78998 2.05006C4.74585 2.00478 4.68532 1.97925 4.6221 1.97925C4.55888 1.97925 4.49835 2.00478 4.45423 2.05006L3.84466 2.67569V0.46875H5.39957ZM1.19529 0.807594C1.35754 0.645375 1.5596 0.537406 1.77954 0.492469V12.7647C1.42076 12.8168 1.09963 12.9862 0.856445 13.233V1.62625C0.856445 1.31684 0.976789 1.02612 1.19529 0.807594ZM2.01391 15.5312C1.3757 15.5312 0.856477 15.012 0.856477 14.3738C0.856477 13.7356 1.3757 13.2163 2.01391 13.2163H13.1428V13.5288H3.70395C3.57451 13.5288 3.46957 13.6337 3.46957 13.7631C3.46957 13.8926 3.57451 13.9975 3.70395 13.9975H13.1427V14.75H2.01395C1.80648 14.75 1.6377 14.5812 1.6377 14.3737C1.6377 14.1663 1.80648 13.9975 2.01395 13.9975H2.76645C2.89588 13.9975 3.00082 13.8926 3.00082 13.7631C3.00082 13.6337 2.89588 13.5288 2.76645 13.5288H2.01395C1.54801 13.5288 1.16895 13.9078 1.16895 14.3737C1.16895 14.8397 1.54801 15.2188 2.01395 15.2188H13.1428V15.5312H2.01391Z" fill="#674DF0"/>
<path d="M4.65043 3.89062C3.98109 3.89062 3.43652 4.43519 3.43652 5.10453V8.09344C3.43652 8.76278 3.98109 9.30734 4.65043 9.30734H10.0461C10.7155 9.30734 11.2601 8.76278 11.2601 8.09344V5.10453C11.2601 4.43519 10.7155 3.89062 10.0461 3.89062H4.65043ZM10.7913 5.10453V8.09344C10.7913 8.50431 10.457 8.83859 10.0461 8.83859H4.65043C4.23955 8.83859 3.90527 8.50431 3.90527 8.09344V5.10453C3.90527 4.69366 4.23955 4.35938 4.65043 4.35938H10.0461C10.4571 4.35938 10.7913 4.69366 10.7913 5.10453Z" fill="#674DF0"/>
<path d="M9.54927 5.74316H5.14648C5.01705 5.74316 4.91211 5.8481 4.91211 5.97754C4.91211 6.10698 5.01705 6.21191 5.14648 6.21191H9.54927C9.6787 6.21191 9.78364 6.10698 9.78364 5.97754C9.78364 5.8481 9.6787 5.74316 9.54927 5.74316Z" fill="#674DF0"/>
<path d="M9.54927 6.98535H5.14648C5.01705 6.98535 4.91211 7.09029 4.91211 7.21973C4.91211 7.34916 5.01705 7.4541 5.14648 7.4541H9.54927C9.6787 7.4541 9.78364 7.34916 9.78364 7.21973C9.78364 7.09029 9.6787 6.98535 9.54927 6.98535Z" fill="#674DF0"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_2_1907">
<rect width="14" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_2_1907">
<rect width="14" height="16" fill="white"/>
</clipPath>
<clipPath id="clip2_2_1907">
<rect width="14" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

          <p className={styles.subtitle}>OUR EVENTS</p>
          </div>
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