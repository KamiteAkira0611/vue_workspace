export default {
  addMemberInfo(){
    //success
    return {"member":{"id":259,"email":"kamiteakira@gmail.com"},"errors":null}

    // valid error
    // return {"member":null,"errors":{"gender":["を入力してください"],"name":["を入力してください"],"birth_day":["を入力してください"],"sei_kana":["をカタカナで入力してください"],"mei_kana":["をカタカナで入力してください"],"tel":["は正しく入力してください"]}}

    // 401error
    // return {"member":null,"errors":{"text":"'hoge' is not a valid gender"}}
  },
  sendConfirmMail(params){
    // return axios.post('/api/v1/members/send_confirm_mail', params)
    console.log(params)

    //success
    // return {"errors":null}

    // valid error
    // return {"errors":{"email":["は不正な値です"]}}

    // 401error
    return {"errors":{"text":"member not found"}}
  }
}
