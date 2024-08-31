import React from 'react';
import '../styles/Profile.css'; // Make sure to create and include this CSS file for styling
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className='sidebar'>
        <Sidebar/>
      </div>

    <div className='profile-header'>
        <Header/>
    
      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-image-upload">
            <img src="./assets/default-profile.png" alt="Profile" className="profile-image" />
            <button className="upload-button"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 256 256">
	<path fill="currentColor" d="M208 58h-28.79L165 36.67a6 6 0 0 0-5-2.67H96a6 6 0 0 0-5 2.67L76.78 58H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22m10 134a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h32a6 6 0 0 0 5-2.67L99.21 46h57.57L171 67.33a6 6 0 0 0 5 2.67h32a10 10 0 0 1 10 10ZM128 90a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 72a30 30 0 1 1 30-30a30 30 0 0 1-30 30" />
</svg> Upload Image</button>
          </div>

          <div className="profile-details">
            <p>Name: Oluwafemi Amos</p>
            <p>Email: wabdotmail@gmail.com</p>
            <p>Phone Number: 0906 856 2949</p>
            <p>Account Status: <span className="status-active">Active</span></p>
            <p>Referral link: www.subssum.com/tre/wd...</p>
            <button className="edit-details-button">Edit Details</button>
          </div>
        </div>

        <div className="profile-right">
          <div className="profile-tabs">
            <button className="tab-button ">Change Password</button>
            <button className="tab-button active">Change PIN</button>
          </div>

          <div className="change-password-form">
            <form>
              <div className="input-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter Current Password" />
              </div>
              <div className="input-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter New Password" />
              </div>
              <div className="input-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Enter New Password" />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Profile;
