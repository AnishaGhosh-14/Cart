import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import { useState } from "react";
import Product from "./Component/Product";
import CartList from "./Component/CartList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Parallex from "./Component/Parallex";
import Banner from "./Component/Banner";
import Slider from "./Component/Slider";
import Footer from "./Component/Footer";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Cannvas shopper",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F44%2F63%2F4463e8a63334817a6dcd251c0a9520658347f955.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 890.00,
      color: "Black",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Hobbo bag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F4f%2F0e4f5e76f8fa4d243cafe2de73268a1fa2596052.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_hobobags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 2299.00,
      color: "Black",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      title: "Jackquard-weave handbag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe7%2F58%2Fe75858d94e4dfcfa3f2538c90ac37cedaecadd36.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_handbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 2299.00,
      color: "Pink/Patterned",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      title: "Juteblend shopper",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F71%2F63%2F7163a62ec427fe5c9090d26ffe1b8890787d0d43.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 2299.00,
      color: "Beige/Striped",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      title: "Smallshoulder bag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6d%2Fae%2F6daee0314775a018ca45e95db90329867b7f75ce.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 1399.00,
      color: "White",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      title: "Shoulder bag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F55%2F24%2F5524f529339d3ed483fd97c3edd6dad509453327.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 1499.00,
      color: "Light Blue",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 7,
      title: "Mini jacquard-weave bowling bag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2F2f%2F6f2f3bf4eebf178b062734ce50ce0743a7907c46.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 1799.00,
      color: "Pink",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },

    {
      id: 8,
      title: "Shimmering metallic mini shoulder bag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fc1%2F02c19c7648dde1cc1bb9c79114864f29b3ef9561.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 1299.00,
      color: "Silver-coloured",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 9,
      title: "Padded shopper",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd3%2Ffb%2Fd3fb7a7a44a07ab93f69dc03b667a5a7b64fb407.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shoppertotes%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 1049.00,
      color: "Light blue",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 10,
      title: "Rhinestone shoulder bag",
      image:
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2F47%2F4047e292b4b9bad98aec07301688e86c2f6f095c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
      price: 2799.00,
      color: "Silver-coloured",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);


  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); 

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  
  
  

  return (
    <>
    <Header count={cart.length} setShowCart={setShowCart}  />
   
    {
      showCart?
      
      <CartList cart={cart} />
      :
      <>
        <Banner/>
        <Slider/>
      <Product product={product} addToCart={addToCart} />
      
      </>
    }
    <Footer/>
      
     
    </>
  );
}

export default App;

