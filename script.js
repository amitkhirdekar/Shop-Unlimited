(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          man.classList.add("man");
          boxes.classList.add("boxes")
          bgnd.classList.add("bgnd")
          element.classList.add("woman2")
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
})();

  

  function validateForm(){
    var flag = false;

    const numpattern = /^[0-9]+$/ ;
    const emailpattern = /^[a-z0-9_.]+\@[a-z]+\.[a-z]{2,4}$/ ;

    var mes = "Warning !! \n";

    // Name Validation
    if (fullname.value.trim() === "") {
      flag = true;
      fullname.classList.add("incorrect");
      mes += "Enter Name so we could ship to you !\n";
    }
    else{
      fullname.classList.remove("incorrect");
      fullname.classList.add("correct");
    }

    // Email Validation
    if (email.value.trim() === "") {
      flag = true;
      email.classList.add("incorrect");
      mes += "Enter Email so you get updated of your order !\n";
    }
    else if( !emailpattern.test(email.value) ){
      flag = true;
      email.classList.add("incorrect");
      mes+= "Improper Email Format :( \n";
    }
    else{
      email.classList.remove("incorrect");
      email.classList.add("correct");
    }

    // Mobile Number Validation
    if (mob.value.trim() === "") {
      flag = true;
      mob.classList.add("incorrect");
      mes += "Enter Mobile Number so our delivery Executive can contact you !\n";
    }
    else if ( !numpattern.test(mob.value) ) {
      flag = true;
      mob.classList.add("incorrect");
      mes += "Mobile number must be numbers only !\n";
    }
    else if (mob.value.length != 10 ) {
      flag = true;
      mob.classList.add("incorrect");
      mes += "Mobile number must be 10 digits only !\n";
    }
    else{
      mob.classList.remove("incorrect");
      mob.classList.add("correct");
    }

    // Address Validation
    if (add.value.trim() === "") {
      flag = true;
      add.classList.add("incorrect");
      mes += "Enter Address so our delivery Executive can reach you !\n";
    }
    else{
      add.classList.remove("incorrect");
      add.classList.add("correct");
    }

    // PinCode Validation
    if (pin.value.trim() === "") {
      flag = true;
      pin.classList.add("incorrect");
      mes += "Enter Pin Code !\n";
    }
    else if ( !numpattern.test(pin.value) ) {
      flag = true;
      pin.classList.add("incorrect");
      mes += "Pin Code must be numbers only !\n";
    }
    else if (pin.value.length != 6 ) {
      flag = true;
      pin.classList.add("incorrect");
      mes += "Pin Code must be 6 digits only !\n";
    }
    else{
      pin.classList.remove("incorrect");
      pin.classList.add("correct");
    }


    // Category Of Product Validaion
    if (cat1.value == "selectamong"){
      flag = true;
      cat1.classList.add("incorrect");
      mes += "Select One Option for Category of Product !\n";
    }
    else{
      cat1.classList.remove("incorrect");
      cat1.classList.add("correct");
    }

    // Product Number Validation
    if (pno1.value == "selectamong"){
      flag = true;
      pno1.classList.add("incorrect");
      mes += "Select One Option for Product Number !\n";
    }
    else{
      pno1.classList.remove("incorrect");
      pno1.classList.add("correct");
    }


    if (flag){
      alert(mes);
      return false;
    }

    category1 = cat1.value;
    product1 = pno1.value;
    localStorage.setItem("category1", cat1.value);
    localStorage.setItem("product1", pno1.value);
    
  }


var category1 = localStorage.getItem("category1");
var product1 = localStorage.getItem("product1");
var ans="";
if(category1 == "tshirt"){
  ans += 't';
}
else if (category1 == "jeans"){
  ans += 'j';
}
else if (category1 == "shoes"){
  ans += 's';
}
else{
  ans += 'w';
}

if(product1 == '1'){
  ans += '1';
}
else if (product1 == '2'){
  ans += '2';
}
else{
  ans += '3';
}

document.getElementById("delivered").innerHTML = "<img src=\"" + ans + ".jpg\">";
ans = "";


