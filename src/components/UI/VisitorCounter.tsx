import React, { useState, useEffect } from 'react';
import { FaEye, FaUsers } from 'react-icons/fa';

const VisitorCounter: React.FC = () => {
  const [visitors, setVisitors] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Using a free visitor counter API
        const response = await fetch('https://api.countapi.xyz/hit/my-portfolio-adin/visits');
        const data = await response.json();
        
        if (data.value) {
          setVisitors(data.value);
        }
        
        // Today's visits using different namespace
        const today = new Date().toDateString().replace(/\s/g, '-');
        const todayResponse = await fetch(`https://api.countapi.xyz/hit/my-portfolio-adin-daily/${today}`);
        const todayData = await todayResponse.json();
        
        if (todayData.value) {
          setTodayVisits(todayData.value);
        }
        
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to localStorage
        const localVisitors = localStorage.getItem('fallbackVisitors') || '1';
        const localToday = localStorage.getItem('fallbackToday') || '1';
        setVisitors(parseInt(localVisitors));
        setTodayVisits(parseInt(localToday));
        
        localStorage.setItem('fallbackVisitors', (parseInt(localVisitors) + 1).toString());
        localStorage.setItem('fallbackToday', (parseInt(localToday) + 1).toString());
      } finally {
        setLoading(false);
      }
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