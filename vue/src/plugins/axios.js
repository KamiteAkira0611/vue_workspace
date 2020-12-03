import axios from 'axios';

let user_token_obj = document.querySelector('meta[name="user-token"]')
let user_token = user_token_obj ? user_token_obj.getAttribute('content') : ""

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'USER-TOKEN' : user_token
};

export default axios;
