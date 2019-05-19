<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
    <router-view name="card"></router-view>

    <p>test App</p>

  </div>
</template>

<script>
import cardCascade from './components/CardCascade.vue';

export default {
  components:{
    'card-cascade':cardCascade,
  },
  data () {
    return {
      title:'Mark Vue Blog'
    }
  }
}
</script>

<style scoped>
div {
  padding: 0px 0px 0px 0px;
}

p {
  color: green;
}
</style>
