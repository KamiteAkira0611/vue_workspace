<template>
  <div class="step_2">

    <div class="body">
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

    <div class="ft_actions">
      <button class="next" @click="$emit('next')">OK</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      year: Number,
      month: Number,
      day: Number,
      first_name: "",
      last_name: "",
      phone: "",
    }
  },
}
</script>