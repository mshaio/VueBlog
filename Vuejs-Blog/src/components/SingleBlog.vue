<template>
  <div id="single-blog">
    <ul>
      <h1><li v-for="blog in blogs" v-bind:key="blog.id">{{blog.title}}</li></h1>
      <article><li v-for="blog in blogs" v-bind:key="blog.id">{{blog.content}}</li></article>
    </ul>
  </div>
</template>

<script>
import db from './firebaseInit'
export default{
  data(){
    return{
      id:this.$route.params.id,
      blogs:[],
    }
  },
  created(){
    //this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      //this.blog = data.body;
     db.collection('Blogs').get().then(querySnapshot =>{
       querySnapshot.forEach(doc => {
         //console.log(doc.data());
         const data={
           'id': doc.id,
           'content': doc.data().Content,
           'type': doc.data().Type,
           'title': doc.data().Title,

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
