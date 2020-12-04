import MemberApi from "../apis/member"

export const state = () => ({
  id: "",
  email: "",
  errors: {
    text: "",
    sei_kana: "",
    mei_kana: "",
    birth_day: "",
    gender: "",
    tel: "",
    email: ""
  }
});

export const actions = {
  async addMemberInfo({commit}, params){
    commit("clearErrors")

    const data = await MemberApi.addMemberInfo(params);

    if(data.errors){
      if(data.errors.text) commit("setErrorText", data.errors.text)
      if(data.errors.sei_kana) commit("setErrorSeiKana", data.errors.sei_kana[0])
      if(data.errors.mei_kana) commit("setErrorMeiKana", data.errors.mei_kana[0])
      if(data.errors.birth_day) commit("setErrorBirthDay", data.errors.birth_day[0])
      if(data.errors.gender) commit("setErrorGender", data.errors.gender[0])
      if(data.errors.tel) commit("setErrorTel", data.errors.tel[0])
      return false
    }

    if(data.member){
      commit("setMemberID", data.member.id)
      commit("setMemberEmail", data.member.email)
      return true
    }

    return false

  },
  async sendConfirmMail({commit, state}){
    commit("clearErrors")

    const params = {
      id: state.id,
      email: state.email
    }

    const data = await MemberApi.sendConfirmMail(params);

    if(data.errors){
      if(data.errors.text) commit("setErrorText", data.errors.text)
      if(data.errors.email) commit("setErrorEmail", data.errors.email[0])
      return false
    }

    return true
  }
}

export const mutations = {
  setMemberID(state, id){
    state.id = id
  },
  setMemberEmail(state, email){
    state.email = email
  },
  clearErrors(state){
    state.errors.text = ""
    state.errors.sei_kana = ""
    state.errors.mei_kana = ""
    state.errors.birth_day = ""
    state.errors.gender = ""
    state.errors.tel = ""
    state.errors.email = ""
  },
  setErrorText(state, text){
    state.errors.text = text
  },
  setErrorSeiKana(state, sei_kana){
    state.errors.sei_kana = sei_kana
  },
  setErrorMeiKana(state, mei_kana){
    state.errors.mei_kana = mei_kana
  },
  setErrorBirthDay(state, birth_day){
    state.errors.birth_day = birth_day
  },
  setErrorGender(state, gender){
    state.errors.gender = gender
  },
  setErrorTel(state, tel){
    state.errors.tel = tel
  },
  setErrorEmail(state, email){
    state.errors.email = "メールアドレス" + email
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
