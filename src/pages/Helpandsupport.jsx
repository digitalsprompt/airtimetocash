import React from 'react';
import '../styles/Helpandsupport.css'; // Include the CSS file for styling
import Sidebar from '../components/Sidebar';

const HelpAndSupport = () => {
  const supportOptions = [
    {
      title: 'Frequently Asked Questions',
      action: 'See FAQ',
      color: '#FF6A6A', // Red
      icon: '❓',
      link: '#',
    },
    {
      title: 'Live Chat',
      action: 'Chat Now',
      color: '#FFA500', // Orange
      icon: '💬',
      link: '#',
    },
    {
      title: 'Whatsapp',
      action: 'Drop a Message',
      color: '#4CAF50', // Green
      icon: '📱',
      link: '#',
    },
    {
      title: 'Phone Call',
      action: 'Call Us',
      color: '#4A90E2', // Blue
      icon: '📞',
      link: '#',
    },
    {
      title: 'Report Our Support',
      action: 'Not Satisfied?',
      color: '#FF6A6A', // Red
      icon: '⚠️',
      link: '#',
    },
    {
      title: 'Review Our App',
      action: 'Coming Soon',
      color: '#4CAF50', // Green
      icon: '⭐',
      link: '#',
    },
  ];

  return (
    <>
    <div className='help-support-flex'>
    <section className='sidebar'>
        <Sidebar/>
    </section>
    <section className='help-support-header-container'>
    <div className="help-support-container">
      <div className='help-header-flex'>
      <h1>Help And Support</h1>
      <button className="upgrade-button">Upgrade To Merchant
      <div className="profile-icons">
        <i className="notification-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z" />
</svg></i>
        <a href="/profile"><i className="user-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none">
		<path fill="currentColor" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" opacity="0.16" />
		<path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
		<circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="2" />
	</g>
</svg></i></a>
        </div>
      </button>
        </div>
        
      <div className="support-options-grid">
        {supportOptions.map((option, index) => (
          <div key={index} className="support-option" style={{ borderColor: option.color }}>
            <div className="option-icon" style={{ backgroundColor: option.color }}>
              {option.icon}
            </div>
            <div className="option-content">
              <h3>{option.title}</h3>
              <a href={option.link} className="option-action">
                {option.action} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    </div>
    </>
  );
};

export default HelpAndSupport;
