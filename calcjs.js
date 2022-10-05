function calc (){    
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value/100;
let status = " ";
let bmi =(weight / (height * height) );
bmi= bmi.toFixed(1)

if(bmi < 18.5){
 status="Underweight";
};

if(bmi >=18.5 && bmi < 25){
    status="Healthy";
};

if(bmi >=25 && bmi < 30){
    status="Overweight";
};

if(bmi >=30){
    status="Obese";
};




document.getElementById("result").innerHTML="Your Bmi is" + " " + bmi;
document.getElementById("status").innerHTML= "Status =" + " " + status;
}


function wiop(){
let planetn = document.getElementById("planets");
let splanet = planetn.value;
let result = "";
let rlw = document.getElementById("ab1").value;

if(splanet=="mercury"){
    result = rlw * 0.38;
  
} 
 if(splanet=="venus"){
    result = rlw * 0.91;
    
}
  if(splanet=="mars"){
    result = rlw * 0.38;
   
}


if(splanet=="jupiter"){
    result = rlw * 2.34;
  
}

 if(splanet=="saturn"){
    result = rlw * 0.93;
   
}

if(splanet=="uranus"){
    result = rlw * 	0.92;
  
}

if(splanet=="neptune"){
    result = rlw * 1.12;
  
}

document.getElementById("pr").innerHTML="Your Weight On";
document.getElementById("wr").innerHTML=splanet + " " + "is" + " " + result.toFixed(1) + "KG";


}