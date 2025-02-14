$(document).ready{()=>{
    $("button").click(()=>{
        let email= $("email").val();
        let password= $("email").val();
    if (validate(email,password))
    {
        $("message").innerHtml("Welcome to transflower")
    }
      else {
        $("message").innerHtml("Welcome to transflower")
      }  
    })
}}

function authenticate(email,password)
  {
    console.log
    let email=document.getElementById("email").ariaValueMax
    validate(email,password);
  }