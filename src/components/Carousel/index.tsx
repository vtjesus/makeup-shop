import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import "./styles.css";

const CarouselHome = () => {
  return (
    <Carousel fade>
      <CarouselItem>
        <div className="container-banner-01 rounded-3"></div>
        <CarouselCaption>
          <h2 className="text-uppercase m-0 title">Make Me Up</h2>
          <h3 className="m-0 subtitle">Ваша краса, наша пристрасть!</h3>
          <p className="m-0 text">
          Відкрийте для себе магію макіяжу та досліджуйте всесвіт кольорів та
            можливості підкреслити свою природну красу та пробудити
            самоповага.
          </p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <div className="container-banner-02 rounded-3"></div>
        <CarouselCaption>
          <h2 className="text-uppercase m-0 title">Make Me Up</h2>
          <h3 className="m-0 subtitle">Висловіть свою неповторну красу!</h3>
          <p className="m-0 text">
          Ми віримо, що краса унікальна та індивідуальна, тому ми пропонуємо
            широкий вибір продуктів для задоволення ваших потреб і
            уподобання.
          </p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <div className="container-banner-03 rounded-3"></div>
        <CarouselCaption>
          <h2 className="text-uppercase m-0 title">Make Me Up</h2>
          <h3 className="m-0 subtitle">Досвід краси!</h3>
          <p className="m-0 text">
          Макіяж – це не просто косметичний продукт, а
            потужний інструмент для самовираження та трансформації. Виділіть свій
            сильні сторони та створювати неймовірні образи.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselHome;
