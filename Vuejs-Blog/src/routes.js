import jumbotron from './components/Jumbotron.vue'
import card from './components/Card.vue'
import cardCascade from './components/CardCascade.vue'
import singleBlog from './components/SingleBlog.vue'
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
  {path:'/datascience', component: cardCascade},
  {path:'/datascience/:id', component: singleBlog}
]
