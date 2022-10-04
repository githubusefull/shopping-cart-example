import {useState, useEffect} from 'react'

function CartList ({ cart }) {
  const [CART, setCART] = useState([])
  useEffect(() => {
    setCART (cart)
    
  }, [])
  return (
    <div class="row">
        <div className='text-center'>
            <h3>Cart</h3>
            </div>
 
        {
        CART?.map((cartItem, cartindex) => {
            return (

                <div className='card' >

           <img src={cartItem.img} width={150} />
                   {cartItem.name}

                  
                       <span>  
                      <button className='btn btn-primary m-2' 
                      onClick={() => {
                        const _CART = CART.map((item, index) => {
                            return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                        })
                        setCART(_CART)
                    }}
                      >+</button>
                       {cartItem.quantity}             
                      <button className='btn btn-primary m-2'
                       onClick={() => {
                        const _CART = CART.map((item, index) => {
                            return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                        })
                        setCART(_CART)
                    }}
                      >-</button>
                      </span>

                  
                   <h4>${cartItem.price * cartItem.quantity}</h4>

                    <p>{cartItem.id}</p>  
                </div>
               
          )
        })
      }
      <h4> Total : <span></span>
        {
          CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }
      </h4>
      </div>
      
     
     ) 
 }

export default CartList
