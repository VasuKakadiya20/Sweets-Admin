import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:4000" + url);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};


export const postData = async (url, fromdata) => {
  try {
    const { data } = await axios.post("http://localhost:4000" + url, fromdata);
    return data;
  } catch (error) {
    console.error("POST Error:", error.response?.data || error.message);
    throw error;
  }
};


export const Deletedata = async (url) => {
  try{
    const { data } = await axios.delete(`http://localhost:4000${url}`);
    return data
  }catch (error) {
    console.error ("Delete Error:-", error.response?.data || error.message);
    throw error
  }
}


export const updatedata = async (url,fromdata)=>{
  try{
    const {data} = await axios.put(`http://localhost:4000${url}`, fromdata)
    return data
  }catch(error){
    console.error ("Update data:-", error.response?.data || error.message)
  }
}