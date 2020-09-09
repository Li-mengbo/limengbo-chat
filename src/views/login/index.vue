<template>
    <div class="login-page">登录</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Login'
})

export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.login-page {
  font-size: 14px;
}
</style>
