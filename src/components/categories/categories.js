import React from 'react';
import { connect } from 'react-redux';
import { showAction } from '../../store/actions';

const Categories = (props) => {
  return (
    <section>
      <h3>Categories:</h3>
      <ul>
        {props.actions.categories.map((category , i) => {
          return (
            <li key={i} onClick={() => props.showAction(category.name) }>
              {category.displayName}
            </li>
          );
        })}
      </ul>

      <p>Active category : { props.actions.activeCategory}</p>

    </section>
  );
};
  
const mapStateToProps = (state) => {
  return { actions: state.actions };
};
  // props.actions.categories
  // props.actions.activeCategory


const mapDispatchToProps = { showAction };  // props.categories
/*categoriesAction
  function mapDispatchToProps(dispatch){
    return(
      {
        categories:()=>{dispatch(categories())},
         products:()=>{dispatch(products())}
      }
    )
  }
  */

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  


