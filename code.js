
var name; var uname; var pass; var email; var address; var interests; var gender; var holder; var id;

function namechanges(){
    holder = document.getElementById("name").value;
    if (holder == ""){
        document.getElementById("name").style.borderColor = "RED";
    }
    else{
        document.getElementById("name").style.borderColor = "GREEN";
    }
}
function unamechanges(){
    holder = document.getElementById("Username").value;
    if (holder == ""){
        document.getElementById("Username").style.borderColor = "RED";
    }
    else{
        document.getElementById("Username").style.borderColor = "GREEN";
    }
}
function passchanges(){
    holder = document.getElementById("pass").value;
    if (holder == ""){
        document.getElementById("pass").style.borderColor = "RED";
    }
    else{
        document.getElementById("pass").style.borderColor = "GREEN";
    }
}
function emailchanges(){
    holder = document.getElementById("email").value;
    if (holder == ""){
        document.getElementById("email").style.borderColor = "RED";
    }
    else{
        document.getElementById("email").style.borderColor = "GREEN";
    }
}
function addresschanges(){
    holder = document.getElementById("address").value;
    if (holder == ""){
        document.getElementById("address").style.borderColor = "RED";
    }
    else{
        document.getElementById("address").style.borderColor = "GREEN";
    }
}
function interestschanges(){
    holder = document.getElementById("interests").value;
    if (holder == ""){
        document.getElementById("interests").style.borderColor = "RED";
    }
    else{
        document.getElementById("interests").style.borderColor = "GREEN";
    }
}
function genderchanges(){
    holder = document.getElementById("Username").value;
    if (holder == ""){
        document.getElementById("Username").style.borderColor = "RED";
    }
    else{
        document.getElementById("Username").style.borderColor = "GREEN";
    }
}

function osubmit(){
    aname=document.getElementById("name").value;
    uname=document.getElementById("Username").value;
    pass=document.getElementById("pass").value;
    email=document.getElementById("email").value;
    address=document.getElementById("address").value;
    interests=document.getElementById("interests").value;
    gender=document.getElementById("gender").value;
   
    document.getElementById("outName").innerHTML="Name: "+name;
    document.getElementById("outUsername").innerHTML="Userame: "+uname;
    document.getElementById("outPass").innerHTML="Password: "+pass;
    document.getElementById("outEmail").innerHTML="Email: "+email;
    document.getElementById("outAddress").innerHTML="Address: "+address;
    document.getElementById("outInterests").innerHTML="Interest/s: "+interests;
    document.getElementById("outGender").innerHTML="Gender: "+gender;
}

function oreset(){
    document.getElementById("name").value="";
    document.getElementById("Username").value="";
    document.getElementById("pass").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
    document.getElementById("interests").value="";
    document.getElementById("gender").value="";
}
