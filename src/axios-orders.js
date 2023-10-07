import axios from "axios";

const instance = axios.create({
   baseURL: 'https://react-redux-shopping-fba72-default-rtdb.firebaseio.com/' 
})

export default instance