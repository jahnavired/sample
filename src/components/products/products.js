import React, { Component } from 'react'
import CoreProducts from '../../core/coreProducts/coreProducts'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import './style.css'

class Products extends CoreProducts {

  render() {
    return (
      <div>
        <h1>Products</h1>
        <Container>
          <Row className="mt-3">
            <Col lg={8} className="mx-auto category_sec">
              <Row className="pd3">
                <div className="card-container">
                {this.state.products.map((item, i) => (
                  <div>
                    <Col key={i} className={(item.section) + ' product_box'}>
                      <div className="category_box" key={i}>
                        

                          {item.disabled == 0 || item.disabled == null ?
                          <div className="card">
                           <Card  className="cards" style={{ width: '20rem'}}>
                           <Card.Img variant="top" src="holder.js/100px180" />
                           <Card.Body>
                             <Card.Title><h4>{item.product_name}</h4></Card.Title>
                             <Card.Text>
                               <h4>Price : {item.product_type_unit}{item.product_types}</h4>
                             </Card.Text>
                             <Button onClick={() => this.productDetails(item.slug)}>Details</Button>
                           </Card.Body>
                         </Card>
                         </div>
                              : null
                          }
                        
                      </div>
                    </Col>
                  </div>
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