<template>
  <div id="layout_user_modal">
    <p @click="open = !open">Click</p>
    <div class="mask" :class="{on: open}"></div>
    <div class="reg_modal" :class="{on: open}">
      <div class="top_al">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        <h3>まだ予約は完了してません</h3>
      </div>


      <step1
        v-if="step == 1"
        @toggle="toggleOpen"
        @next="nextStep"
      ></step1>

      <step2
        v-if="step == 2"
        @prev="prevStep"
        @next="nextStep"
      ></step2>

      <step3
        v-if="step == 3"
        @next="nextStep"
        @prev="prevStep"
      ></step3>

      <step4
        v-if="step == 4"
        @next="nextStep"
        @prev="prevStep"
      ></step4>

    </div>
  </div>
</template>

<script>
import Step1 from './_step1.vue'
import Step2 from './_step2.vue'
import Step3 from './_step3.vue'
import Step4 from './_step4.vue'

export default {
  data() {
    return {
      open: false,
      step: 1,
    }
  },
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
  },
  methods: {
    nextStep(){
      if(this.step >= 4) return
      this.step += 1
    },
    prevStep(){
      if(this.step <= 1) return
      this.step -= 1
    },
    toggleOpen(){
      this.open = !this.open
    }

  },
}
</script>