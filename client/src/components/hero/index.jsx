import Header from './Header';
import HeroImage from './HeroImage';

import { useMediaQuery } from '@react-hook/media-query';

const Hero = () => {
  const mobileScreen = useMediaQuery('(max-width: 640px)');

  return (
    <section id="hero" className="pt-32 pb-12 flex flex-col sm:flex-row">
      <Header />
      <HeroImage />
    </section>
  );
};

export default Hero;
