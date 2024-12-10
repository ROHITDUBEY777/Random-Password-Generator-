const GenEL = document.getElementById("password-ele"); 
const SEel = document.getElementById("gen-el");
const LoaderEl = document.getElementById("loader-el");

function getRandomChar(){
    const x=Math.floor(Math.random() * (126 - 33) + 33);
    return String.fromCharCode(x);
}


 function passwordgenerator(){
    let password="";
    
    for(i=0;i<=8;i++){
      
        password+=getRandomChar()
        
    }
    // console.log(`generated password:${password}`)
    GenEL.style.fontWeight=800;
    GenEL.style.fontSize="30px" ;
    
    GenEL.style.padding="5px";
    
    GenEL.textContent=password;
    // return new Promise(resolve => setTimeout(resolve,ms));
}
SEel.addEventListener("click",function(){
    setTimeout(passwordgenerator,3000);
});

function showloader(){
 LoaderEl.style.display = "block";
 setTimeout(() => {
    LoaderEl.style.display = "none";
    console.log("loader stopped");
 }, 3000);
}
SEel.addEventListener("click",showloader);