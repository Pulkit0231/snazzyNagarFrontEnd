import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              SnazzyNagar is a clothing brand that offers a wide range of stylish and high-quality clothing for men, women, and children. Our collection includes everything from classic t-shirts and jeans to formal shirts and dresses, all designed with the latest fashion trends in mind.
              <p>At SnazzyNagar, we believe that everyone deserves to look and feel their best, which is why we use only the finest materials and construction techniques to create our clothing.
              </p>
              <p>
                Our products are made to last, so you can enjoy them for years to come.
                Whether you’re looking for something casual for everyday wear or something more formal for a special occasion, SnazzyNagar has got you covered. Browse our collection today and discover the perfect outfit for any occasion.
              </p>

            </p>
            <NavLink to="/products">
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img src="images/fashion.jpg" alt="herosectionphoto" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 70%;
      height: 100%;
      background-color: rgba(162, 162, 158, 1);
      position: absolute;
      left: 20%;
      top: -10rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 70%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(162, 162, 158, 1);
    }
  }
`;

export default HeroSection;
