import React from 'react'
import CoreProductDetails from '../../core/coreProducts/coreProductsDetails'
import { Row, Col, Container } from 'react-bootstrap'
import './style.css'

class Products extends CoreProductDetails {

  render() {
    return (
      <div>
        <h1>Products</h1>
        <h2>Hai friends</h2>
        <Container>
          <Row className="mt-3">
            <Col lg={8} className="mx-auto category_sec">
              <Row className="pd3">
     
                <div>
                <h3>Name :</h3>{this.state.productsDetails.name}
                <h3>Price :</h3>{this.state.productsDetails.product_type_field_unit}{this.state.productsDetails.product_type_field_value}
                <h3>Description :</h3>{this.state.productsDetails.description}
                <h3>Key Features :</h3>
                {(this.state.keyFeatures.map((item,i) =>
                <li key={i}>{item}</li>
                ))}



                
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}


export default Products