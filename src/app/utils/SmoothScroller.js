// "use client";
// import React, { useRef } from 'react';
// import gsap from 'gsap-trial';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
// import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
// import { useGSAP } from '@gsap/react';

// gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

// const SmoothScroll = ({ children }) => {
//   const main = useRef();
//   const smoother = useRef();

//   useGSAP(() => {
//     smoother.current = ScrollSmoother.create({
//       wrapper: '#smooth-wrapper',
//       content: '#smooth-content',
//       smooth: 1.5,
//       effects: true,
//       normalizeScroll: true,
//       ignoreMobileResize: true
//     });

//     // Initialize any ScrollTrigger animations
//     ScrollTrigger.create({
//       trigger: '.loader',
//       start: 'top top',
//       end: 'bottom bottom',
//       markers: false,
//       onEnter: () => {
//         gsap.to('.bar', {
//           height: 0,
//           duration: 1.5,
//           ease: 'power4.inOut',
//           stagger: 0.05
//         });
//       }
//     });

//     return () => {
//       smoother.current.kill();
//     };
//   }, { scope: main });

//   return (
//     <div id="smooth-wrapper" ref={main}>
//       <div id="smooth-content">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SmoothScroll;