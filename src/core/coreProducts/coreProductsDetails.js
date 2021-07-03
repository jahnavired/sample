import React from 'react';
import {GetProductDetails}  from '../../helpers/serviceHelper'


class CoreProductDetails extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    productsDetails: {},
    keyFeatures: []
  }
}

componentDidMount = () => {
  this.GetProductDetails();
}

GetProductDetails = async () => {
  var response = await GetProductDetails(this.props.match.params.p)
  this.setState({productsDetails: response, keyFeatures: response.key_features });
  }
}

export default CoreProductDetails