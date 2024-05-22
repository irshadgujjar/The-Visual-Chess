import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css';

export default function CombinedStats() {
  const [downloads, setDownloads] = useState(0);
  const [subscribers, setSubscribers] = useState(0);
  const [users, setUsers] = useState(0);
  const [cookies, setCookies] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloads(prevDownloads => {
        const targetDownloads = 120;
        return prevDownloads < targetDownloads ? prevDownloads + 1 : targetDownloads;
      });

      setSubscribers(prevSubscribers => {
        const targetSubscribers = 340;
        return prevSubscribers < targetSubscribers ? prevSubscribers + 1 : targetSubscribers;
      });

      setUsers(prevUsers => {
        const targetUsers = 25;
        return prevUsers < targetUsers ? prevUsers + 1 : targetUsers;
      });

      setCookies(prevCookies => {
        const targetCookies = 222;
        return prevCookies < targetCookies ? prevCookies + 1 : targetCookies;
      });
    }, 2); // Increase interval to 20 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="right-about mt-12">
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
