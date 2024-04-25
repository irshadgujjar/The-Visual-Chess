import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css';

export default function Reviews() {
  const [downloads, setDownloads] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [users, setUsers] = useState(0);
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    // Define initial values for numbers, using localStorage if available
    const initialDownloads = parseInt(localStorage.getItem('downloads')) || 1400;
    const initialSubscribers = parseInt(localStorage.getItem('subscribers')) || 1290;
    const initialUsers = parseInt(localStorage.getItem('users')) || 4830;
    const initialCookies = parseInt(localStorage.getItem('cookies')) || 2450;

    // Set initial values
    setDownloads(initialDownloads);
    setSubscribers(initialSubscribers);
    setUsers(initialUsers);
    setCookies(initialCookies);
  }, []);

  useEffect(() => {
    // Update localStorage with the latest values
    localStorage.setItem('downloads', downloads.toString());
    localStorage.setItem('subscribers', subscribers.toString());
    localStorage.setItem('users', users.toString());
    localStorage.setItem('cookies', cookies.toString());
  }, [downloads, subscribers, users, cookies]);

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
