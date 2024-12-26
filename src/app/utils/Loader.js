"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Loader() {
  useEffect(() => {
    function startloader() {
      let counter = document.querySelector(".counter");
      let currentValue = 0;

      function updateCounter() {
        if (currentValue < 100) {
          currentValue += Math.floor(Math.random() * 10) + 1;
        }

        if (currentValue > 100) {
          currentValue = 100;
        }

        counter.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }

      updateCounter();
    }

    startloader();

    gsap.to(".counter", 0.25, { opacity: 0, delay: 3.5 });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
      onComplete: () => {
        document.querySelector(".loader")?.style.setProperty("display", "none");
      },
    });

    // gsap.from("section", 2, {
    //   delay: 4,
    //   y: 400,
    //   ease: "power4.inOut",
    //   onComplete: () => {
    //     // Cache le compteur après la fin de l'animation
    //     document.querySelector(".loader")?.style.setProperty("display", "none");
    //   },
    // });
  }, []);

  return null;
}
