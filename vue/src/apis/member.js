import axios from '../plugins/axios';

export default {
  addMemberInfo(params){
    return axios.post('http://localhost/api/v1/members/add_info', {params: params})
  }
}
