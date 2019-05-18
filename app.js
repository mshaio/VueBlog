new Vue({
  el:'#vue-app',
  data:{
    name:'Mark',
    job:'Ninja'
  },
  methods:{
    greet: function(time){
      return 'Good Morning' + time + this.name;
    }
  }
});
