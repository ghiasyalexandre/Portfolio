import { useCallback, useEffect, useRef } from "react";
import { useIsVisible } from "./useIsVisible";

export default function VideoPlayer(props) {
  const src = props.src;
  const poster = props.poster;
  const alt = props.alt;
  const style = props.style;
  const { isVisible, targetRef } = useIsVisible(
    {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    },
    false
  );

  const videoRef = useRef(null);

  const startVideoOnMouseMove = useCallback(async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (e) {
        // do nothing
      }
    }
  }, []);

  const stopVideoOnMove = useCallback(() => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = true;
        videoRef.current.pause();
      } catch (e) {
        // do nothing
      }
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      startVideoOnMouseMove();
    } else {
      stopVideoOnMove();
    }
  }, [isVisible, startVideoOnMouseMove, stopVideoOnMove]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute video on hover
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Mute video when hover ends
    }
  };

  return (
    <span
      ref={targetRef}
      style={{
        position: "relative",
        minHeight: "50px",
        height: "100%",
      }}
    >
      <video
        ref={videoRef}
        loop
        muted
        preload="none"
        playsInline
        poster={poster}
        aria-label={alt}
        style={{
          objectFit: "contain",
          display: "block",
          width: "100%",
          height: "100%",
          borderRadius: "0.5em",
          ...style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={src} type="video/mp4" />
        <source src={src} type="video/webm" />
        Your browser does not support the video tag. Please try viewing this
        page in a modern browser.
      </video>
    </span>
  );
}
