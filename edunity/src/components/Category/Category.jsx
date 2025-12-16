import React from 'react';

const Button = ({ variant, children }) => {
  const baseStyle = {
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  };
  
  const variants = {
    secondary: {
      backgroundColor: '#7C5CFC',
      color: 'white'
    }
  };
  
  return (
    <button style={{ ...baseStyle, ...variants[variant] }}>
      {children}
    </button>
  );
};

const CategoryCard = ({ icon, title, courseCount }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    minWidth: '180px'
  };

  const iconContainerStyle = {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: '700',
    color: '#0E2A46',
    textAlign: 'center',
    margin: '0'
  };

  const courseCountStyle = {
    fontSize: '14px',
    color: '#666',
    margin: '0'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={iconContainerStyle}>
        {icon}
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={courseCountStyle}>{courseCount} COURSES</p>
    </div>
  );
};

const Category = () => {
  const mainStyle = {
    minHeight: '500px',
    backgroundColor: '#F7F7F7',
    paddingBottom: '80px'
  };

  const upperStyle = {
    display: 'flex',
    paddingTop: '80px',
    paddingLeft: '200px',
    paddingRight: '200px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '60px'
  };

  const leftStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const categoryLabelStyle = {
    color: '#a18ff8',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px',
    margin: '0'
  };

  const headingStyle = {
    color: '#0E2A46',
    fontSize: '36px',
    fontWeight: '700',
    margin: '0'
  };

  const lowerStyle = {
    display: 'flex',
    gap: '30px',
    paddingLeft: '200px',
    paddingRight: '200px',
    justifyContent: 'space-between'
  };

  const chevronStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '2px'
  };

  return (
    <div style={mainStyle}>
      <div style={upperStyle}>
        <div style={leftStyle}>
          <p style={categoryLabelStyle}>📂 CATEGORY</p>
          <h2 style={headingStyle}>Favorite Topics To Learn</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={chevronStyle}>
            {[...Array(8)].map((_, i) => (
              <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ))}
          </div>
          <Button variant="secondary">BROWSE EDUNITY COURSES</Button>
        </div>
      </div>
      
      <div style={lowerStyle}>
        <CategoryCard
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="10" y="10" width="40" height="40" rx="4" fill="#E8E0FF"/>
              <rect x="15" y="15" width="12" height="12" rx="2" fill="#9B7EFF"/>
              <rect x="15" y="30" width="12" height="6" rx="2" fill="#9B7EFF"/>
              <path d="M35 20L40 25L35 30" stroke="#FF6B9D" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="40" cy="35" r="8" fill="#FFB84D"/>
            </svg>
          }
          title="WEB DESIGN"
          courseCount="08"
        />
        
        <CategoryCard
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="35" r="8" fill="#FFB84D"/>
              <path d="M30 35L20 20M30 35L40 20M30 35L25 45M30 35L35 45" stroke="#4ECDC4" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="4" fill="#4ECDC4"/>
              <circle cx="40" cy="20" r="4" fill="#4ECDC4"/>
              <circle cx="25" cy="45" r="4" fill="#4ECDC4"/>
              <circle cx="35" cy="45" r="4" fill="#4ECDC4"/>
            </svg>
          }
          title="GRAPHICS DESIGN"
          courseCount="15"
        />
        
        <CategoryCard
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="12" y="15" width="36" height="30" rx="2" stroke="#4A5568" strokeWidth="2" fill="white"/>
              <rect x="14" y="17" width="32" height="20" fill="#E2E8F0"/>
              <circle cx="30" cy="27" r="6" fill="#4ECDC4"/>
              <path d="M27 27L29 29L33 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="18" y="40" width="8" height="3" rx="1" fill="#4A5568"/>
              <rect x="28" y="40" width="8" height="3" rx="1" fill="#4A5568"/>
            </svg>
          }
          title="VIDEO EDITOR"
          courseCount="10"
        />
        
        <CategoryCard
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="15" y="12" width="30" height="36" rx="2" stroke="#4ECDC4" strokeWidth="2" fill="white"/>
              <line x1="20" y1="20" x2="35" y2="20" stroke="#4ECDC4" strokeWidth="2"/>
              <line x1="20" y1="26" x2="40" y2="26" stroke="#E2E8F0" strokeWidth="2"/>
              <line x1="20" y1="32" x2="38" y2="32" stroke="#E2E8F0" strokeWidth="2"/>
              <line x1="20" y1="38" x2="35" y2="38" stroke="#E2E8F0" strokeWidth="2"/>
              <path d="M38 35L42 39L38 43" stroke="#FFB84D" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          title="CONTENT WRITING"
          courseCount="07"
        />
        
        <CategoryCard
          icon={
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="18" y="15" width="24" height="12" rx="2" fill="#FF6B9D" transform="rotate(15 30 21)"/>
              <circle cx="35" cy="35" r="8" fill="#FFB84D"/>
              <path d="M35 27V35L40 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <rect x="20" y="38" width="8" height="3" rx="1" fill="#4ECDC4" transform="rotate(-15 24 39.5)"/>
            </svg>
          }
          title="MARKETING"
          courseCount="15"
        />
      </div>
    </div>
  );
};

export default Category;