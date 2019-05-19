<template>
  <div>
    <b-jumbotron header="Mark's Vue Blog" lead="Bootstrap 4 Components for Vue.js 2">
      <p>For more information visit website</p>
      <p>{{title}}</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title:'Mark Vue Blog'
    }
  }
}
</script>

<style scoped>
div {
  padding: 10px 10px 10px 10px;
}

p {
  color: blue;
}

/* JUMBOTRON */
.jumbotron {
    background-color: ;
    background-image: url("https://cdn.pixabay.com/photo/2017/06/03/19/55/san-francisco-2369581_960_720.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    min-height: 550px;
}
</style>
