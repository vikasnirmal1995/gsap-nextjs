import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TextReveal() {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "[Agency 101]. We're not just a company; we're a creative force. Delve into our world of innovation, strategy, and design as we craft unique solutions for your success.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 7,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <>
      <div className="spacing-small"></div>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="spacing"></div>
    </>
  );
}

export default TextReveal;
