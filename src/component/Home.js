import React from "react";
import "./Home.css";
import Products from "./Products";

function Home() {
  return (
    <div className="home">
      <img
        className="homeImage"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSaheli/Gift/sec2/2x._CB646912821_.jpg"
        alt="amazon"
      />
      <div className="homeRow">
        <Products
          id="123456"
          title={`boAt Flash Edition Smartwatch with Activity Tracker,
          Multiple Sports Modes,Full Touch 3.30 cm (1.3") Screen,Gesture Control,
          Sleep Monitor,Camera & Music Control,IP68 Dust,Sweat & Splash Resistance
          (Galaxy Blue)`}
          price={2299}
          rating={5}
          image="https://m.media-amazon.com/images/I/61HAFewyFsL._SX679_.jpg"
        />
        <Products
          id="235335264"
          title="Microsoft Xbox One S 1Tb Console - White [Discontinued]"
          price={39272}
          rating={4}
          image="https://m.media-amazon.com/images/I/61zjj2sgXML._SX425_.jpg"
        />
      </div>
      <div className="homeRow">
        <Products
          id="123456"
          title="The Man Company Night Perfume For Men | EDP ( EAU DE PARFUM ) For Men - 60ml | Premium Long Lasting Fragrance | Perfect Gift For Husband, Boyfriend"
          price={449.5}
          rating={4}
          image="https://m.media-amazon.com/images/I/617ci3GDyeL._SX679_.jpg"
        />
        <Products
          id="123458"
          title="Dolce and Gabbana The One by olce and Gabbana eau de perfum for men3.3oz/100ml"
          price={8571}
          rating={4}
          image="https://m.media-amazon.com/images/I/41bzTqK8zML.jpg"
        />
        <Products
          id="123452"
          title="BS-300 Men's ClogsBeardo Whisky Smoke Perfume for Men, 100ml | EAU DE PARFUM | Strong & Long Lasting| Spicy, Woody - Oudh | Ideal Gift for Men | Gift for Husband and Boyfriend | Body Spray for Men"
          price={1200}
          rating={5}
          image="https://m.media-amazon.com/images/I/61gdzqkFt8L._SY879_.jpg"
        />
      </div>
      <div className="homeRow">
        <Products
          id={123455}
          title="Colorful GeForce GT 1030 4GB DDR4 RAM Graphics Card with Single Fan ( GT1030 4G-V ) Can Play Most of AAA Game Titles 64 bit 1152 Mhz Clock Speed GTA V Can be Played 3 Years Warranty"
          price={8865}
          rating={4}
          image="https://m.media-amazon.com/images/I/41WlU+952hL.jpg"
        />
        <Products
          id={123455}
          title="Gigabyte B450M DS3H (AMD Ryzen AM4/M.2/HMDI/DVI/USB 3.1/DDR4/Micro ATX/Motherboard)"
          price={5600}
          rating={4}
          image="https://m.media-amazon.com/images/I/61fVtmw4KYL._SX679_.jpg"
        />
      </div>
    </div>
  );
}
export default Home;
