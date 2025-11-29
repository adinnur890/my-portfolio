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
      // Use localStorage only for now
      const projectLikes = localStorage.getItem(`project_${projectId}_likes`);
      const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
      
      setLikes(projectLikes ? parseInt(projectLikes) : 0);
      setIsLiked(likedProjects.includes(projectId));
      setLoading(false);
    };

    fetchLikes();
  }, [projectId, initialLikes]);

  const handleLike = async () => {
    if (loading) return;
    
    const likedProjects = JSON.parse(localStorage.getItem('likedProjects') || '[]');
    
    // Use localStorage only
    if (isLiked) {
      // Unlike
      const newLikedProjects = likedProjects.filter((id: number) => id !== projectId);
      localStorage.setItem('likedProjects', JSON.stringify(newLikedProjects));
      const newLikes = likes - 1;
      setLikes(newLikes);
      localStorage.setItem(`project_${projectId}_likes`, newLikes.toString());
      setIsLiked(false);
    } else {
      // Like
      likedProjects.push(projectId);
      localStorage.setItem('likedProjects', JSON.stringify(likedProjects));
      const newLikes = likes + 1;
      setLikes(newLikes);
      localStorage.setItem(`project_${projectId}_likes`, newLikes.toString());
      setIsLiked(true);
      
      // Trigger animation
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
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