import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { useGlobalContext } from '../context'
const Descriptionpic = () => {
  const {name,image}=useGlobalContext();
  return (
    <Wrapper>
      <div className='container grid grid-two-column'>
      <div className='section-shop-data'>
      <p className='shop-top-data'>This is about PP-Electricals</p>
      <h1 className='shop-heading'>{name}</h1>
      <p className='shop-data'>This is {name} based in chadani-chowk</p>
      <Button className="btn contact-us-btn">
        <NavLink to="/Contact">Contact Us</NavLink>
      </Button>
      </div>
      <div className='section-shop-image'>
      <picture>
        <img src={image} alt="shop image" className='shop-img'/>
      </picture>
      </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
padding: 9rem 0;
  .section-shop-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .shop-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .shop-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .shop-data {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-shop-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .shop-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default Descriptionpic