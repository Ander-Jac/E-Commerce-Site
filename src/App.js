import React, { createElement } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import "./App.css"

const root = createRoot(document.getElementById("root"))

class App extends React.Component {
    render() {
      return (
        <div>
            <NavBar/>
            <HeroSection />
            <FeaturedSection />
            <MainFeatures />
            <FeaturedSection2 />
            <Footer />
        </div>
      );
    }
  };

class IIP extends React.Component {
  render() {
    return (
      <div>
          <NavBar/>
          <Footer />
      </div>
    );
  }
};


const NavBar = () => {
    return (
       <nav id="nav-wrapper">

        <div id="nav-logo"></div>

        <ul id="nav-list">
          <li className="nav-list-item">Shop</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>

      </nav>
    )
};

const HeroSection = () => {
  return (
    <section id="hero-section-wrapper">

      <div id="hero-image"></div>
      <div id="hero-header"></div>

    </section>
  )
}

const FeaturedSection = () => {

  React.useEffect(() => {
    async function populateSection() {
      let counter = 0;
      products.forEach(item => {
        const featuredWrapper = document.getElementById("featured-section-wrapper")

        /* Creating Elements */
        const box = document.createElement("div");
        box.classList.add("featured-item")

        const image = document.createElement("div");
        image.classList.add("featured-item-image");
        image.setAttribute("id", "featured-image-" + item.id)

        const description = document.createElement("div");
        description.classList.add("featured-item-description");

        const name = document.createElement("div");
        name.classList.add("featured-item-name");
        name.innerHTML = products[counter].name

        const price = document.createElement("div");
        price.classList.add("featured-item-price");
        price.innerHTML = products[counter].price

        /* Appending Elements */
        description.append(name)
        description.append(price)

        box.append(image)
        box.append(description)
        console.log(box)

        featuredWrapper.append(box)
        console.log(featuredWrapper)
        counter++;
      });
    }
    populateSection()
  })
  return(
    <section id="featured-section-wrapper"></section>
  )
}

const MainFeatures = () => {
  return(
    <section id="main-featured-section-wrapper">

      <div id="main-featured-1" className="main-featured-item">
        <div className="main-featured-button">View Legacy Traveler</div>
      </div>
      <div id="main-featured-2" className="main-featured-item">
        <div className="main-featured-button">View Reina</div>
      </div>

    </section>
  )
}

const FeaturedSection2 = () => {
  return(
    <section id="featured-section-wrapper">

      <div id="" className="featured-item">
        <div id="featured2-image-1" className="featured-item-image"></div>
        <div className="featured-item-description">
          <div className="featured-item-name">ELEMENT | 43MM</div>
          <div className="featured-item-price">$171</div>
        </div>
      </div>
      <div id="" className="featured-item">
        <div id="featured2-image-2" className="featured-item-image"></div>
        <div className="featured-item-description">
          <div className="featured-item-name">CHRONO CERAMIC | 45MM</div>
          <div className="featured-item-price">$298</div>
        </div>
      </div>
      <div id="" className="featured-item">
        <div id="featured2-image-3" className="featured-item-image"></div>
        <div className="featured-item-description">
          <div className="featured-item-name">AIRHAWK | 42MM</div>
          <div className="featured-item-price">$228</div>
        </div>
      </div>
      <div id="" className="featured-item">
        <div id="featured2-image-4" className="featured-item-image"></div>
        <div className="featured-item-description">
          <div className="featured-item-name">FIELD | 41MM</div>
          <div className="featured-item-price">$118</div>
        </div>
      </div>

    </section>
  )
}

const Footer = () => {
  return (
    <footer id="footer-wrapper">

      <ul id="footer-nav-list">
          <li className="nav-list-item">Shop</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
      </ul>

    </footer>
  )
}

root.render (
  <App />
)

const products = [
  {
    id: 1,
    name: "CORONADA | 36MM",
    price: "$198",
    imgUrl: "/src/images/featured-image-1.jpg",
    description: "California flowers. Pacific sunsets. We pulled inspo from our surrounding nature for the new Petal Blush colorway, a subtle and silky new addition to our ceramic watches. And it’s a perfect match for our new Fog Grey ceramic colorway."
  },
  {
    id: 2,
    name: "REINA | 30MM",
    price: "$148",
    imgUrl: "/src/images/featured-image-2.jpg",
    description: "Italian tanned leather straps. Buckle shaped cardinal markers. A classic look that outlasts trends. The Reina pulls inspiration from the longstanding fashion design elements we admire most. Featuring a double wrap strap, a nod to the two-watch look"
  },
  {
    id: 3,
    name: "LEGACY TRAVELER | 42MM",
    price: "$178",
    imgUrl: "/src/images/featured-image-3.jpg",
    description: "The travel-ready sidekick of our best selling Legacy dress family. This dual timezone piece balances its functional dial with California clean design. Featuring our special edition Cloudbreak colorway, inspired by sunny coastal golds and foggy ocean greys."
  },
  {
    id: 4,
    name: "BLACKTOP II SOLAR | 47MM",
    price: "$216",
    imgUrl: "/src/images/featured-image-4.jpg",
    description: "The Blacktop II Solar revamps MVMT’s favorite retro chronograph with responsible materials and a renewable energy source. Its movement is powered by the sun. Its durable case is made from 100% ocean plastic. And its animal-free straps are as comfy and good-looking as leather. Its sleek look is inspired by modern trekking gear, with a red power reserve, compass rose layout and desert sand colorway."
  }
]

const products2 = [
  {
  id: 5,
    name: "ELEMENT | 43MM",
    price: "$171",
    imgUrl: "/src/images/featured2-image-1.jpg",
    description: "Dress in rare form. The Element Ceramic watch is designed with the smooth, highly resistant sheen of engineering ceramic, featuring an original gloss black tone."
  },
  {
    id: 6,
    name: "CHRONO CERAMIC | 45MM",
    price: "$298",
    imgUrl: "/src/images/featured2-image-2.jpg",
    description: "Take a trip up the PCH to the Bay, and you’ll see this vibey shade of grey hangin’ around. The Fog Grey colorway brings a smooth sky grey tone to our brand-favorite ceramics line. And it’s a perfect match for our new Petal Blush ceramic colorway."
  },
  {
    id: 7,
    name: "AIRHAWK | 42MM",
    price: "$228",
    imgUrl: "/src/images/featured2-image-3.jpg",
    description: "The Airhawk transforms pioneering aircraft design into watch form. Its clean dial reads easy like a proper pilot watch should and features multi-function sub dials for some extra tactically in your timekeeping experience. The Honey Smoke colorway balances cool stainless steel with pale gold accents and pops of MVMT blue."
  },
  {
    id: 8,
    name: "FIELD | 41MM",
    price: "$118",
    imgUrl: "/src/images/featured2-image-4.jpg",
    description: "Have a field day. Inspired by the outdoors and the gear to get you there, the Field sports our first fixed number dial and a water resistant 41mm case. The Everest Blue features a rich all-blue colorway."
  }
]