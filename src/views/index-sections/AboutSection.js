import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import './AboutSection.css';

const items = [
  {
    src: require("assets/img/bg1.png"),
    altText: '¿Quiénes somos?',
    caption: 'Somos una empresa dedicada a...',
    content: 'Somos un equipo apasionado por la innovación, comprometido en ofrecer soluciones que transformen ideas en realidades. Desde nuestros inicios, hemos trabajado con dedicación y profesionalismo para satisfacer las necesidades de nuestros clientes, adaptándonos a un entorno en constante evolución. Nuestra esencia radica en crear un impacto positivo a través de servicios de calidad, fomentando relaciones de confianza y valor duradero.'
  },
  {
    src: require("assets/img/bg2.png"),
    altText: 'Misión',
    caption: 'Nuestra misión es...',
    content: 'Proveer soluciones innovadoras que superen las expectativas de nuestros clientes, combinando tecnología, creatividad y excelencia operativa. Nos enfocamos en empoderar a las personas y las organizaciones, brindándoles herramientas para alcanzar sus objetivos y marcar una diferencia significativa en sus industrias.'
  },
  {
    src: require("assets/img/bg3.png"),
    altText: 'Visión',
    caption: 'Nuestra visión es...',
    content: 'Ser líderes reconocidos globalmente por nuestra capacidad de innovar, adaptarnos y transformar el mercado. Aspiramos a ser el socio estratégico que inspire confianza y logre resultados excepcionales, promoviendo el desarrollo sostenible y el impacto positivo en las comunidades donde operamos.'
  }
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className="carousel-slide">
          <img src={item.src} alt={item.altText} className="carousel-image" />
          <div className="carousel-caption-custom">
            <h2>{item.altText}</h2>
            <p>{item.content}</p>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="about-section">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default AboutSection;