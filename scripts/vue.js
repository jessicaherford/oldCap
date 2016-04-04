new Vue({
  el: '#app',
  data: {
    ingredient: ''
  },
  methods: {
    listIngredientPairings: function(data, ingredient){
      for(key in data){
        if(key === ingredient){
          console.log(data[key]);
          return this.ingredient = data[key];
        }
      }
    }
  }
})


// loadUsers: function() {
//       this.$http.get('http://jsonplaceholder.typicode.com/users', function(data, status, request){
//         if(status == 200)
//         {
//           this.users = data;
//         }
//       });
//     }
//   }
