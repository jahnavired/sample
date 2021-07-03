import axios from 'axios';
import qs from 'qs';

export const axiosPost = async (url, data, stringify=true) => {
  console.log(url)
  var response='';
  let authToken = "";
  let hash = "";

  let config = {
    headers: {
      Authorization: "Basic Ymhhc2thcjoxMjM0NTY=",
      authToken: authToken,
      hash: "hash"
    }
  }
  if(stringify == true)
    data = qs.stringify(data);

  response = await axios.post(url, data, config).then(response => { 
    console.log(response)
    return response;
  })
  .catch(error => {
    console.log(error);
    return {data:{'status':'fail'}};
  });
  return response;
}


export const axiosGet=async(url)=> {
  const headers= {
    headers: {
      Authorization: "Basic Ymhhc2thcjoxMjM0NTY=",
      hash: "hash"
    }
  }
  return axios.get(url,headers).
  then((res) => {
    if (res.data.status == "success") {
      return res.data.data;
    }
  })
  .catch((error) => { console.log(error); });
}



