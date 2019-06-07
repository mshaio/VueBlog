<template>
  <div id="single-blog">
    <!--
    <ul>
      <article>
        <li v-for="blog in blogs" v-bind:key="blog.id">
          <h1>{{blog.title}}</h1>
          <i class="fa fa-cogs" aria-hidden="true"></i>
          <router-link v-bind:to="{name:'webdev-single', params: {blog_id: blog.blog_id}}">
            <p>{{blog.content}}</p>
          </router-link>
        </li>
      </article>
    </ul>
  -->

    <h1>{{blogs[blog_id-1].title}}</h1>
    <article>
      <router-link v-bind:to="{name:'webdev-single', params: {blog_id: blogs[blog_id-1].blog_id}}">
        <p>{{blogs[blog_id-1].content}}</p>
      </router-link>
    </article>

  </div>
</template>

<script>
import db from './firebaseInit'
export default{
  props: ["blog_id"],
  data(){
    return{
      id:this.$route.params.id,
      blogs:[],
    }
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

<style>
#single-blog{
  max-width: 960px;
  margin: 20px 10px;
}
</style>
