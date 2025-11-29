import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

interface LikeButtonProps {
  projectId: number;
  initialLikes?: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ projectId, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    try {
      const savedLikes = localStorage.getItem(`project_${projectId}_likes`);
      const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
      
      setLikes(savedLikes ? parseInt(savedLikes) : 0);
      setIsLiked(likedProjects.includes(projectId));
    } catch (error) {
      console.log('Error loading likes:', error);
      setLikes(0);
      setIsLiked(false);
    }
  }, [projectId]);

  const handleLike = () => {
    try {
      const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
      
      if (isLiked) {
        // Unlike
        const newLikedProjects = likedProjects.filter((id: number) => id !== projectId);
        localStorage.setItem('likedProjects', JSON.stringify(newLikedProjects));
        const newLikes = Math.max(0, likes - 1);
        setLikes(newLikes);
        localStorage.setItem(`project_${projectId}_likes`, newLikes.toString());
        setIsLiked(false);
      } else {
        // Like
        if (!likedProjects.includes(projectId)) {
          likedProjects.push(projectId);
        }
        localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem(`project_${projectId}_likes`, newLikes.toString());
        setIsLiked(true);
        
        // Animation
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);
      }
    } catch (error) {
      console.log('Error saving likes:', error);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`like-button ${isLiked ? 'liked' : ''} ${isAnimating ? 'animating' : ''}`}
      type="button"
    >
      <FaHeart className="heart-icon" />
      <span className="like-count">{likes}</span>
    </button>
  );
};

export default LikeButton;