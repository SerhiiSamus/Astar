gsap.registerPlugin(ScrollTrigger);

//header animations
const logo = gsap.timeline();
if (window.innerWidth > 800) {
  logo
    .set('.logo1', {
      xPercent: 1200,
      yPercent: -500,
      scale: 1.5,
    })
    .set('.logo2', {
      xPercent: 500,
      yPercent: 80,
      scale: 1.5,
    })
    .set('.logo3', {
      yPercent: -80,
      xPercent: 200,
      scale: 1.5,
    })
    .set('.logo4', {
      yPercent: 100,
      xPercent: 50,
      scale: 1.5,
    })
    .to('.logo-path', {
      strokeDashoffset: 0,
      stroke: '#1c6030',
      duration: 2,
    })
    .to('.logo1', {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      duration: 2,
    })
    .to(
      '.logo2',
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 2,
      },
      2
    )
    .to(
      '.logo3',
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 2,
      },
      2
    )
    .to(
      '.logo4',
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 2,
      },
      2
    );
  gsap.to('.text-logo', {
    opacity: 1,
    xPercent: 100,
    delay: 4,
    duration: 1.8,
  });

  const headerTl = gsap.timeline();

  headerTl
    .from(
      '.contact-item',
      {
        xPercent: 50,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.3,
        },
      },
      0.3
    )
    .from(
      '.nav-item',
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        stagger: {
          amount: 0.5,
        },
      },
      0.5
    );
  // .from(
  //   '.great-action',
  //   {
  //     opacity: 0,
  //   },
  //   1.5
  // );

  gsap.from('.advantages > *', {
    scrollTrigger: {
      trigger: '.advantages-title',
      start: '-200px center',
      end: '100px',
    },
    y: 200,
    stagger: {
      amount: 0.4,
    },
  });

  // gsap.from('.services > *', {
  //   scrollTrigger: {
  //     trigger: '.services-title',
  //     start: '-175 center',
  //     end: '+=45%',
  //     scrub: 1,
  //   },
  //   filter: 'blur(10px)',
  //   scale: 0.5,
  //   stagger: {
  //     amount: 0.4,
  //   },
  // });
  // gsap.from('.map-svg > *', {
  //   scrollTrigger: {
  //     trigger: '.about-section',
  //     start: 'top-=30%',
  //     end: 'center-=20%',
  //   },
  //   filter: 'blur(1px)',
  //   // opacity: 0,
  //   // scale: 0,
  //   x: function () {
  //     return Math.random() * 200 - 100; // Случайное значение в диапазоне от -100 до 100
  //   },
  //   y: function () {
  //     return Math.random() * 200 - 100; // Случайное значение в диапазоне от -100 до 100
  //   },
  //   duration: 4,
  // });
  gsap.from('.about-img > *', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top-=30%',
      end: 'center-=20%',
    },
    rotate: '720 deg',
    // opacity: 0,
    // scale: 0,
    xPercent: 500,
    stagger: { amount: 2.7 },
    duration: 1.7,
  });
  gsap.from('.about-info > :not(:last-child)', {
    scrollTrigger: {
      trigger: '.about-section',
      start: '30% bottom',
      end: '+=90%',
    },
    xPercent: -50,
    opacity: 0,
    stagger: { amount: 0.1 },
  });

  gsap.from('.counter-number', {
    innerText: 0,
    duration: 3,
    snap: {
      innerText: 1,
    },
    scrollTrigger: {
      trigger: '.about-section',
      start: '300px center',
      end: '+=45%',
    },
  });
  gsap.from('.feedback-info', {
    scrollTrigger: {
      trigger: '.feedback-content',
      start: 'top bottom',
      end: '150% bottom',
      scrub: 1,
    },
    yPercent: -25,
    opacity: 0,
  });
  gsap.from('.feedback-form-container', {
    scrollTrigger: {
      trigger: '.feedback-content',
      start: 'top bottom',
      end: '150% bottom',
      scrub: 1,
    },
    yPercent: 35,
    opacity: 0,
  });
  gsap.to('.svg-gob', {
    scrollTrigger: {
      trigger: '.job-content',
      start: 'top center',
    },
    strokeDashoffset: 0,
    stroke: 'black',
    duration: 5,
  });

  gsap.to('.call-us-btn', {
    scrollTrigger: {
      trigger: '.advantages-section',
      start: 'top bottom',
    },
    opacity: 1,
  });
} else {
  logo
    .set('.logo1', {
      xPercent: 1200,
      yPercent: -500,
      scale: 1.5,
    })
    .set('.logo2', {
      xPercent: 500,
      yPercent: 80,
      scale: 1.5,
    })
    .set('.logo3', {
      yPercent: -80,
      xPercent: 200,
      scale: 1.5,
    })
    .set('.logo4', {
      yPercent: 100,
      xPercent: 50,
      scale: 1.5,
    })
    .to('.logo-path', {
      strokeDashoffset: 0,
      stroke: '#1c6030',
      duration: 2,
    })
    .to('.logo1', {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      duration: 2,
    })
    .to(
      '.logo2',
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 2,
      },
      2
    )
    .to(
      '.logo3',
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 2,
      },
      2
    )
    .to(
      '.logo4',
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        duration: 2,
      },
      2
    );
  gsap.to('.text-logo', {
    opacity: 1,
    xPercent: 100,
    delay: 4,
    duration: 1.8,
  });
  gsap.from('.about-img > *', {
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top-=30%',
      end: 'center-=20%',
    },
    rotate: '720 deg',
    // opacity: 0,
    // scale: 0,
    xPercent: 500,
    stagger: { amount: 2.7 },
    duration: 1.7,
  });
  // gsap.to('.svg-gob', {
  //   scrollTrigger: {
  //     trigger: '.job-content',
  //     start: 'top center',
  //   },
  //   strokeDashoffset: 0,
  //   stroke: 'black',
  //   duration: 5,
  // });
}
