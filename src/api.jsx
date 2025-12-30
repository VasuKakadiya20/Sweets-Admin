import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("https://sweets-backend.onrender.com" + url);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};


export const postData = async (url, fromdata) => {
  try {
    const { data } = await axios.post("https://sweets-backend.onrender.com" + url, fromdata);
    return data;
  } catch (error) {
    console.error("POST Error:", error.response?.data || error.message);
    throw error;
  }
};


export const Deletedata = async (url) => {
  try{
    const { data } = await axios.delete(`https://sweets-backend.onrender.com${url}`);
    return data
  }catch (error) {
    console.error ("Delete Error:-", error.response?.data || error.message);
    throw error
  }
}


export const updatedata = async (url,fromdata)=>{
  try{
    const {data} = await axios.put(`https://sweets-backend.onrender.com${url}`, fromdata)
    return data
  }catch(error){
    console.error ("Update data:-", error.response?.data || error.message)
  }
}