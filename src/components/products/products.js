import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CssBaseline,Container} from '@material-ui/core';

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

  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cae3d3' ,padding: '3vh' , marginTop:'1vh'}} >
          <Typography variant="h4" gutterBottom>
 Products:
          </Typography>
    
      

      
          {props.actions.products.filter(allProducts => allProducts.category === props.actions.activeCategory )
            .map((product,i) => {
    
              return (
                <div display="flex" justifyContent="center"alignContent="center"> 
                  <Card key={i} className={classes.root}  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image= {product.image}
                        title={product.name}
                      />
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
          
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    </CardActions>
                  </Card>
                </div>
              
              );

            })}
        </Typography>
      </Container>
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

