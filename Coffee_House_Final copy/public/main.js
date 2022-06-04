// let serveBtn = document.getElementsByClassName("serve-order");
// let submit = document.querySelector(".submitOrder");

// submit.addEventListener('click',function(){

//   let customerName = document.querySelector('.customername').value

//   let coffeeChoice =document.querySelectorAll('input[name="drinks"]')
//   console.log(coffeeChoice)
//   let milkChoice=document.querySelectorAll('input[name="milk"]')
//   console.log(milkChoice)
//   let drinkSize=document.querySelectorAll('input[name="size"]')

//   let syrup =document.querySelectorAll('input[name="syrup"]')
//   console.log(syrup)
//   let sugar=document.querySelectorAll('input[name="sugar"]')
//   console.log(sugar)
//   let toppings=document.querySelectorAll('input[name="toppings"]')
//   console.log(toppings)

//   for (const drink of coffeeChoice ) {
//     if (drink.checked) {
//         coffeeChoice = drink.value;
//         break;
//      }
//   }
//   console.log(coffeeChoice)

//   console.log(toppings)
//   for (const topping of toppings ) {
//     if (topping.checked) {
//         toppings = topping.value;
//         break;
//      }
//   }
//   console.log(toppings)

//     console.log(milkChoice)

//     for (const milk of milkChoice ) {
//       if (milk.checked) {
//           milkChoice = milk.value;
//           break;
//        }
//       }
//       console.log(milkChoice)

//       console.log(syrup)
//     for (const syrupChoice of syrup) {
//       if (syrupChoice.checked) {
//           syrup = syrupChoice.value;
//           break;
//        }
//       }
//       console.log(syrup)

//       console.log(sugar)

//     for (const sugarChoice of sugar ) {
//       if (sugarChoice.checked) {
//           sugar = sugarChoice.value;
//           break;
//        }
//     }
//     console.log(sugar)

//     for (const size of drinkSize ) {
//       if (size.checked) {
//           drinkSize = size.value;
//           break;
//        }
//     }
//     fetch("/savedToDatabase", {
//       method: "post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         customerName,
//         coffeeChoice,
//         milkChoice,
//         drinkSize,
//         toppings,
//         sugar,
//         syrup,       
//       }),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//         console.log(response)
//       })
//       .then((data) => {
//         console.log(data)
//         // console.log(coffeeChoice);
//         // document.getElementsByClassName("completedOrders").innerText = coffeeChoice;
//        window.location.reload(true);
//       });

// })


// Array.from(submit).forEach(function(element){
//   element.addEventListener("click", function(){

//     const customerName = document.querySelector('.customername')
//     const coffeeChoice =document.querySelectorAll('input [name="drinks"]')
//     console.log(coffeeChoice)
//     const milkChoice=document.querySelectorAll('input [name="milk"]')
//     console.log(milkChoice)
//     const drinkSize=document.querySelectorAll('input [name="size"]')
//     const syrup =document.querySelectorAll('input [name="syrup"]')
//     const sugar=document.querySelectorAll('input [name="sugar"]')
//     const toppings=document.querySelectorAll('input [name="toppings"]')

//     for (const drink of coffeeChoice ) {
//       if (drink.checked) {
//           coffeeChoice = drink.value;
//           break;
//        }
//     }
//     console.log(coffeeChoice)

//       console.log(milkChoice)
//       for (const milk of milkChoice ) {
//         if (milk.checked) {
//             milkChoice = milk.value;
//             break;
//          }
//         }
//         console.log(milkChoice)

//       for (const syrup of syrupChoice ) {
//         if (syrup.checked) {
//             syrupChoice = syrup.value;
//             break;
//          }
//         }
  
//       for (const sugar  of sugarChoice ) {
//         if (sugar.checked) {
//             sugarChoice = sugar.value;
//             break;
//          }
//       }
//       for (const size of drinkSize ) {
//         if (size.checked) {
//             drinkSize = size.value;
//             break;
//          }
//       }
//       fetch("savedToDatabase", {
//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           customerName,
//           coffeeChoice,
//           milkChoice,
//           drinkSize,
//           toppings,
//           sugar,
//           syrup       
//         }),
//       })
//         .then((response) => {
//           if (response.ok) return response.json();
//         })
//         .then((data) => {
//           console.log(coffeeChoice);
//           // document.getElementsByClassName("completedOrders").innerText = coffeeChoice;
//          //  window.location.reload(true);
//         });

//   })
// })

//

// Array.from(deleteBtn).forEach(function (element) {
//   element.addEventListener("click", function () {
//     console.log(this.parentNode.parentNode.childNodes)
//     const coffeeChoice = this.parentNode.parentNode.childNodes[2].innerText;
//     const coffeeInstructions =this.parentNode.parentNode.childNodes[5].innerText;
//     const customerName = this.parentNode.parentNode.childNodes[8].innerText
//     console.log(coffeeChoice);
//     console.log(coffeeInstructions);
//     console.log(customerName)
//     fetch("deleteOrders", {
//       method: "delete",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         coffeeChoice: coffeeChoice,
//         coffeeInstructions: coffeeInstructions,
//         customerName: customerName
//       }),
//     }).then(function (response) {
//       window.location.reload();
//     });
//   });
// });
/////////////////////////////
//from profile.js 
//console.log('served button clicked',e.target)
      // console.log(this.parentNode.parentNode);
      // console.log(document.querySelector('.drinks input:checked'))
      // console.log(document.querySelector('.milk input:checked'))
      // const coffeeInstructions =
      //   this.parentNode.parentNode.childNodes[3].innerText;
      // console.log(this.parentNode)
      // console.log(this.parentNode.parentNode.childNodes[1])
      // const customerName = this.parentNode.parentNode.childNodes[1].value
      //  const customerName = document.querySelector('.customername').innerText
      //  const coffeeChoice =document.querySelectorAll('input[name="drinks"]')
      //   // console.log(coffeeChoice)
      //  const milkChoice=document.querySelectorAll('input[name="milk"]')
      //  console.log(milkChoice)
      //  const drinkSize=document.querySelectorAll('input[name="size"]')
      //  console.log(drinkSize)
      //  const syrup =document.querySelectorAll('input[name="syrup"]')
      //  console.log(syrup)
      //  const sugar=document.querySelectorAll('input[name="sugar"]')
      //  console.log(sugar)
      //  const toppings=document.querySelectorAll('input[name="toppings"]')


// document.getElementsByClassName("completedOrders").innerText = coffeeChoice;

// document.getElementsByClassName("pending-orders").innerText = coffeeChoice;
// console.log('serve buttons', serveBtn)
 

 //  id:e.target.id
             // customerName,
            //   coffeeChoice,
            //   milkChoice,
            //   drinkSize,
            //   toppings,
            //   sugar,
            //   syrup 