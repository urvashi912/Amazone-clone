// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Product from "../Products/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://img.freepik.com/free-vector/happy-diwali-purple-shiny-sale-banner_1017-21635.jpg?w=1480&t=st=1692121315~exp=1692121915~hmac=009e433298b50ff881ba306243e8c7b47e09c8c8e35c9bf74b92de84101951b6"
          alt=""
        />

        <div className="home_row">
          <Product
            title="Rich Dad Poor Dad by Robert T. Kiyosaki - What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! "
            price={29.99}
            image={
              "https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            }
            rating={3}
          />
          <Product 
          title="Unbroken by Indrani Mukerjea: You've seen the headlines and heard the rumours. Now hear the story from the woman who was at the centre of it all."
          price = {11.99}
          image={"https://m.media-amazon.com/images/I/416iAdoay1L._SX323_BO1,204,203,200_.jpg"}
          rating={5}
          
          />
        </div>

        <div className="home_row">
          <Product 
          title = "The Power Of One Thought by Bk Shivani - Master Your Mind, Master Your Life"
          price = {26.99}
          image = {"https://m.media-amazon.com/images/I/410kZOXam1L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"}
          rating = {5}
           />
          <Product 
          title = "OnePlus Bullets Wireless Z2 ANC Bluetooth in Ear Earphones with Mic, 45dB Hybrid ANC, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 28 Hrs Battery Life (Boomin Black)"
          price = {12.22}
          image = {
            "https://m.media-amazon.com/images/I/51sZ0bOotML._AC_UL800_FMwebp_QL65_.jpg"
          }
          rating={4}
          />
          <Product
          title = "iQOO Neo 7 Pro 5G (Fearless Flame, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip | Flagship 50MP OIS Camera | Premium Leather Design"

          price = {370.99}
          image = {"https://m.media-amazon.com/images/I/51o13K4h3-L._SX300_SY300_QL70_FMwebp_.jpg"}
          rating= {4}
          />
        </div>

        <div className="home_row">
          <Product
          title = "Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black)"

          price = {1000.99}
          image = {"https://m.media-amazon.com/images/I/41aCNrgZ9eL._SY300_SX300_QL70_FMwebp_.jpg"}
          rating = {5}
          />
          {/* Product */}
        </div>
      </div>
    </div>
  );
};

export default Home;