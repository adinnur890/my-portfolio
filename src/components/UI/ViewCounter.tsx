import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

interface ViewCounterProps {
  projectId: number;
}

const ViewCounter: React.FC<ViewCounterProps> = ({ projectId }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Get current views
    const savedViews = localStorage.getItem(`project_${projectId}_views`) || '0';
    const currentViews = parseInt(savedViews);
    
    // Increment views
    const newViews = currentViews + 1;
    setViews(newViews);
    localStorage.setItem(`project_${projectId}_views`, newViews.toString());
  }, [projectId]);

  return (
    <div className="view-counter">
      <FaEye className="view-icon" />
      <span className="view-count">{views}</span>
    </div>
  );
};

export default ViewCounter;