import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
     <div className="home__contianer">
      <img 
      className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
      alt=""
      />

      <div className="home__row">
        <Product 
        id="1"
        title='itel A47 (Ice Lake Blue, 2GB RAM, 32GB Storage, 5.5" HD+ IPS Display)' 
        price={5499} 
        image='https://m.media-amazon.com/images/I/41VM30DBK8L.__AC_SY200_.jpg' 
        rating={5}
        />

        <Product 
        id="2"
        title='Vivo V20 Pro 5G (Sunset Melody, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers'
        price={30000}
        image='https://images-na.ssl-images-amazon.com/images/I/71HLaYtc%2BJL._SL1200_.jpg'
        rating={4}
        />
      </div>

      <div className="home__row">
      <Product 
        id="3"
        title='Flat 50% Sale Offer on Oneplus Bud Z hurry grap them all!'
        price={3000}
        image='https://images-na.ssl-images-amazon.com/images/I/51vwQzwM%2BZL._SL1500_.jpg'
        rating={5}
        />

      <Product 
        id="4"
        title='
        Click to open expanded view
        Audio-Technica ATH-M50x Over-Ear Professional Studio Monitor Headphones (Black)'
        price={11000}
        image='https://images-na.ssl-images-amazon.com/images/I/71WNWRLJCsL._SL1500_.jpg'
        rating={3}
      />

      <Product 
        id="5"
        title='Spigen Ultra Hybrid Back Cover Case for Samsung Galaxy S9 Plus - Crystal Clear'
        price={1000}
        image='https://images-na.ssl-images-amazon.com/images/I/61n7n9jI9UL._SL1000_.jpg'
        rating={2}
        />
      </div>

      <div className="home__row">
        <Product 
         id="6"
         title='
         Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black) (2020 Model)'
         price={50000}
         image='https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SL1500_.jpg'
         rating={5}
        />
      </div>
     </div> 
    </div>
  );
}

export default Home;
