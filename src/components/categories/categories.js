import React from 'react';
import { connect } from 'react-redux';
import { showProducts } from '../../store/categories';

import {Breadcrumbs, Link,Container,Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const Categories = (props) => {
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
                <Link key={i} color="inherit" onClick={() => props.showProducts(category.name)}>
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
 



//mapping state to props will subscribe the the change to the state and rerender :  
// props.categories.categories
// props.categories.activeCategory
const mapStateToProps = (state) => {
  return { categories: state.categories, products: state.products };
};
  

// Dispatches an action when one is clicked to “activate” it
const mapDispatchToProps = { showProducts };  // props.showProducts


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


