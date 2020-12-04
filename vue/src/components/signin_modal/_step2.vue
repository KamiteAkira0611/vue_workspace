<template>
  <div class="step step_2">

    <div class="body">
      <div class="fm fm_name">
        <label>氏名（カナ）</label>
        <div class="error">{{$store.state.member.errors.sei_kana}}</div>
        <div class="field">
          <input type="text" placeholder="スタピク" v-model="last_name">
          <input type="text" placeholder="ハナコ" v-model="first_name">
        </div>
      </div>

      <div class="fm fm_bthday">
        <label>生年月日</label>
        <div class="error">{{$store.state.member.errors.birth_day}}</div>
        <div class="field">
          <select v-model="year" class="year">
            <option v-for="n in 100" :value="String(2021 - n)" :key="n">{{ 2021 - n }}</option>
          </select>
          <span class="f_name">年</span>
          <select v-model="month" class="month">
            <option v-for="n in 12" :value="String(n)" :key="n">{{ n }}</option>
          </select>
          <span class="f_name">月</span>
          <select v-model="date" class="day">
            <option v-for="n in 31" :value="String(n)" :key="n">{{ n }}</option>
          </select>
          <span class="f_name">日</span>
        </div>
      </div>

      <div class="fm fm_phone">
        <label>電話番号</label>
        <div class="error">{{$store.state.member.errors.tel}}</div>
        <div class="field">
          <input type="text" v-model="phone" placeholder="ハイフンなしで11桁まで">
        </div>
      </div>

      <div class="fm fm_gender">
        <label>性別</label>
        <div class="error">{{$store.state.member.errors.gender}}</div>
        <div class="field">
          <button class="women" :class="{on: gender == '女性'}" @click="gender = '女性'">女性</button>
          <button class="men" :class="{on: gender == '男性'}" @click="gender = '男性'">男性</button>
        </div>
      </div>
    </div>

    <div class="ft_actions">
      <button class="back_btn" @click="$emit('prev')">戻る</button>
      <button class="next_btn" @click="save_member">
        <span v-show="!loading">OK</span>
        <i class="fa fa-refresh fa-spin" v-show="loading" aria-hidden="true"></i>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    token: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      year: "2000",
      month: "1",
      date: "1",
      gender: "",
      first_name: "",
      last_name: "",
      phone: "",
      errors: "",
      loading: false
    }
  },
  computed: {
    birth_day(){
      return this.year + "-" + this.month + "-" + this.date
    }
  },
  methods: {
    async save_member(){
      if (this.loading == true) return
      this.loading = true

      const params = {
        token: this.token,
        sei_kana: this.last_name,
        mei_kana: this.first_name,
        gender: this.gender,
        birth_day: this.birth_day,
        tel: this.phone
      }

      let is_saved = await this.$store.dispatch("member/addMemberInfo", params)
      this.loading = false
      if(is_saved){
        this.$emit('next')
      }
    },

    setSeed(){
      this.last_name = "カミテ"
      this.first_name = "アキラ"
      this.gender = "男性"
      this.year = "2001"
      this.date = "11"
      this.month = "6"
      this.phone = "08038054648"
    }
  },

  mounted() {
    // this.setSeed()
  },
}
</script>