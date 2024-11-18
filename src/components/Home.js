import React, { useEffect, useRef } from 'react';
import '../App.css';
import { Footer, ImageCarousel } from './';
const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const banners = document.querySelectorAll('.animate-slide-in-left');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Optional: Stop observing after it has shown
          }
        });
      },
      { threshold: 0.15 }
    );
    banners.forEach(banner => observer.observe(banner));
    sections.forEach(section => observer.observe(section));


    // Cleanup on unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
      banners.forEach(banner => observer.unobserve(banner));
    };
  }, []);

  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <section id="hero" className="bg-gray-100">
        <div className='relative'>
          <iframe style={{ minHeight: '100vh', width: '100%' }} src="https://www.youtube.com/embed/gCRNEJxDJKM?autoplay=1&" title="Nepal In 4K - Country Of The Highest Mountain In The World | Scenic Relaxation Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
          <div className='intro'>
            <h1>
              An exclusive sites of Mountains, culture, temples, trekking, hospitality.
            </h1>
            <div className='flex-center mt-36 mb-6'>
              <p className='intro_title '>WATCH THE FLIM</p>
            </div>
          </div>
          <div className='scroll' onClick={scrollToNextSection}>
            <p className='text-white'>SCROLL</p>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.81 30" className='arrow'>
              <path fill="none" stroke="#fff" d="M4.91 0v24.8"></path><path fill="#fff" d="M4.91 30l4.9-5.27H0L4.91 30z"></path>
            </svg>
          </div>
        </div>
      </section>

      <div id='banner' ref={nextSectionRef}>
        <div className='animate-slide-in-left'>
          <div className="banner_slide flex-center">
            <p className='text-base'>
              Travel is the only thing you buy that makes you richer.
            </p>
          </div>
        </div>
      </div>


      <section className='my-16'>
        <div className='fade-in-section section-entry'>
          <p className="text-3xl uppercase text-center pb-10">
            Why Nepal To Travel?
          </p>
          <p className="text-2xl">
            Nepal offers unparalleled access to the Himalayan range, making it a top destination for trekking and mountaineering.
            Its rich cultural diversity and ancient traditions provide a unique glimpse into vibrant heritage and lifestyles.
            With its warm hospitality and serene landscapes, Nepal promises a truly memorable experience.
          </p>
        </div>
      </section>


      <section className='my-8'>
        <div className='fade-in-section text-center px-8'>
          <h1 className='header text-4xl text-black tracking-widest'>Nature</h1>
          <p className="text-p-xxxs my-8 section-entry py-8">
            Nepal's nature is a breathtaking blend of towering Himalayan peaks, lush forests, serene rivers, and diverse ecosystems teeming with wildlife.
          </p>

          <img src="https://media.nepalhighlandtreks.com/uploads/media/natural-beauty-of-nepal.jpg" className='mt-8 w-auto m-auto' alt="" />
          <p className='text-base text-center mt-2 uppercase'>Khumai Dada
          </p>
        </div>
      </section>



      <section className='my-8'>
        <div className='fade-in-section text-center px-8'>
          <h1 className='header text-4xl text-black tracking-widest'>Culture</h1>
          <p className="text-p-xxxs my-8 section-entry py-8">
            Nepal's culture is a vibrant tapestry of diverse ethnic traditions, colorful festivals, ancient temples, and harmonious coexistence of Hinduism and Buddhism.
          </p>

          <img src="https://www.yaccatravels.com/public/userfiles/goddess-dancing.jpg" className='mt-8 w-auto m-auto' alt="" />
          <p className='text-base text-center mt-2 uppercase'>Dances are from God
          </p>
        </div>
      </section>


      <section className='my-8'>
        <div className='fade-in-section text-center px-8'>
          <h1 className='header text-4xl text-black tracking-widest'>Temple</h1>
          <p className="text-p-xxxs my-8 section-entry py-8">
            The temples of Nepal reflect its rich cultural heritage, showcasing intricate architecture, spiritual devotion, and centuries-old traditions that blend Hindu and Buddhist influences.
          </p>

          <img src="https://images.squarespace-cdn.com/content/v1/53ecd1bde4b0a6f9524254f8/1505618571013-OG1SYTXWH62ISHP5UPQ1/kathmandu-nepal.jpg?format=2500w" className='mt-8 w-auto m-auto' alt="" />
          <p className='text-base text-center mt-2 uppercase'>The beaty of the craft
          </p>
        </div>
      </section>


      <section className='my-8'>
        <div className='fade-in-section text-center px-8'>
          <ImageCarousel />
        </div>
      </section>
      <Footer />
    </main >
  );
};

export default Home;
