import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css';

export default function Reviews() {
  const [downloads, setDownloads] = useState(1400);
  const [subscribers, setSubscribers] = useState(1290);
  const [users, setUsers] = useState(4830);
  const [cookies, setCookies] = useState(2450);

  useEffect(() => {
    // Function to update numbers periodically
    const updateNumbers = () => {
      // Increase numbers by a random amount for demonstration
      setDownloads(prevDownloads => prevDownloads + Math.floor(Math.random() * 100));
      setSubscribers(prevSubscribers => prevSubscribers + Math.floor(Math.random() * 10));
      setUsers(prevUsers => prevUsers + Math.floor(Math.random() * 50));
      setCookies(prevCookies => prevCookies + Math.floor(Math.random() * 25));
    };

    // Call the update function initially
    updateNumbers();

    // Interval to update numbers every second
    const interval = setInterval(updateNumbers, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="right-about">
      <div className="about-item">
        <h2 className="large-text">{downloads}+</h2>
        <p className="small-text">Downloads</p>
      </div>
      <div className="about-item">
        <h2 className="large-text">{subscribers}+</h2>
        <p className="small-text">Subscribers</p>
      </div>
      <div className="about-item">
        <h2 className="large-text">{users}+</h2>
        <p className="small-text">Users</p>
      </div>
      <div className="about-item">
        <h2 className="large-text">{cookies}+</h2>
        <p className="small-text">Cookies</p>
      </div>
    </div>
  );
}
