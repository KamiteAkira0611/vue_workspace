<template>
  <div class="step_3">

    <div class="body">
      <div class="txt">メールアドレスの承認を行います<br>ご登録のメールアドレスを確認し<br>OKを押してください</div>
      <div class="mail">kamiteakira@gmail.com</div>
    </div>

    <div class="ft_actions">
      <button class="back" @click="$emit('prev')">戻る</button>
      <button class="next" @click="$emit('next')">OK</button>
    </div>

  </div>
</template>
