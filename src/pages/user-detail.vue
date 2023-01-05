<script lang="ts" setup>
import { useLoginUser } from '../composables/states';

const loginUser = useLoginUser();
const { user } = loginUser;
</script>

<template>
  <div>
    <p>ユーザーID: {{ user.id }}</p>
    <p>ユーザー名: {{ user.name }}</p>
    <p>メールアドレス: {{ user.mail }}</p>
    <button @click="loginUser.setName('')">ユーザ名を削除</button>
    <button @click="loginUser.setMail('')">メールアドレスを削除</button>
  </div>
</template>