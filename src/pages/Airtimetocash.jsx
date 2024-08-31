import React from 'react';
import '../styles/Airtimetocash.css'; // Include the CSS file for styling
import Sidebar from '../components/Sidebar';

const AirtimeToCash = () => {
  return (
    <>
    <div className='airtime-flex'>
    <section className='sidebar'>
        <Sidebar/>
    </section>
    <section className='airtimeheaderflex'>
    <div className="airtime-to-cash-container">
      <div className="header">
        <h1>Airtime to Cash</h1>
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

      <div className="steps">
        <div className="step active">Fill Info</div>
        <div className="step">Make Payment</div>
        <div className="step">View Receipt</div>
      </div>

      <div className="form-container">
        <h3>Airtime to Cash</h3>
        <form>
            <section className='input-flex'>
          <div className="input-group">
            <label>Select Network</label>
            <select>
              <option value="etisalat">Etisalat</option>
              <option value="mtn">MTN</option>
              <option value="airtel">Airtel</option>
              <option value="glo">Glo</option>
            </select>

          </div>
          <div className="input-group">
            <label>Phone Number</label>
            <input type="text" placeholder="08094562627" />
          </div>
          </section>
          
          <div className="input-group">
            <label>Amount</label>
            <input type="text" placeholder="₦5,000" />
          </div>
          <div className="input-group">
            <label>Airtime Share Pin</label>
            <input type="text" placeholder="3546576433" />
          </div>
          <button type="submit" className="proceed-button">Proceed</button>
        </form>
      </div>
    </div>
    </section>
    </div>
    </>
  );
};

export default AirtimeToCash;
