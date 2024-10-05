import './App.css';
import Hero from './components/Hero';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Products from './components/Products';
import Services from './components/Services';
import MilletsBenefits from './components/MilletsBenefits';
import Choose from './components/Choose';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { Review } from './components/Review';
import MindMap from './components/MindMap';
import State from './components/State';

// Utility function to load images
const loadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
  });
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to load images
    const loadImages = async () => {
      const images = document.querySelectorAll<HTMLImageElement>('img');
      const imageLoadPromises: Promise<void>[] = [];

      images.forEach(img => {
        if (img.src) {
          imageLoadPromises.push(loadImage(img.src));
        }
      });

      try {
        await Promise.all(imageLoadPromises);
        // console.log('All images loaded successfully');
      } catch (error) {
        console.error(error);
      }

      // Set loading to false after images are loaded
      setLoading(false);
    };

    loadImages();

    // Simulate a delay for components loading
    const timeout = setTimeout(() => {
      if (loading) {
        console.log('Simulating components loading...');
        setLoading(false);
      }
    }, 2000); // Adjust timeout as needed

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [loading]); // Added loading to dependencies

  if (loading) {
    return <Spinner />; // Show spinner while loading
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MindMap />
      <Products />
      <Services />
      <MilletsBenefits />
      <Choose />
      <Founder />
      <State />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
