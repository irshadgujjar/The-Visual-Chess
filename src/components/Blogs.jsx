import React, { useState, useEffect } from 'react';

export default function Blogs() {
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
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#bebae0]">{downloads} +</h6>
          <p className="text-sm font-medium tracking-widest text-[#bebae0] uppercase lg:text-base">
            Downloads
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#bebae0]">{subscribers} +</h6>
          <p className="text-sm font-medium tracking-widest text-[#bebae0] uppercase lg:text-base">
            Subscribers
          </p>
        </div>
        <div className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#bebae0]">{users} +</h6>
          <p className="text-sm font-medium tracking-widest text-[#bebae0] uppercase lg:text-base">
            Users
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#bebae0]">{cookies} +</h6>
          <p className="text-sm font-medium tracking-widest text-[#bebae0] uppercase lg:text-base">
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
}
