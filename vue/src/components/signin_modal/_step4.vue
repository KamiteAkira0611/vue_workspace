<template>
  <div class="step_4">

    <div class="body">
      <div class="txt">
        ご登録いただいたメールアドレス宛に<br>
        登録確認用メールをお送りしました。<br>
        <div class="focus">
          メール内のリンクから
        </div>
        <div class="focus">
          アカウント登録を完了してください。
        </div>
      </div>
      <div class="mail">kamiteakira@gmail.com</div>
      <div class="notice">
        メールアドレスに誤りのある場合は<br>ひとつ前の画面に戻って再度メール送信してください
      </div>
    </div>

    <div class="ft_actions">
      <button class="back" @click="$emit('prev')">戻る</button>
      <button class="next" @click="$emit('next')">OK</button>
    </div>

  </div>
</template>
