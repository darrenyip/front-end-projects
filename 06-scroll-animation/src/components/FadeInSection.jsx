import { useState, useRef, useEffect } from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  //   Create a reference to a DOM node with useRef
  const domRef = useRef();
  useEffect(() => {
    // Create the intersection observer and starting to observe with useEffect
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
