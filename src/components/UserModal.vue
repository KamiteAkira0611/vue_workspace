<template>
  <div id="layout_user_modal">
    <p @click="open = !open">{{open}}</p>
    <div class="mask" :class="{on: open}"></div>
    <div class="reg_modal" :class="{on: open}">
      <div class="top_al">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        <h3>まだ予約は完了してません</h3>
      </div>

      <template v-if="step == 1">
        <div class="step_1">
          <p>予約に必要な会員情報が不足しています<br>OKボタンを押してご登録ください</p>
        </div>
      </template>

      <template v-if="step == 2">
        <div class="step_2">
          <div class="fm fm_name">
            <label>氏名（カナ）</label>
            <div class="field">
              <input type="text" placeholder="スタピク" v-model="last_name">
              <input type="text" placeholder="ハナコ" v-model="first_name">
            </div>
          </div>
          <div class="fm fm_bthday">
            <label>生年月日</label>
            <div class="field">
              <select v-model="year" class="year">
                <option v-for="n in 50" :value="n + 1980" :key="n">{{ n + 1980 }}</option>
              </select>
              <span class="f_name">年</span>
              <select v-model="month" class="month">
                <option v-for="n in 12" :value="n" :key="n">{{ n }}</option>
              </select>
              <span class="f_name">月</span>
              <select v-model="day" class="day">
                <option v-for="n in 31" :value="n" :key="n">{{ n }}</option>
              </select>
              <span class="f_name">日</span>
            </div>
          </div>
          <div class="fm fm_phone">
            <label>電話番号</label>
            <div class="field">
              <input type="text" placeholder="ハイフンなしで11桁まで">
            </div>
          </div>
        </div>
      </template>

      <template v-if="step == 3">
        <div class="step_3">
          <p>予約に必要な会員情報が不足しています<br>OKボタンを押してご登録ください</p>
        </div>
      </template>

      <template v-if="step == 4">
        <div class="step_4">
          <p>予約に必要な会員情報が不足しています<br>OKボタンを押してご登録ください</p>
        </div>
      </template>

      <div class="ft_actions">
        <button class="back" @click="prevStep" v-if="step == 3 || step == 4">戻る</button>
        <button class="next" @click="nextStep">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      step: 2,
      year: Number,
      month: Number,
      day: Number,
      first_name: "",
      last_name: "",
      phone: "",
    }
  },
  methods: {
    nextStep(){
      if(this.step >= 4) return
      this.step += 1
    },
    prevStep(){
      if(this.step <= 1) return
      this.step -= 1
    }

  },
}
</script>