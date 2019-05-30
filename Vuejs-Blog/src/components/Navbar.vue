<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand>Mark's Vue</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text><router-link to="/" exact>Main</router-link></b-nav-text>
          <b-nav-text><router-link to="/datascience" exact>Data Science</router-link>test</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

.router-link-active {
  background:#eee;
  color: #444;
}

.navbar-text {
  color:#000;
}

a {
  border-radius: 10px;
  padding: 6px 8px;
  color: #000;
  text-decoration: none;
}
</style>
