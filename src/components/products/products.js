import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/products';
import { getProductsData ,deleteProduct} from '../../store/actions.js';
import { useEffect } from 'react';
import Cart from './cart';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CssBaseline,Container,Button,AppBar,Toolbar} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:30,
    
  },
  media: {
    height: 140,

  },
});



const Products = (props) => {


  const fetchData = () =>{
    props.get();
  };

  const clickHandler=(product)=>{
    props.addToCart(product);
    if(product.inStock===1){
      props.delete(product);
    }
  };
  
  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cae3d3' ,padding: '3vh' , marginTop:'1vh'}} >
          <Typography variant="h4" gutterBottom>Products:</Typography>
    
          {props.products.results
            .map((product,i) => {

              return (
                <Card key={i} className={classes.root}  >
                  <CardActionArea>
                    <CardMedia className={classes.media}
                      image= {product.image}
                      title={product.name} />
                    <CardContent>

                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.price} $
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Description: {product.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Category: {product.category}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        In Stock: {product.inStock}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Inventory Count: {product.inventory_count}
                      </Typography>

                      <Button variant="contained" color="primary" style={{ width: 100 + '%' }}
                        onClick={() => clickHandler(product) }>ADD TO CART</Button>
          
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  </CardActions>
                </Card>
              );

            })}
        </Typography>
      </Container>


      <aside >
        <Cart />
      </aside>

    </>
  );
};


// we can do this here instead of filtering the products in the store 
//////////////////////////////////////////////////////////////////////    
// props.products.map((product) => (
//     product.category === props.items.activeCategory ?
//          return(......)
//          :
//          null;
//////////////////////////////////////////////////////////////////////
//props.products.filter(allProducts => allProducts.category === props.categories.activeCategory )
 

const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart };
};
 
const mapDispatchToProps = (dispatch)=>({
  addToCart: (product)=> dispatch(addToCart(product)),
  get: ()=> dispatch(getProductsData()),
  delete: (product)=> dispatch(deleteProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

