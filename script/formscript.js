function validate()
{
    var name = document.getElementById("name");
    var fathername = document.getElementById("fname");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob");
    var mobileno = document.getElementById("mobileno");
    var currentadd = document.getElementById("currentaddress");
    var addline2 = document.getElementById("addline2");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zipcode = document.getElementById("zipcode");
   
    var photo = document.getElementById("photo");

    // state.options[state.selectedIndex].value;
    check();
    // Name Validation
    var regxname = /^[a-zA-Z]+$/;

    if(name.value.trim()=="")
    {
        document.getElementById("namelabel").style.visibility ="visible";
    }
    else if(!regxname.test(name.value))
    {
        document.getElementById("namelabel").innerHTML = "Enter a Valid Name";
        document.getElementById("namelabel").style.visibility ="visible";
    }
    else
    {
        true;
    }

    //father name validation
    var regxfname = /^[a-zA-Z ]+$/;
    if(fathername.value.trim()=="")
    {
        document.getElementById("fnamelabel").style.visibility ="visible";
    }
    else if(!regxfname.test(fathername.value))
    {
        document.getElementById("fnamelabel").innerHTML = "Enter a Valid Name";
        document.getElementById("fnamelabel").style.visibility ="visible";
    }
    else
    {
        true;
    }

    //email Validation
    var regxemail = /([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,10})/;

    if(email.value.trim()=="")
    {
        document.getElementById("emaillabel").style.visibility ="visible";
    }
    else if(!regxemail.test(email.value))
    {
        document.getElementById("emaillabel").innerHTML = "Enter a Valid Email";
        document.getElementById("emaillabel").style.visibility ="visible";
    }
    {
        true;
    }

    // Date of Birth Validation
    var regxdob = /([0-3])([0-9]-([0-1])([0-9])-([0-2])([0-9]){3})$/;

    if(dob.value.trim()=="")
    {
        document.getElementById("doblabel").style.visibility ="visible";
    }
    else if(!regxdob.test(dob.value))
    {
        document.getElementById("doblabel").innerHTML = "Enter a Valid DOB";
        document.getElementById("doblabel").style.visibility ="visible";
    }
    {
        true;
    }

    // MObile Number Validation
    var regxmob = /[6-9]\d{9}$/;

    if(mobileno.value.trim()=="")
    {
        document.getElementById("moblabel").style.visibility ="visible";
    }
    else if(!regxmob.test(mobileno.value))
    {
        document.getElementById("moblabel").innerHTML="Enter Valid Mobile Number";
        document.getElementById("moblabel").style.visibility="visible";
    }
    {
        true;
    }  
    
    
    
    
    // Current Address
    var regxcuradd = /^[a-zA-Z \s]{2,35}$/;

    
    if(currentadd.value.trim()=="")
    {
        document.getElementById("add1label").style.visibility ="visible";
    }
    else if(!regxcuradd.test(currentadd.value))
    {
        document.getElementById("add1label").innerHTML = "Enter a Valid Address";
        document.getElementById("add1label").style.visibility ="visible";
    }
    {
        true;
    }


    //
    var regxcuradd1 = /^[a-zA-Z\s]{2,20}$/;

    if(addline2.value.trim()=="")
    {
        document.getElementById("add2label").style.visibility ="visible";
    }
    else if(!regxcuradd1.test(addline2.value))
    {
        document.getElementById("add2label").innerHTML = "Enter a Valid Address";
        document.getElementById("add2label").style.visibility ="visible";
    }
    {
        true;
    }

    //
    var regxcity = /^[a-zA-Z \s]{2,20}$/;

    if(city.value.trim()=="")
    {
        document.getElementById("citylabel").style.visibility ="visible";
    }
    else if(!regxcity.test(city.value))
    {
        document.getElementById("citylabel").innerHTML = "Enter a Valid City Name";
        document.getElementById("citylabel").style.visibility ="visible";
    }
    {
        true;
    }

    var regczip = /\d{6}$/;
    if(zipcode.value.trim()=="")
    {
        document.getElementById("citylabel").style.visibility ="visible";
    }
    else if(!regczip.test(zipcode.value))
    {
        document.getElementById("citylabel").innerHTML = "Enter a Valid Zipcode";
        document.getElementById("citylabel").style.visibility ="visible";
    }
    {
        true;
    }

    var regxphoto = /\.jpeg\.png/i;
    if(photo.value.trim()=="")
    {
        document.getElementById("photo").style.visibility ="visible";
    }
    else if(!regxphoto.test(photo.value))
    {
        document.getElementById("photo").innerHTML = "Enter a Valid Zipcode";
        document.getElementById("photo").style.visibility ="visible";
    }
    {
        true;
    }
    alert("Validate Successfully");
}

function check()
{
    var currentadd = document.getElementById("currentaddress");
    var addline2 = document.getElementById("addline2");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zipcode = document.getElementById("zipcode");

    var checkbox = document.getElementById("checkbox1").checked;
    var peraddress = document.getElementById("permanentadd");
    var peradd2 = document.getElementById("peraddline2");
    var percity = document.getElementById("percity");
    var perstate = document.getElementById("pstate");
    var perzip = document.getElementById("pzipcode");

    if(checkbox == true)
    {
        peraddress.value = currentadd.value;
        peradd2.value = addline2.value;
        percity.value = city.value;
        perstate.value = state.value;
        perzip.value = zipcode.value;
    }
    else if(checkbox==false)
    {
        peraddress.value = "";
        peradd2.value = "";
        percity.value = "";
        perstate.value = "";
        perzip.value = "";
    }
    
}


