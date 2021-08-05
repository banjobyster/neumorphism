document.getElementById("checked").checked = true;
var sliderList = document.getElementsByClassName("slide");
var sliderListRef = document.getElementsByClassName("slider");
var r = document.querySelector(':root');

for(var i=0;i<sliderList.length;i++){
  sliderList[i].style.marginTop = i*15+Math.pow(-1,i)*10+40+"px";
}

function themeChange(){
  var theme = document.getElementsByClassName("themeSymbol");
  console.log(theme[0].className);
  if(theme[0].className=="themeSymbol fa fa-sun-o"){
    r.style.setProperty('--lightT', '#ffffff02');
    r.style.setProperty('--shadowT', '#bebebe08');
    r.style.setProperty('--light', '#ffffff');
    r.style.setProperty('--shadow', '#bebebe');
    r.style.setProperty('--bg', '#e0e0e0');
    r.style.setProperty('--textCol', 'rgba(80,80,80,0.6)');
    theme[0].className="themeSymbol fa fa-moon-o"

  }else{
    r.style.setProperty('--lightT', '#39496102');
    r.style.setProperty('--shadowT', '#2d3b4d08');
    r.style.setProperty('--light', '#394961');
    r.style.setProperty('--shadow', '#2d3b4d');
    r.style.setProperty('--bg', '#334257');r.style.setProperty('--textCol', 'rgba(200,200,200,0.8)');
    theme[0].className="themeSymbol fa fa-sun-o"
  }
}

function tabSelector(i){
 var tabs = document.getElementsByClassName('tab');
 for(var j=0;j<tabs.length;j++){
   if(tabs[j].className=="tab on"){
     tabs[j].className="tab";
   }
 }
 tabs[i].className += " on";
}

function select(){
  var selectBtn = document.getElementById("select");
  if(selectBtn.className=="buttonClass"){
    selectBtn.className+=" select";
  }else{
    selectBtn.className="buttonClass"
  }
}

function checked(i){
  var option = document.getElementsByClassName("checked");
  for(var j=0;j<option.length;j++){
    option[j].className = "checked";
  }
  option[i].className = "checked cON"
}

function chi(i){
  sliderList[i].style.marginTop = sliderListRef[i].value*(1.5)+"px";
}