let coffeeChoice =document.querySelectorAll('input[name="drinks"]')
let serveBtn = document.querySelectorAll(".serve-order");
let deleteBtn= document.querySelectorAll(".ban");
console.log('delete buttons', deleteBtn)

Array.from(serveBtn).forEach(function (element) {
    element.addEventListener("click", function(e) {
       const baristaName =document.getElementById('baristaName').innerText
       console.log(baristaName)
        
       fetch("/updateDatabase", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
                id:e.target.id,    
                baristaName,
          }),
        })
          .then((response) => {
            if (response.ok) return response.json();
          })
          .then((data) => {
            console.log(coffeeChoice);
            //  document.getElementsByClassName("completedOrders").innerText = coffeeChoice;
             window.location.reload(true);
           });
       });
     });

    //  make it so that the order appears under barista name at the bottom of the page 
       
     Array.from(deleteBtn).forEach(function (element) {
      element.addEventListener("click", function(e) {
        console.log(e.target.id)
        console.log('serve buttons', deleteBtn)

         fetch("/deleteOrders", {
           method: "delete",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             // _id: ObjectId(req.body.id)
              id:e.target.id
           }),
         }).then(function (response) {
            window.location.reload();
         });
      });
    });

