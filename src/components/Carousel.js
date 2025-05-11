import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // importar o CSS

const CarouselComponent = () => {
  return (
    <section id="carousel" className="carousel-section">
      <h2>Galeria de Imagens</h2>
      <Carousel>
        <div>
          <img src="/assets/images/foto1.jpg" alt="Imagem 1" />
        </div>
        <div>
          <img src="/assets/images/foto2.jpg" alt="Imagem 2" />
        </div>
        <div>
          <img src="/assets/images/foto3.jpg" alt="Imagem 3" />
        </div>
        <div>
          <img src="/assets/images/foto4.jpg" alt="Imagem 4" />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselComponent;

