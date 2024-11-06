
import Carousel from 'react-bootstrap/Carousel';

function Carosusel_component() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src="../public/images/1.jpeg" height="800px;" className="w-100"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../public/images/2.jpg" height="800px;" className="w-100"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="../public/images/3.jpg" height="800px;" className="w-100"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carosusel_component;