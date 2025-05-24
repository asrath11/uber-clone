import React from 'react';
import NavBar from '../NavBar/NavBar';
import MainHero from '../HeroSection/MainHero';
import Hero from '../HeroSection/Hero';
import HERO_DATA from '../HeroSection/data';
import '../../App.css';
function Home() {
  return (
    <>
      <NavBar />
      <MainHero />
      {HERO_DATA.map((hero, index) => (
        <Hero
          key={index}
          title={hero.title}
          desc={hero.desc}
          imgSrc={hero.imgSrc}
          btnText={hero.btnText}
          imgDirection={index % 2 === 0 ? 'right' : 'left'}
          btnLink={hero.btnLink}
        />
      ))}
    </>
  );
}

export default Home;
