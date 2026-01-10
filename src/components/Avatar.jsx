import React, { useState, useEffect, useRef } from 'react';

// --- Style-derived Constants ---
// Head
const HEAD_WIDTH = 100;
const HEAD_HEIGHT = 100;
const HEAD_TOP_OFFSET = 50; // From container top to head top
// Eye Sockets (relative to Head)
const EYE_SOCKET_WIDTH = 30;
const EYE_SOCKET_HEIGHT = 35;
const EYE_SOCKET_TOP_PERCENT = 0.30; // 30% from head top
const EYE_SOCKET_LEFT_PERCENT = 0.20; // 20% from head left for left eye
const EYE_SOCKET_RIGHT_PERCENT = 0.20; // 20% from head right for right eye

// Calculated Eye Socket positions relative to Head's top-left corner
const LEFT_EYE_SOCKET_TOP = HEAD_HEIGHT * EYE_SOCKET_TOP_PERCENT;
const LEFT_EYE_SOCKET_LEFT = HEAD_WIDTH * EYE_SOCKET_LEFT_PERCENT;

const RIGHT_EYE_SOCKET_TOP = HEAD_HEIGHT * EYE_SOCKET_TOP_PERCENT;
const RIGHT_EYE_SOCKET_LEFT = HEAD_WIDTH * (1 - EYE_SOCKET_RIGHT_PERCENT) - EYE_SOCKET_WIDTH;

// Pupils
const PUPIL_WIDTH = 12;
const PUPIL_HEIGHT = 12;

// Max Pupil Offset
const MAX_PUPIL_OFFSET_X = (EYE_SOCKET_WIDTH / 2) - (PUPIL_WIDTH / 2);
const MAX_PUPIL_OFFSET_Y = (EYE_SOCKET_HEIGHT / 2) - (PUPIL_HEIGHT / 2);

// Avatar Tilt
const MAX_AVATAR_TILT_ANGLE = 10;


