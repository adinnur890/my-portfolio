import React, { useState, useEffect } from 'react';
import { FaEye, FaUsers } from 'react-icons/fa';

const VisitorCounter: React.FC = () => {
  const [visitors, setVisitors] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = () => {
      // Use localStorage only
      const localVisitors = localStorage.getItem('totalVisitors') || '0';
      const today = new Date().toDateString();
      const lastVisit = localStorage.getItem('lastVisit');
      
      // Increment total visitors
      const newVisitors = parseInt(localVisitors) + 1;
      setVisitors(newVisitors);
      localStorage.setItem('totalVisitors', newVisitors.toString());
      
      // Handle today's visits
      if (lastVisit !== today) {
        localStorage.setItem('todayVisits', '1');
        localStorage.setItem('lastVisit', today);
        setTodayVisits(1);
      } else {
        const todayCount = localStorage.getItem('todayVisits') || '0';
        const newTodayCount = parseInt(todayCount) + 1;
        localStorage.setItem('todayVisits', newTodayCount.toString());
        setTodayVisits(newTodayCount);
      }
      
      setLoading(false);
    };

    fetchVisitorCount();
  }, []);

  if (loading) {
    return (
      <div className="visitor-counter">
        <div className="counter-item">
          <FaUsers className="counter-icon" />
          <div className="counter-info">
            <span className="counter-number">...</span>
            <span className="counter-label">Loading</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="visitor-counter">
      <div className="counter-item">
        <FaUsers className="counter-icon" />
        <div className="counter-info">
          <span className="counter-number">{visitors.toLocaleString()}</span>
          <span className="counter-label">Total Visitors</span>
        </div>
      </div>
      <div className="counter-item">
        <FaEye className="counter-icon" />
        <div className="counter-info">
          <span className="counter-number">{todayVisits}</span>
          <span className="counter-label">Today</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;