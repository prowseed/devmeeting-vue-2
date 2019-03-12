//1/ 1. We will use axios for API calls
import axios from 'axios';

//1/ 2. Let's setup API URL
const baseURL = 'https://test2-206614.firebaseio.com';

//3/ 3. and export HttpService
export default axios.create({
  baseURL,
});
