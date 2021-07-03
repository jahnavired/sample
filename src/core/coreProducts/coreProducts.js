import React from 'react';
import {getProducts}  from '../../helpers/serviceHelper'


class CoreProducts extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    products: [],
  }
}

componentDidMount = () => {
  this.getProducts();
}

getProducts = async () => {
  var response = await getProducts(this.props.match.params)
  this.setState({products: response });
}


productDetails = (productName, i) => {
  this.props.history.push(`/product/view/${productName}`)
}
}

export default CoreProducts