import React from 'react';
import '../styles/Transactionhistory.css'; // Include the CSS file for styling
import Sidebar from '../components/Sidebar';

const TransactionHistory = () => {
  // Sample data, replace with actual data source
  const transactions = [
    {
      service: 'Mtn Airtime VTU',
      phoneNumber: '09068562949',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '17045621868050336938179613',
      dateTime: '6th January, 2024, 06:29PM',
      icon: '⚠️', // Placeholder icon
    },
    // Repeat similar objects to match the table rows in the design
    {
      service: 'Airtel DATA VTU',
      phoneNumber: '07089075584',
      amount: '₦2000.00',
      totalAmount: '₦100.00',
      status: 'Successful',
      paymentMethod: 'Wallet',
      transactionNo: '17045621868050336938179613',
      dateTime: '6th January, 2024, 06:29PM',
      icon: '✅️', // Placeholder icon
    },
    // More transactions...
    {
        service: 'Airtel DATA VTU',
        phoneNumber: '07089075584',
        amount: '₦2000.00',
        totalAmount: '₦100.00',
        status: 'Failed',
        paymentMethod: 'Wallet',
        transactionNo: '17045621868050336938179613',
        dateTime: '6th January, 2024, 06:29PM',
        icon: '❌️', // Placeholder icon
      },
      {
        service: 'Mtn Airtime VTU',
        phoneNumber: '09068562949',
        amount: '₦100.00',
        totalAmount: '₦100.00',
        status: 'Initiated',
        paymentMethod: 'Transfer',
        transactionNo: '17045621868050336938179613',
        dateTime: '6th January, 2024, 06:29PM',
        icon: '⚠️', // Placeholder icon
      },
      // Repeat similar objects to match the table rows in the design
      {
        service: 'Airtel DATA VTU',
        phoneNumber: '07089075584',
        amount: '₦2000.00',
        totalAmount: '₦100.00',
        status: 'Successful',
        paymentMethod: 'Wallet',
        transactionNo: '17045621868050336938179613',
        dateTime: '6th January, 2024, 06:29PM',
        icon: '✅️', // Placeholder icon
      },
      // More transactions...
      {
          service: 'Airtel DATA VTU',
          phoneNumber: '07089075584',
          amount: '₦2000.00',
          totalAmount: '₦100.00',
          status: 'Failed',
          paymentMethod: 'Wallet',
          transactionNo: '17045621868050336938179613',
          dateTime: '6th January, 2024, 06:29PM',
          icon: '❌️', // Placeholder icon
        },
        {
      service: 'Mtn Airtime VTU',
      phoneNumber: '09068562949',
      amount: '₦100.00',
      totalAmount: '₦100.00',
      status: 'Initiated',
      paymentMethod: 'Transfer',
      transactionNo: '17045621868050336938179613',
      dateTime: '6th January, 2024, 06:29PM',
      icon: '⚠️', // Placeholder icon
    },
    // Repeat similar objects to match the table rows in the design
    {
      service: 'Airtel DATA VTU',
      phoneNumber: '07089075584',
      amount: '₦2000.00',
      totalAmount: '₦100.00',
      status: 'Successful',
      paymentMethod: 'Wallet',
      transactionNo: '17045621868050336938179613',
      dateTime: '6th January, 2024, 06:29PM',
      icon: '✅️', // Placeholder icon
    },
    // More transactions...
    {
        service: 'Airtel DATA VTU',
        phoneNumber: '07089075584',
        amount: '₦2000.00',
        totalAmount: '₦100.00',
        status: 'Failed',
        paymentMethod: 'Wallet',
        transactionNo: '17045621868050336938179613',
        dateTime: '6th January, 2024, 06:29PM',
        icon: '❌️', // Placeholder icon
      },
  ];

  return (
    <>
    <div className='transaction-flex'>
    <section className='sidebar'>
        <Sidebar/>
    </section>
    <section className='transactionheader'>
    <div className="transaction-history-container">
      <div className="header">
        <h1>Transaction History</h1>
        <button className="upgrade-button">Upgrade To Merchant
      <div className="profile-icons">
        <i className="notification-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z" />
</svg></i>
        <a href="/profile"><i className="user-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none">
		<path fill="currentColor" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" opacity="0.16" />
		<path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
		<circle cx="12" cy="7" r="3" stroke="currentColor" stroke-width="2" /></g></svg></i></a></div>
      </button>
        
      </div>
      <div className="table-container">
      <button className="filter-button"><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 7h15M7 12h10m-7 5h4" />
</svg> Filter</button>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Amount</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Payment Method</th>
              <th>Transaction No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>
                  <div className="service-info">
                    <span className="icon">{transaction.icon}</span>
                    <span>{transaction.service}</span>
                    <div className="phone-number">{transaction.phoneNumber}</div>
                  </div>
                </td>
                <td>{transaction.amount}</td>
                <td>{transaction.totalAmount}</td>
                <td className={transaction.status.toLowerCase()}>{transaction.status}</td>
                <td>{transaction.paymentMethod}</td>
                <td>
                  {transaction.transactionNo}
                  <div className="date-time">{transaction.dateTime}</div>
                </td>
                <td><button className="action-button">Open</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </section>
    </div>
    </>
  );
};

export default TransactionHistory;
