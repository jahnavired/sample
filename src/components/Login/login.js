import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CoreLogin from '../../core/coreLogin/coreLogin';
import {checkOtp} from '../../helpers/serviceHelper'
import { userActions } from '../../actions/index';

import './styles.css'

class LoginPage extends CoreLogin {


  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="login-cont">
        {this.props.alert.message && <div className="">*</div>}
        <div className="align-middle">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
              <button className="text-underline float-right" style={{fontSize:'0.95rem'}} onClick={()=>this.checkOtp()}>{this.state.otpText}</button>	

              {submitted && !username &&
                <div className="help-block">Username is required</div>
                
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
              <Link to="/register" className="btn btn-link">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loggingIn: state.authentication,
    alert: state.alert
  }
}

const actionCreators = {
  login: userActions.login,
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };