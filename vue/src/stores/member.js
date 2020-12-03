import MemberApi from "../apis/member"

export const state = () => ({

});

export const actions = {
  async addMemberInfo({commit, state}, params){
    console.log(params)
    const {data} = await MemberApi.addMemberInfo(params);
    console.log(commit, state, data)
  }
}

export const mutations = {
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
