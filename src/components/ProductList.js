import React from 'react'

function ProductList ({ product, addToCart }) {

  return (
    <div className='row'>
        <div className='text-center'>
            <h3>Product List</h3>
            </div>
      {
        product.map((productItem, productIndex) => {
            return (
                <div className='card'>

                     <img src={productItem.img} width={150} />
                    <h5>{productItem.name}</h5>
                    <h4>${productItem.price}</h4>
                    <p>{productItem.id}</p>
                    <button className='btn btn-primary' onClick={() => addToCart(productItem)}>Add to Cart</button>
                </div>
            )
        })
      }
    </div>
  
  )
}

export default ProductList
