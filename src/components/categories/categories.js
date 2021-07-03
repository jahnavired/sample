import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/index';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CoreCategory from '../../core/corecategories/coreCategories'
import { Row, Col, Container } from 'react-bootstrap'


import './styles.css'

class Categories extends CoreCategory {

  
  render() {
    const { user } = this.state
    return (
      <div>
        <div>
          <div style={{ float: 'right' }}>
            <button><Link to="/login">Logout</Link> </button>
          </div>
          {user && <h2 className="title">Welcome {user.firstName ? user.firstName : ''}... Your username is <span>{user.username ? user.username : ''}</span></h2>}
        </div>
        <br />
        <br />
        <Container>
          <h3>This is Category Page</h3>
          <Row className="mt-3">
            <Col lg={8} className="mx-auto category_sec">
              <Row className="pd3">
                {this.state.categories.map((item, i) => (
                  // console.log(item)
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
                              {/* {item.id} */}
                              {item.name}   
                             
                              <button className="btn btn-link" onClick={() => this.subCategories(item)}> View </button>
                            </h5> : null
                          }
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

const mapStateToProps = (state) => {
  return {
    loggingIn: state.authentication
  }
}

const actionCreators = {
  logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(Categories);