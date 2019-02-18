import axios from 'axios';

const baseURL = 'https://test2-206614.firebaseio.com';

export default axios.create({
  baseURL,
});
