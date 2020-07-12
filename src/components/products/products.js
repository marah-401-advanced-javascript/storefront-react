import React from 'react';
import { connect } from 'react-redux';


const Products = (props) => {

  console.log('props.actions.products:', props.actions.products);
  console.log('props.actions.activeCategory:', props.actions.activeCategory);
    
  return (
    <>
      <h3>Products:</h3>

      <div >
        {props.actions.products.filter(allProducts => allProducts.category === props.actions.activeCategory )
          .map((product,i) => {
    
            return (
              <div key={i}>
                <h3>Product Name : {product.name}</h3>
                <img src={`${product.image}`} alt='img' />
                <p>Product Category : {product.category}</p>
                <p>In Stock : {product.inStock}</p>
                <p>Price : {product.price}</p>
                <p>description : {product.description}</p>
                <p>inventory count : {product.inventory_count}</p>
              </div>
            );

          })}
      </div>
    </>
  );
};
    
// props.items.products.map((product) => (
//     product.category === props.items.activeCategory ?
//          return(......)
//          :
//          null;
    
    
const mapStateToProps = (state) => {
  return { actions: state.actions };
};
    

export default connect(mapStateToProps)(Products);