<template>
  <div class="home">
     <Button type="primary">Primary</Button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import getIndexData from '@/api/index'

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})

export default class extends Vue {
  private created(): void {
    getIndexData({
      channelCode: 'TENCENT'
    })
  }
}
</script>
