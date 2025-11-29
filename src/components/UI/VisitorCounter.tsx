import React, { useState, useEffect } from 'react';
import { FaEye, FaUsers } from 'react-icons/fa';

const VisitorCounter: React.FC = () => {
  const [visitors, setVisitors] = useState(0);
  const [todayVisits, setTodayVisits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reset counters to 0
    localStorage.removeItem('totalVisitors');
    localStorage.removeItem('todayVisits');
    localStorage.removeItem('lastVisit');
    
    setVisitors(0);
    setTodayVisits(0);
    setLoading(false);
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
          <span className="counter-number">0</span>
          <span className="counter-label">Total Visitors</span>
        </div>
      </div>
      <div className="counter-item">
        <FaEye className="counter-icon" />
        <div className="counter-info">
          <span className="counter-number">0</span>
          <span className="counter-label">Today</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;