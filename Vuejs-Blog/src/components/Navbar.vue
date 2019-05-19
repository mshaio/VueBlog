<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Mark's Vue</b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text>Navbar text</b-nav-text>
          <b-nav-text>test</b-nav-text>
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

</style>
