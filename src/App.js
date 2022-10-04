import './App.css';
import {useState} from 'react';
import Navb from './components/Navb';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [product, setProduct] = useState([
    {
      id : "1",
      name: "Dell",
      price: 5245,
      img: "https://pcmaroc.com/1791-thickbox_default/dell-3500-i5-8go-256go-ssd-m2-nvme-156.jpg",
  },
  {
      id : "2",
      name: "Hp",
      price: 1645,
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07962816.png",
  },
  {
      id : "3",
      name: "mac",
      price: 1645,
      img: "https://www.superprof.fr/blog/wp-content/uploads/2018/06/modeles-mac-apple.jpg",
  },
  {
      id : "4",
      name: "Asus",
      price: 1245,
      img : "https://www.iris.ma/56159/ordinateur-portable-asus-vivobook-15-x515ja-br051t-90nb0sr1-m00670.jpg",
  },
  {
      id : "5",
      name: "Huawei",
      price: 945,
      img: "https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/h/u/huawei-matebook-x-pro-2021-gray-1.jpg",
  },
  {
      id: "6",
      name: "Sumsung",
      price: 1234,
      img: "https://asset.conrad.com/media10/isa/160267/c1/-/en/815696038PI00/image.jpg",
  },
  {
      id: "7",
      name: "Sumsung",
      price: 12534,
      img: "https://asset.conrad.com/media10/isa/160267/c1/-/en/815696038PI00/image.jpg",
  },
  {
      id : "8",
      name: "Huawei",
      price: 1945,
      img: "https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/h/u/huawei-matebook-x-pro-2021-gray-1.jpg",
  },
  {
      id: "9",
       name: "IPhone 10",
       price: 21000,
      img:"https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/iphone-x-final-300x300.png",
  },
  {
    id: "10",
    name: "IPhone 11",
    price: 22000,
    img:"https://d33wubrfki0l68.cloudfront.net/2a732c9e7c689e23ba066a60fd85a3977c0d1b3d/50595/images/apple-iphone-11.jpg",
    },
    {
        id: "11",
        name: "IPhone 12",
        price: 23000,
        img:"https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_hero_us_04202021_big.jpg.large.jpg",
        }, 
        {
          id: "12",
          name: "IPhone 14",
          price: 53000,
          img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907_Full-Bleed-Image.jpg.large.jpg",
        }
  ])
 

 const [cart, setCart] = useState([])
 const [showCart, setShowCart] = useState(false)

 const addToCart = (data) => {
   setCart([...cart, { ...data, quantity: 1}])
 }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
       < Navb  count={cart.length} 
     handleShow={handleShow}></Navb> 
    <div className='container'>
     
     {
        showCart ?
    <CartList cart={cart}></CartList>:
     <ProductList  product={product} addToCart={addToCart} > </ProductList>

     }

    </div>
    </div>


  );
}

export default App;
        