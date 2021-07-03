import React from 'react';
import {getSubCategories}  from '../../helpers/serviceHelper'

class CoreSubCategory extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    subCategories: [],
  }
}

componentDidMount = () => {
  this.getSubCategories();
}

getSubCategories = async () => {
  var response = await getSubCategories(this.props.match.params.cat)
  this.setState({subCategories: response }); 
}

products = (subCategoriesSlug, i) => {
  this.props.history.push(`/product/${subCategoriesSlug.category_name}/${subCategoriesSlug.subcategory_name}`)  
}
}

export default CoreSubCategory