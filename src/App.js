import React from "react"
import { createRoot } from 'react-dom/client';
import { useEffect, useState } from "react";
import "./App.css"



const root = createRoot(document.getElementById("root"))

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedSection products={products} />
      <MainFeatures products={products} />
      <FeaturedSection products={products2} />
    </div>
  );
};


const NavBar = () => {
  useEffect(() => {
    function setCartContents() {
      const cartListContainer = document.querySelector('#cart-list');
      cartListContainer.innerHTML = "";

      const cartElements = cartList.map(item => {
        const des = document.createElement('div');
        des.classList.add("cart-item-des");
        des.textContent = `${item.name} - ${item.price}`;

        const x = document.createElement('button');
        x.classList.add("cart-item-x");
        x.innerHTML = "X";

        const li = document.createElement('li');
        li.classList.add("cart-item")
        li.appendChild(des)
        li.appendChild(x)

        x.addEventListener("click", () => {
          cartList.splice(item.id - 1, 1);
          cartList.forEach(element => {
            if(element.id > item.id) {
              element.id -= 1;
            }
          })
          setCartContents();
        }) 
        return li;
      })
    
      cartElements.forEach(element => {
      cartListContainer.appendChild(element);
    });

    if(cartListContainer.childElementCount > 0) {
      const cart = document.getElementById("cart");
      cart.innerHTML = cartListContainer.childElementCount;
    } else cart.innerHTML = ""

  } setCartContents();
  }, [])

  const handleItemClick = () => {
    root.render(<App />);
  };

  const handleCartClick = () => {
    const cartDropdown = document.getElementById("cart-dropdown");
    if(cartDropdown.style.display != "flex") {
      cartDropdown.style.display = "flex";
    } else cartDropdown.style.display = "none"
  }
    return (
       <nav id="nav-wrapper">

        <div id="nav-logo" onClick={() => handleItemClick()}></div>

        <div id="cart" onClick={() => handleCartClick()}></div>
        <div id="cart-dropdown">
          <ul id="cart-list"></ul>
          <a href="checkout.html"><button id="cart-button">Checkout</button></a>
        </div>

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

const FeaturedSection = (props) => {
  const products = props.products
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function populateSection() {
      setItems(products)
    }
    populateSection();
  }, []);

  const handleItemClick = (item) => {
    root.render(<IIP info={item} />);
  };

  return (
    <section id="featured-section-wrapper">
      {items.map((item) => (
        <div
          key={item.id}
          className="featured-item"
          onClick={() => handleItemClick(item)}
        >
          <div
            className="featured-item-image"
            id={`featured-image-${item.id}`}
          ></div>
          <div className="featured-item-description">
            <div className="featured-item-name">{item.name}</div>
            <div className="featured-item-price">{item.price}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

const MainFeatures = (props) => {
  const handleLegacyButtonClick = () => {
    root.render(<IIP info={props.products[2]}/>)
  }
  const handleReinaButtonClick = () => {
    root.render(<IIP info={props.products[1]}/>)
  }
  return(
    <section id="main-featured-section-wrapper">

      <div id="main-featured-1" className="main-featured-item">
        <div className="main-featured-button" onClick={() => handleLegacyButtonClick()}>View Legacy Traveler</div>
      </div>
      <div id="main-featured-2" className="main-featured-item">
        <div className="main-featured-button" onClick={() => handleReinaButtonClick()}>View Reina</div>
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


const IIP = (props) => {
  React.useEffect(() => {
  })
  return (
      <div>
          <NavBar />
          <IIPMainContent info={props.info} />
      </div>
  );
}

const IIPMainContent = (props) => {
  const { info } = props;
  
  const [id, setId] = useState("");
  const [imageId, setImageId] = useState("");
  const [itemId, setItemId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [des, setDes] = useState("");

  useEffect(() => {
    async function populateSection() {
      setId(cartList.length + 1)
      setImageId(info.imageId)
      setItemId(info.itemId);
      setName(info.name);
      setPrice(info.price);
      setDes(info.description);
    }
    populateSection();
  }, [info]);
  
  /* Event Handler for Cart Add */
  function setCartContents () {
      const cartListContainer = document.querySelector('#cart-list');
      cartListContainer.innerHTML = "";

      const cartElements = cartList.map(item => {
        const des = document.createElement('div');
        des.classList.add("cart-item-des");

        const x = document.createElement('button');
        x.classList.add("cart-item-x");
        x.innerHTML = "X";

        des.textContent = `${item.name} - ${item.price}`;

        const li = document.createElement('li');
        li.classList.add("cart-item")
        li.appendChild(des)
        li.appendChild(x)

        x.addEventListener("click", () => {
          console.log("triggered")
          cartList.splice(item.id - 1, 1);
          cartList.forEach(element => {
            if(element.id > item.id) {
              element.id -= 1;
            }
          })
          setCartContents()
        }) 

        return li;
      });

      cartElements.forEach(element => {
      cartListContainer.appendChild(element);
    });
    if(cartListContainer.childElementCount > 0) {
      const cart = document.getElementById("cart");
      cart.innerHTML = cartListContainer.childElementCount;
    } else cart.innerHTML = "";
  };

  const handleButtonClick = () => {
    const newObject = {id: id, itemId: itemId, name: name, price: price};
    cartList.push(newObject);
    setCartContents()
  }

  setCartContents()

  return (
    <section id="IIP-main-content-wrapper">
      <div id={`featured-image-${imageId}`} className="IIP-image"></div>
      <div id="IIP-info">
        <div>
          <h1 id="IIP-name">{name}</h1>
          <h3 id="IIP-price">{price}</h3>
        </div>
        <p id="IIP-description">{des}</p>
        <button id="IIP-button" onClick={() => handleButtonClick()}>Add To Cart | {price}</button>
      </div>
    </section>
  );
};




root.render (
  <App />
)

const cartList = [];

const products = [
  {
    id: 1,
    imageId: 1,
    name: "CORONADA | 36MM",
    price: "$198",
    imgUrl: "/src/images/featured-image-1.jpg",
    description: "California flowers. Pacific sunsets. We pulled inspo from our surrounding nature for the new Petal Blush colorway, a subtle and silky new addition to our ceramic watches. And it’s a perfect match for our new Fog Grey ceramic colorway."
  },
  {
    id: 2,
    imageId: 2,
    name: "REINA | 30MM",
    price: "$148",
    imgUrl: "/src/images/featured-image-2.jpg",
    description: "Italian tanned leather straps. Buckle shaped cardinal markers. A classic look that outlasts trends. The Reina pulls inspiration from the longstanding fashion design elements we admire most. Featuring a double wrap strap, a nod to the two-watch look"
  },
  {
    id: 3,
    imageId: 3,
    name: "LEGACY TRAVELER | 42MM",
    price: "$178",
    imgUrl: "/src/images/featured-image-3.jpg",
    description: "The travel-ready sidekick of our best selling Legacy dress family. This dual timezone piece balances its functional dial with California clean design. Featuring our special edition Cloudbreak colorway, inspired by sunny coastal golds and foggy ocean greys."
  },
  {
    id: 4,
    imageId: 4,
    name: "BLACKTOP II SOLAR | 47MM",
    price: "$216",
    imgUrl: "/src/images/featured-image-4.jpg",
    description: "The Blacktop II Solar revamps MVMT’s favorite retro chronograph with responsible materials and a renewable energy source. Its movement is powered by the sun. Its durable case is made from 100% ocean plastic. And its animal-free straps are as comfy and good-looking as leather. Its sleek look is inspired by modern trekking gear, with a red power reserve, compass rose layout and desert sand colorway."
  }
]

const products2 = [
  {
    id: 5,
    imageId: 5,
    name: "ELEMENT | 43MM",
    price: "$171",
    imgUrl: "/src/images/featured-image-5.jpg",
    description: "Dress in rare form. The Element Ceramic watch is designed with the smooth, highly resistant sheen of engineering ceramic, featuring an original gloss black tone."
  },
  {
    id: 6,
    imageId: 6,
    name: "CHRONO CERAMIC | 45MM",
    price: "$298",
    imgUrl: "/src/images/featured-image-6.jpg",
    description: "Take a trip up the PCH to the Bay, and you’ll see this vibey shade of grey hangin’ around. The Fog Grey colorway brings a smooth sky grey tone to our brand-favorite ceramics line. And it’s a perfect match for our new Petal Blush ceramic colorway."
  },
  {
    id: 7,
    imageId: 7,
    name: "AIRHAWK | 42MM",
    price: "$228",
    imgUrl: "/src/images/featured-image-7.jpg",
    description: "The Airhawk transforms pioneering aircraft design into watch form. Its clean dial reads easy like a proper pilot watch should and features multi-function sub dials for some extra tactically in your timekeeping experience. The Honey Smoke colorway balances cool stainless steel with pale gold accents and pops of MVMT blue."
  },
  {
    id: 8,
    imageId: 8,
    name: "FIELD | 41MM",
    price: "$118",
    imgUrl: "/src/images/featured-image-8.jpg",
    description: "Have a field day. Inspired by the outdoors and the gear to get you there, the Field sports our first fixed number dial and a water resistant 41mm case. The Everest Blue features a rich all-blue colorway."
  }
]