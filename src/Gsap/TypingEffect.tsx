import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TypingTextProps {
  texts: string[]; // Array of texts to be typed
  speed?: number; // Typing speed (default: 0.1s)
  delay?: number; // Delay before switching text (default: 1.5s)
  cusClass?:string
}

const TypingText: React.FC<TypingTextProps> = ({ texts, speed = 0.1, delay = 1.5, cusClass }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts)


  useEffect(() => {
    if (!textRef.current) return;

    const letters = text[index].split(""); // Split current text into letters
    textRef.current.innerHTML = ""; // Clear text container
    console.log(letters);

    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      textRef.current?.appendChild(span);
    });

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: speed,
        stagger: speed, // Delays between each letter
        ease: "power1.out",
        onComplete: () => {
          setTimeout(() => {
            if (index < text.length - 1) {
              console.log("kjhgfd");
              
              setIndex(index+1);
            }
            else {
              console.log("45");

              setIndex(0)
            }// Switch to next text
          }, delay * 1000);
        },
      }
    );
  }, [index, text, speed, delay]);

  return <h1 ref={textRef} className={`text-4xl font-bold text-amber-400 ${cusClass}`}></h1>;
};

export default TypingText;
