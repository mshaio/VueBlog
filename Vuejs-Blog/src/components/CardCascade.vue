<template>
  <div>
    <li>{{blogs[0].id}}</li>
    <b-card-group columns>
      <b-card
        v-bind:title= "blogs[0].title"
        img-src="https://placekitten.com/g/400/450"
        img-alt="Image"
        img-top
      >
        <b-card-text>
          {{getContentPortion(blogs[0].content,100)}}
        </b-card-text>
      </b-card>

      <b-card header="Quote">
        <blockquote class="blockquote mb-0">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </b-card>

      {{getContent("Vue")}}
      <b-card v-for="blog in blogs_duplicate" title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
        <b-card-text>
          <!--{{getBlogOfType("Vue",blog.id)}}-->
          {{getBlogOfType("Vue",blog.id)}}
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>

      <b-card bg-variant="primary" text-variant="white">
        <blockquote class="card-blockquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>
            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
          </footer>
        </blockquote>
      </b-card>

      <b-card>
        <b-card-title>Title</b-card-title>
        <b-card-text>
          This card has supporting text below as a natural lead-in to additional content.
        </b-card-text>
        <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
      </b-card>

      <b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

      <b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first.
        </b-card-text>
        <div slot="footer"><small class="text-muted">Footer Text</small></div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import db from './firebaseInit'
export default{
  data(){
    return{
      id:this.$route.params.id,
      blogs:[],
      //blogs_duplicate:[],
      blogs_with_correct_genera:[],
      in_blogs: false,
    }
  },
  methods: {
    getContentPortion (content, maxSize) {
      if(maxSize >= content.length) {
        return content;
      }

      return content.substring(0, maxSize) + '...'
    },
    getBlogOfType (blog_type, doc_id) {
      //Error: this method does not know anything about blogs[i].type because it does
      //not have access to the data here.
      var blogs_with_correct_type = []
      var blogs_doc_id = []

      for (var i=0; i <= this.blogs.length-1; i++){
        if (this.blogs[i].type == blog_type){
          blogs_with_correct_type.push(this.blogs[i].content);
          blogs_doc_id.push(this.blogs[i].id)
        }
      }
      this.blogs_with_correct_genera = blogs_with_correct_type
      //console.log(this.blogs_with_correct_genera)
      var location = blogs_doc_id.indexOf(doc_id)
      //console.log(this.blogs[location])

      return this.blogs_with_correct_genera[location]
    },
    getContent (blog_type) {
      //var blogs_duplicate = this.blogs
      this.blogs_duplicate = this.blogs
      console.log(this.blogs)
      var blogs_with_correct_type = []
      var blogs_with_incorrect_type = []
      var all_blog_contents = []
      for (var i = 0; i<= this.blogs.length-1; i++){
        all_blog_contents.push(this.blogs[i].content)
      }

      for(var i=0; i<= this.blogs.length-1; i++){
        if (this.blogs[i].type == blog_type){
          blogs_with_correct_type.push(this.blogs[i].content)
        }
        if (this.blogs[i].type != blog_type){
          blogs_with_incorrect_type.push(this.blogs[i].content)
        }
      }
      this.blogs_with_correct_genera = blogs_with_correct_type
      console.log(this.blogs_with_correct_genera)
      //blogs_with_correct_type does not have the blog.id attribute so maybe try
      //to remove unneeded blogs from blogs based on what is in blogs_with_correct_genera
      for (var i=0; i<= blogs_with_incorrect_type.length-1; i++){
        if (all_blog_contents.includes(blogs_with_incorrect_type[i]) == true) {
          this.in_blogs = true
          //console.log(blogs_with_incorrect_type[i])
          this.blogs_duplicate.splice(all_blog_contents.indexOf(blogs_with_incorrect_type[i]),1)
          //console.log(this.blogs_duplicate)
        }
      }
      return
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
</style>
