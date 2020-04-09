<template>
  <div>
    <Navbar />

    <div class="container custom-padding-top">
        <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar'

export default {
    name: 'App',
    components: {
      Navbar
    }
}
</script>

<style scoped>
  .custom-padding-top {
    padding-top: 5.2rem;
  }  
</style>
