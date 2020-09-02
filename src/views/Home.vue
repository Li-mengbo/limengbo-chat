<template>
  <div class="home">
     <i-button type="primary">Primary</i-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import getIndexData from '@/api/index'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    getIndexData({
      channelCode: 'TENCENT'
    })
  }
}
</script>
