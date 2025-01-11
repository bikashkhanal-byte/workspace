
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailPattern.test(email);
}

//main function
function HandleForm(){
    const FirstName = document.getElementById("FirstName").value.trim();
    const LastNAme = document.getElementById("LastName").value.trim();
    const Email = document.getElementById("Email").value.trim();
    const Password = document.getElementById("Password").value.trim();
    
    
    
    if (Email ==''  || FirstName == '' || LastNAme == '' ){
        alert('Please fill in all field' , 'error');
    }
    
    if (!isValidEmail(Email)) {
        alert('Please Enter a valid Email ' , 'error');
        return;
    }
    
    
    if(Password.length < 6 ){
        alert('Password must me at least 6 character long. ' , 'error');
        return ;
    }
    
    alert("Account created successfully!");
    
}   

document.getElementById("btn").addEventListener("click", HandleForm);


// checkBox 

  const checkBox = document.getElementById("terms");
  const btn = document.getElementById("btn");

  checkBox.addEventListener("change", () =>{
    if(checkBox.checked){
        btn.disabled = false;
    }

    else{
    btn.disabled = true;
    }
  })
  
    

