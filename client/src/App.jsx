import React, { useEffect, useState } from 'react';
import { Container, Navbar, Hero } from './components';

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTopOfPage]);

  return (
    <main className='text-neutral'>
      <Navbar isTopOfPage={isTopOfPage} />
      <Container>
        <Hero />
      </Container>
    </main>
  );
};

export default App;
