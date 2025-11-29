import React from 'react';
import { FaWhatsapp, FaTwitter, FaLinkedin, FaFacebook, FaLink } from 'react-icons/fa';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ 
  url = window.location.href,
  title = "Portfolio Adin Nurdiansyah",
  description = "Check out this amazing portfolio!"
}) => {
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${description} ${url}`)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // Show toast notification
      const toast = document.createElement('div');
      toast.textContent = 'Link copied to clipboard!';
      toast.className = 'copy-toast';
      document.body.appendChild(toast);
      setTimeout(() => document.body.removeChild(toast), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="share-buttons">
      <span className="share-label">Share:</span>
      <div className="share-icons">
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="share-btn whatsapp">
          <FaWhatsapp />
        </a>
        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-btn twitter">
          <FaTwitter />
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-btn linkedin">
          <FaLinkedin />
        </a>
        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-btn facebook">
          <FaFacebook />
        </a>
        <button onClick={copyToClipboard} className="share-btn copy">
          <FaLink />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;