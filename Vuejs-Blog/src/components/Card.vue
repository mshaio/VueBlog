<template>
  <div>
    <b-card-group deck>
      <b-card title="Data Science" img-src="https://images.unsplash.com/photo-1528413538163-0e0d91129480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>

      <b-card title="Python" img-src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" img-alt="Image" img-top>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>

      <b-card title="Web Design" img-src="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>
    </b-card-group>
    <p>test card</p>
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
  color: red;
}

.card-img-top {
    width: 100%;
    height: 22vw;
    object-fit: cover;
}
</style>
