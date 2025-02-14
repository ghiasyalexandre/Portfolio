import { useState, useRef, useEffect } from "react";
import "./FadeInSection.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.disconnect(domRef.current);
      }
    });

    observer.observe(domRef.current);

    // eslint-disable-next-line
    return () => observer.disconnect(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section  ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}
