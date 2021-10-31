const { create } = require("browser-sync");

console.log('main.js');

let topMenu = document.querySelectorAll('.top-menu li a');

for (let i = 0; i < topMenu.length; i++ ) {
  console.log(topMenu[i].innerHTML)
}

console.log(topMenu)

// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello world!'
//   },
//   created: function(){
//     console.log(`Name: ${this.message}`)
//   }
// })