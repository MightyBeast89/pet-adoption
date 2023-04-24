import Heading from './Heading';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <section id='hero' className='pt-32 pb-12 flex flex-col sm:flex-row'>
      <Heading />
      <HeroImage />
    </section>
  );
};

export default Hero;
