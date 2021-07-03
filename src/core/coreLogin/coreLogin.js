import React from 'react';
import { checkCredential, checkOtp }from '../../helpers/serviceHelper';

// import './styles.css'

class CoreLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      isOtpCheck:false,
			errors:[],
			message:"",
			showMessage:false,
			otpText:'Get OTP',
			otpSent:false,
			isOtpClick:false,
			isLoaded:true,
			isCommingFromCheckout:0,
			show:false,
			isAccessTokenLogin: '',
    };

  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    var formdata=[]
    formdata['login[username]'] = username;
    formdata['password'] = password;
    const res = await checkCredential(formdata)
    console.log(`loginDetails`, res);
    if (username && password) {
      this.props.login(username, password);
    }
  }
}

// checkOtp = async(e)=>{
//   console.log('ss')
//   var formdata=[];
//   formdata['send_otp[username]'] = this.state.username;
//   var credentials =await checkOtp(formdata);
//   console.log(`credentials`, credentials)
//   // this.setState({isOtpCheck:true});
//   // if(credentials.data.status==='success'){
//   //   this.setState({otpText:'Resend OTP',otpSent:true})
//   // }
//   // else{
//   //   this.setState({error:credentials.data.errors})
//   // }
// }


export default CoreLogin;