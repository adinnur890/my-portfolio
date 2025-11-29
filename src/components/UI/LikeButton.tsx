import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

interface LikeButtonProps {
  projectId: number;
  initialLikes?: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ projectId, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        // Get current likes from API
        const response = await fetch(`https://api.countapi.xyz/get/portfolio-likes/project-${projectId}`);
        const data = await response.json();
        
        if (data.value !== undefined) {
          setLikes(data.value);
        } else {
          // Initialize with 0 likes
          const initResponse = await fetch(`https://api.countapi.xyz/set/portfolio-likes/project-${projectId}?value=0`);
          const initData = await initResponse.json();
          setLikes(initData.value || 0);
        }
        
        // Check if user already liked
        const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
        setIsLiked(likedProjects.includes(projectId));
        
      } catch (error) {
        console.error('Error fetching likes:', error);
        // Fallback to localStorage
        const projectLikes = localStorage.getItem(`project_${projectId}_likes`);
        const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
        
        setLikes(0); // Start from 0
        setIsLiked(likedProjects.includes(projectId));
      } finally {
        setLoading(false);
      }
    };

    fetchLikes();
  }, [projectId, initialLikes]);

  const handleLike = async () => {
    if (loading) return;
    
    const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
    
    try {
      if (isLiked) {
        // Unlike - decrease API counter
        const response = await fetch(`https://api.countapi.xyz/hit/portfolio-likes/project-${projectId}?amount=-1`);
        const data = await response.json();
        
        if (data.value !== undefined) {
          setLikes(data.value);
          const newLikedProjects = likedProjects.filter((id: number) => id !== projectId);
          localStorage.setItem('likedProjects', JSON.stringify(newLikedProjects));
          setIsLiked(false);
        }
      } else {
        // Like - increase API counter
        const response = await fetch(`https://api.countapi.xyz/hit/portfolio-likes/project-${projectId}`);
        const data = await response.json();
        
        if (data.value !== undefined) {
          setLikes(data.value);
          likedProjects.push(projectId);
          localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
          setIsLiked(true);
          
          // Trigger animation
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 600);
        }
      }
    } catch (error) {
      console.error('Error updating likes:', error);
      // Fallback to localStorage only
      if (isLiked) {
        const newLikedProjects = likedProjects.filter((id: number) => id !== projectId);
        localStorage.setItem('likedProjects', JSON.stringify(newLikedProjects));
        setLikes(prev => prev - 1);
        localStorage.setItem(`project_${projectId}_likes`, (likes - 1).toString());
      } else {
        likedProjects.push(projectId);
        localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
        setLikes(prev => prev + 1);
        localStorage.setItem(`project_${projectId}_likes`, (likes + 1).toString());
        
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      }
      setIsLiked(!isLiked);
    }
  };

  if (loading) {
    return (
      <button className="like-button">
        <FaHeart className="heart-icon" />
        <span className="like-count">...</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleLike}
      className={`like-button ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''}`}
      disabled={loading}
    >
      <FaHeart className="heart-icon" />
      <span className="like-count">{likes}</span>
    </button>
  );
};

export default LikeButton;