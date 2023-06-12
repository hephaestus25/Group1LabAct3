import React from 'react';
import './Buttons.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const scrollToVideoTrailer = () => {
    const videoTrailerSection = document.getElementById('video-trailer');
    if (videoTrailerSection) {
      videoTrailerSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={() => {
        scrollToVideoTrailer();
        if (onClick) {
          onClick();
        }
      }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
