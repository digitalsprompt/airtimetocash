import React from 'react';
import '../styles/Dashboard.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (

    <>
        <section className='dashboard-flex'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
    
        <div className='header-dashboard'>
        <Header/>
        <div className="dashboard-flex">
        <div className="dashboard">
        
            <div className="wallet-balance">
                <p>Wallet Balance <br /> <h2>₦3000</h2></p>
                <button className="fund-wallet">Fund Wallet</button>
            </div>
      
            <div className="referral">
                <p>Referral</p>
                <p>Referral Code: <strong>18/52ha089</strong></p>
                <div className="referral-actions">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
		<path d="M19.4 20H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6h9.8a.6.6 0 0 1 .6.6v9.8a.6.6 0 0 1-.6.6" />
		<path d="M15 9V4.6a.6.6 0 0 0-.6-.6H4.6a.6.6 0 0 0-.6.6v9.8a.6.6 0 0 0 .6.6H9" />
	</g>
</svg>Copy</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5 16l-1 4l4-1L19.586 7.414a2 2 0 0 0 0-2.828l-.172-.172a2 2 0 0 0-2.828 0zM15 6l3 3m-5 11h8" />
</svg>Edit</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z" />
</svg>Share</button>
                </div>
            </div>
      
      <div className="referral-stats">
        <div>
          <p>Total referrals made</p>
          <h4>0</h4>
          <button className="cashout-button"><svg xmlns="http://www.w3.org/2000/svg" width="1.19rem" height="1rem" viewBox="0 0 38 32">
	<g fill="currentColor">
		<path d="M32.509 7.5a.5.5 0 0 0 .5-.5V5.335a1.64 1.64 0 0 0-1.638-1.638h-2.687l-.613-1.809a.5.5 0 0 0-.619-.318L12.899 5.994a.501.501 0 0 0 .292.957L27.28 2.667l1.343 3.965a.499.499 0 1 0 .947-.321l-.547-1.615h2.349c.352 0 .638.286.638.638V7c-.001.276.223.5.499.5" />
		<path d="M36.5 15a.5.5 0 0 0 0 1c.351 0 .5.149.5.5v6c0 .351-.149.5-.5.5h-8c-.351 0-.5-.149-.5-.5v-5c0-.351.149-.5.5-.5h6a.5.5 0 0 0 .5-.5v-6c0-.911-.589-1.5-1.5-1.5H3c-1.233 0-2-.767-2-2s.767-2 2-2h5.076l-3.026.998a.5.5 0 1 0 .313.949L23.482.974a.5.5 0 1 0-.314-.95l-12.1 3.99C11.045 4.01 11.024 4 11 4H3C1.206 4 0 5.206 0 7v22c0 1.794 1.206 3 3 3h30.5c.911 0 1.5-.589 1.5-1.5v-5a.5.5 0 0 0-1 0v5c0 .351-.149.5-.5.5H3c-1.233 0-2-.767-2-2V9.312c.513.433 1.192.688 2 .688h30.5c.351 0 .5.149.5.5V16h-5.5c-.911 0-1.5.589-1.5 1.5v5c0 .911.589 1.5 1.5 1.5h8c.911 0 1.5-.589 1.5-1.5v-6c0-.911-.589-1.5-1.5-1.5" />
		<circle cx="32" cy="20" r="1" />
	</g>
</svg> Cashout</button>
        </div>
        <div>
          <p>Current wallet Bonus</p>
          <h4>₦0.00</h4>
        </div>
        
      </div>
    </div>

    <div className="cards-info">
        <p>Cards</p> <br /> <br /> 
        <h3><span>You Have No <br /> Saved Cards</span></h3>
      </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Dashboard;
