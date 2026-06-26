let modebtn = document.querySelector("#mode"); // selected id of click btn
let currmode = "dark"   // set current to dark initial
// const handler = () => {
//     if(currmode === "dark"){
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor ="white"; //selected body and cnged background to white
//     }
//     else{
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor ="black"; //selected body and cnged background to black

//     }
//     console.log("colour changed",currmode);
// }

// using class List and css
let body = document.querySelector("body"); // selected html body
const handler = () => {             // handler logic
    if(currmode === "dark"){
        currmode = "light";
        body.classList.add("dark"); 
        body.classList.remove("light");
    }
    else{
        currmode = "dark";
        body.classList.add("light");
        body.classList.remove("dark");


    }
    console.log("colour changed",currmode);//display current mode changed
}
modebtn.addEventListener("click",handler); // added event listner to the selected button