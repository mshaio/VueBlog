import jumbotron from './components/Jumbotron.vue'
import card from './components/Card.vue'
//import addBlog from './components/addBlog.vue'
export default[
  //{path:'/', component: jumbotron, card},
  {
    path:'/',
    components: {
      default: jumbotron,
      card: card
    },
    props:{
      card:true
    }
  },

  //{path:'/add', component: addBlog}
  {path:'/add', component: card}
]
