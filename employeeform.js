function check() {

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("eduError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var country = document.getElementById("country").value;
    var mobile = document.getElementById("mobile").value;

    if(name=="")
        document.getElementById("nameError").innerHTML=" Fields can not be blank";

    if(email=="")
        document.getElementById("emailError").innerHTML=" Fields can not be blank";

    var gender=document.getElementsByName("gender");
    var g=false;

    for(var i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
            g=true;
    }

    if(g==false)
        document.getElementById("genderError").innerHTML=" Select Gender";

    var edu=document.getElementsByName("edu");
    var e=false;

    for(var i=0;i<edu.length;i++)
    {
        if(edu[i].checked)
            e=true;
    }

    if(e==false)
        document.getElementById("eduError").innerHTML=" Select Education";

    if(address=="")
        document.getElementById("addressError").innerHTML=" Fields can not be blank";

    if(country=="")
        document.getElementById("countryError").innerHTML=" Select Country";

    if(mobile.length!=10)
        document.getElementById("mobileError").innerHTML=" Enter valid 10 digit number";

    if(name!="" && email!="" && g==true && e==true && address!="" && country!="" && mobile.length==10)
    {
        alert("Form Submitted Successfully");
    }
}