const Avatar = () => {
  const [leftPupilTransform, setLeftPupilTransform] = useState('translate(-50%, -50%)');
  const [rightPupilTransform, setRightPupilTransform] = useState('translate(-50%, -50%)');
  const [avatarTiltTransform, setAvatarTiltTransform] = useState('');
  const avatarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!avatarRef.current) return;

      const avatarRect = avatarRef.current.getBoundingClientRect();
      
      // --- Avatar Tilt Calculation ---
      const avatarCenterX = avatarRect.left + avatarRect.width / 2;
      const avatarCenterY = avatarRect.top + avatarRect.height / 2;
      const deltaXAvatar = event.clientX - avatarCenterX;
      const deltaYAvatar = event.clientY - avatarCenterY;

      let rotateY = (deltaXAvatar / (avatarRect.width / 2)) * MAX_AVATAR_TILT_ANGLE;
      let rotateX = (-deltaYAvatar / (avatarRect.height / 2)) * MAX_AVATAR_TILT_ANGLE;

      rotateX = Math.max(-MAX_AVATAR_TILT_ANGLE, Math.min(MAX_AVATAR_TILT_ANGLE, rotateX));
      rotateY = Math.max(-MAX_AVATAR_TILT_ANGLE, Math.min(MAX_AVATAR_TILT_ANGLE, rotateY));
      
      setAvatarTiltTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

      // --- Pupil Movement Calculation ---
      const headActualLeftInContainer = (styles.container.width - HEAD_WIDTH) / 2;
      const headViewportX = avatarRect.left + headActualLeftInContainer;
      const headViewportY = avatarRect.top + HEAD_TOP_OFFSET;

      const leftEyeSocketViewportX = headViewportX + LEFT_EYE_SOCKET_LEFT;
      const leftEyeSocketViewportY = headViewportY + LEFT_EYE_SOCKET_TOP;
      const leftEyeCenterX = leftEyeSocketViewportX + EYE_SOCKET_WIDTH / 2;
      const leftEyeCenterY = leftEyeSocketViewportY + EYE_SOCKET_HEIGHT / 2;
      let deltaXLeft = event.clientX - leftEyeCenterX;
      let deltaYLeft = event.clientY - leftEyeCenterY;
      const distanceLeft = Math.sqrt(deltaXLeft * deltaXLeft + deltaYLeft * deltaYLeft);
      const pupilXLeft = (distanceLeft > 0) ? (deltaXLeft / distanceLeft) * Math.min(distanceLeft, MAX_PUPIL_OFFSET_X) : 0;
      const pupilYLeft = (distanceLeft > 0) ? (deltaYLeft / distanceLeft) * Math.min(distanceLeft, MAX_PUPIL_OFFSET_Y) : 0;
      setLeftPupilTransform(`translate(calc(-50% + ${pupilXLeft}px), calc(-50% + ${pupilYLeft}px))`);

      const rightEyeSocketViewportX = headViewportX + RIGHT_EYE_SOCKET_LEFT;
      const rightEyeSocketViewportY = headViewportY + RIGHT_EYE_SOCKET_TOP;
      const rightEyeCenterX = rightEyeSocketViewportX + EYE_SOCKET_WIDTH / 2;
      const rightEyeCenterY = rightEyeSocketViewportY + EYE_SOCKET_HEIGHT / 2;
      let deltaXRight = event.clientX - rightEyeCenterX;
      let deltaYRight = event.clientY - rightEyeCenterY;
      const distanceRight = Math.sqrt(deltaXRight * deltaXRight + deltaYRight * deltaYRight);
      const pupilXRight = (distanceRight > 0) ? (deltaXRight / distanceRight) * Math.min(distanceRight, MAX_PUPIL_OFFSET_X) : 0;
      const pupilYRight = (distanceRight > 0) ? (deltaYRight / distanceRight) * Math.min(distanceRight, MAX_PUPIL_OFFSET_Y) : 0;
      setRightPupilTransform(`translate(calc(-50% + ${pupilXRight}px), calc(-50% + ${pupilYRight}px))`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = { 
    container: {
      width: 180,
      height: 220,
      position: 'relative',
      transform: avatarTiltTransform,
      transition: 'transform 0.1s ease-out',
    },
    head: {
      width: HEAD_WIDTH,
      height: HEAD_HEIGHT,
      backgroundColor: '#cccccc', // Changed from #dddddd
      borderRadius: '50%',
      position: 'absolute',
      top: HEAD_TOP_OFFSET,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2,
    },
    hair: {
      width: 110,
      height: 65, // Changed from 60
      backgroundColor: '#202020',
      borderRadius: '50px 50px 20px 20px', // Changed from 10px 10px
      position: 'absolute',
      top: 22, // Changed from 25
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 3,
      borderTop: '2px solid #1a1a1a', // Added for definition
    },
    headphoneBand: {
      width: 130,
      height: 30,
      backgroundColor: '#202020',
      border: '3px solid #1a1a1a',
      borderRadius: '30px 30px 0 0',
      position: 'absolute',
      top: 12, // Changed from 15
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 4,
    },
    leftEarcup: {
      width: 35,
      height: 45,
      backgroundColor: '#252525',
      border: '3px solid #1a1a1a',
      borderRadius: '12px', // Changed from 10px
      position: 'absolute',
      top: 50, // Changed from 55
      left: 10, 
      zIndex: 5,
    },
    rightEarcup: {
      width: 35,
      height: 45,
      backgroundColor: '#252525',
      border: '3px solid #1a1a1a',
      borderRadius: '12px', // Changed from 10px
      position: 'absolute',
      top: 50, // Changed from 55
      right: 10,
      zIndex: 5,
    },
    leftEyeSocket: {
      width: EYE_SOCKET_WIDTH,
      height: EYE_SOCKET_HEIGHT,
      backgroundColor: '#f0f0f0', // Changed from white
      borderRadius: '40%',
      position: 'absolute',
      top: `${EYE_SOCKET_TOP_PERCENT * 100}%`,
      left: `${EYE_SOCKET_LEFT_PERCENT * 100}%`,
      zIndex: 1,
    },
    rightEyeSocket: {
      width: EYE_SOCKET_WIDTH,
      height: EYE_SOCKET_HEIGHT,
      backgroundColor: '#f0f0f0', // Changed from white
      borderRadius: '40%',
      position: 'absolute',
      top: `${EYE_SOCKET_TOP_PERCENT * 100}%`,
      right: `${EYE_SOCKET_RIGHT_PERCENT * 100}%`,
      zIndex: 1,
    },
    pupil: {
      width: PUPIL_WIDTH,
      height: PUPIL_HEIGHT,
      backgroundColor: '#202020',
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transition: 'transform 0.03s linear', // Added for smoothness
    },
    shoulders: {
      width: 160,
      height: 80,
      backgroundColor: '#202020',
      borderRadius: '30px 30px 0 0',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1,
    },
  };

  return (
    <div ref={avatarRef} style={styles.container}>
      <div style={styles.shoulders}></div>
      <div style={styles.headphoneBand}></div>
      <div style={styles.hair}></div>
      <div style={styles.head}>
        <div style={styles.leftEyeSocket}>
          <div style={{...styles.pupil, transform: leftPupilTransform }}></div>
        </div>
        <div style={styles.rightEyeSocket}>
          <div style={{...styles.pupil, transform: rightPupilTransform }}></div>
        </div>
      </div>
      <div style={styles.leftEarcup}></div>
      <div style={styles.rightEarcup}></div>
    </div>
  );
};

export default Avatar;
