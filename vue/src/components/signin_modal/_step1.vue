<template>
  <div class="step step_1">

    <div class="body">
      <div class="txt">予約に必要な会員情報が不足しています<br>OKボタンを押してご登録ください</div>
    </div>

    <div class="ft_actions">
      <button class="next" @click="$emit('next')">OK</button>
    </div>

  </div>
</template>
