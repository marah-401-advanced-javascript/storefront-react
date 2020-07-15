import React from 'react';
import { connect } from 'react-redux';
import { handelCategory, handelProduct, getRemoteProduct, getRemoteData } from '../../store/actions';
import { useEffect } from 'react';

import {Breadcrumbs, Link,Container,Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const Categories = (props) => {

  useEffect(() => {
    props.getRemoteData();
    props.getRemoteProduct();
  });

  return (
    <>
      <CssBaseline />

      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cae3d3', height: '30vh' ,padding: '3vh' }} >
        
          <Typography variant="h4" gutterBottom>
        Categories:
          </Typography>

          <Breadcrumbs aria-label="breadcrumb" >
            {props.categories.categories.map((category,i) => {
              return (
                <Link key={i} color="inherit" onClick={() =>{
                  props.handelCategory(category.name);
                  props.handelProduct(category.name);
                }}>
                  {category.displayName}
                </Link>
              );
            })}
          </Breadcrumbs>

          <Typography variant="overline" display="block" gutterBottom>
        Active category : { props.categories.activeCategory}
          </Typography>
        
        </Typography>
      </Container>
    </>
  );
};
 

const mapStateToProps = (state) => {
  return { categories: state.categories, products: state.products };
};
  
const mapDispatchToProps = (dispatch) => ({
  handelCategory: () => dispatch(handelCategory()),
  handelProduct: (category) => dispatch(handelProduct(category)),
  getRemoteProduct: () => dispatch(getRemoteProduct()),
  getRemoteData: () => dispatch(getRemoteData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


