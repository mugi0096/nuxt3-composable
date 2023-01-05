<script lang="ts" setup>
import { useLoginUser } from '../composables/states';

const loginUser = useLoginUser();
const { user } = loginUser;
</script>

<template>
  <div>
    <h1>useState実装例</h1>
    <nuxt-link to="/user-detail">{{ user.name }}さんの詳細ページ</nuxt-link>
  </div>
</template>