import React from 'react';
import CoreSubCategory from '../../core/corecategories/coreSubCategories'
import { Row, Col, Container } from 'react-bootstrap'



class SubCategory extends CoreSubCategory {


  render() {
    return (
      <div>
        <h3>This is SubCategories Page</h3>
        <h2>Hello</h2>
        <Container>
          <Row className="mt-3">
            <Col lg={8} className="mx-auto category_sec">
              <Row className="pd3">
                {this.state.subCategories.map((item, i) => (
                  <div>
                    <Col key={i} className={(item.section) + ' product_box'}>
                      <div className="category_box" key={i}>
                        <div>

                          {item.disabled == 0 || item.disabled == null ?
                            <h5
                              value="name"
                              style={{ color: (item.banner_text_color), left: '0px', textAlign: (item.banner_text_align) }}
                              className="category_label mb-0"
                            >
                              {item.subcategory_name}

                            </h5> : null
                          }
                          <button  onClick={() => this.products(item)}> View products </button>
                        </div>
                      </div>
                    </Col>
                  </div>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SubCategory










