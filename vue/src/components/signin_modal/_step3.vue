<template>
  <div class="step step_3">

    <div class="body">
      <div class="txt">メールアドレスの承認を行います<br>ご登録のメールアドレスを確認し<br>OKを押してください</div>
      <input type="text" class="email_field" v-model="email">
      <div class="error">{{$store.state.member.errors.email}}</div>
    </div>

    <div class="ft_actions">
      <button class="back_btn" @click="$emit('prev')">戻る</button>
      <button class="next_btn" @click="sendConfirmMail">
        <span v-show="!loading">OK</span>
        <i class="fa fa-refresh fa-spin" v-show="loading" aria-hidden="true"></i>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    email: {
      get() {
        return this.$store.state.member.email
      },
      set(value) {
        this.$store.commit('member/setMemberEmail', value)
      }
    }
  },
  methods: {
    async sendConfirmMail(){
      if (this.loading == true) return
      this.loading = true

      let is_sended = await this.$store.dispatch("member/sendConfirmMail")
      this.loading = false
      if(is_sended){
        this.$emit('next')
      }
    }
  },
}
</script>