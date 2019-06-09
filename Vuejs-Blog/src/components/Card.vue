<template>
  <div>
    {{getUniqueBlogTypes}}
    <b-card-group deck>
      <b-card title="Data Science" img-src="https://images.unsplash.com/photo-1528413538163-0e0d91129480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" img-alt="Image" img-top>
        <b-card-text>
          <router-link to="/datascience" exact>
          <!--<router-link v-bind:to="{name:'webdev-single', params: {blog_id: blog.blog_id}}" exact>-->
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.
          </router-link>
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>


      <b-card title="Python" img-src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" img-alt="Image" img-top>
        <b-card-text>
          <!-- <router-link to="/webdev" exact> -->
          <router-link v-bind:to="{name:'category', params: {category: blog_types[0]}}" exact>
          This card has supporting text below as a natural lead-in to additional content.
          </router-link>
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>

      <b-card title="Web Design" img-src="https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" img-alt="Image" img-top>
        <b-card-text>
          <router-link to="/webdev" exact>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first to show that equal height action.
          </router-link>
        </b-card-text>
        <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
      </b-card>
    </b-card-group>
    <p>test card</p>
  </div>
</template>

<script>
import db from './firebaseInit';
export default {
  data () {
    return {
      title:'Mark Vue Blog',
      blogs:[],
      blog_types:[],
    }
  },
  computed:{
    getUniqueBlogTypes(){
      for(var i = 0; i<=this.blogs.length-1; i++){
        if(this.blog_types.includes(this.blogs[i].type) != true){
          this.blog_types.push(this.blogs[i].type)
        }
      }
      return this.blog_types
    },
  },
  created(){
    //this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      //this.blog = data.body;
     db.collection('Blogs').orderBy('Type').get().then(querySnapshot =>{
       querySnapshot.forEach(doc => {
         //console.log(doc.data());
         const data={
           'id': doc.id,
           'content': doc.data().Content,
           'type': doc.data().Type,
           'title': doc.data().Title,
           'blog_id':doc.data().blog_id,

         }
        this.blogs.push(data)
       })
     })
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
