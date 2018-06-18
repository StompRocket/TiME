<template>
  <div id="app" class="page">
    <main class="page">
      
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import '../node_modules/minireset.css/minireset.min.css'
import './assets/global.scss'
export default {
  name: 'app',
  data() {
    return {}
  }
}
</script>