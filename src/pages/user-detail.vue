<script lang="ts" setup>
import { useLoginUser } from '../composables/states';

const user = useLoginUser();
</script>

<template>
  <div>
    <p>ユーザーID: {{ user.id }}</p>
    <p>ユーザー名: {{ user.name }}</p>
    <p>メールアドレス: {{ user.mail }}</p>
  </div>
</template>