import { axiosGet, axiosPost } from './requestHelpers'

export const checkCredential=async(formdata)=>{
	return await axiosPost("http://bhaskar.faberlounge.com/users/v1/login_v1/store",formdata)
}

export const checkOtp=async(formdata)=>{
	return await axiosPost("http://bhaskar.faberlounge.comusers/v1/send_otp_v1/store",formdata)
}

export const getCategories=async()=>{
  return await axiosGet("http://bhaskar.faberlounge.com/masters/v1/categories_v1") 
}

export const getSubCategories=async(categoriesSlug)=>{
  return await axiosGet("http://bhaskar.faberlounge.com/masters/v1/sub_categories_v1?where[fl_categories.slug]="+categoriesSlug)  
}

export const getProducts=async(query)=>{
  // debugger
  return await axiosGet(`http://bhaskar.faberlounge.com/products/v1/products_v1/index?where[fl_items.category_slug]=${query.p}&where[fl_items.sub_category_slug]=${query.subP}`);	  
}

export const GetProductDetails=async(productName)=>{
  return await axiosGet(`http://bhaskar.faberlounge.com/products/v1/products_v1/view/${productName}`)  
}












