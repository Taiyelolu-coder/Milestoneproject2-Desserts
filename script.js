const cart = document.getElementById("totalQuantity")

const addToCartBtns = document.querySelectorAll(".btn");

const totalPrice = document.getElementById("totalcost")






// let products = {
//     name:""


const cartArray =[]

const addToCartBtn =()=>{
    let products ={
        name:"Waffle with Berries",
        quantity: 1,
    }

    cartArray.push(products);
console.log(products);

    // / replacing the add to cart button 


const revealBtn = document.querySelectorAll(".btn");

const hideBtn = document.querySelectorAll(".modaldiv")

// function to remove or hide buttons
 function showBtn(){
     if(hideBtn.classlist.contains("btn")
    ){
      hideBtn.classlist.remove("btn")
}  else {
     hideBtn.classlist.add("btn")
}
}

revealBtn.addEventListener('click', showBtn);



for(let i = 0; i < addtocartbtns.length; i++)
addToCartBtns.addeventlistener('click', ()=>{

    addToCart()
    // console.log(cartArray);
    
})


}















// for(let i = 0; i < addtocartbtns.length; i++){
//     addtocartbtns[i].addEventListener('click', addToCart);
// }



// // function to add to cart
// function addToCart(event){

//    let btn = event.target
   
//     console.log(btn);
    
//     let btn_parent = btn.parentElement
//     let itemName= btn_parent.children[4].innerText
//     let itemPrice= btn_parent.children[5].innerText
//     let itemImage= btn_parent.children[0].src
     

   


    
    

// console.log(itemName);






