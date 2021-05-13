
const d=document;
const personName0 = d.getElementById(`personName0`);
const personName1 = d.getElementById(`personName1`);
const personName2 = d.getElementById(`personName2`);
const personName3 = d.getElementById(`personName3`);
const personName4 = d.getElementById(`personName4`);
const personName5 = d.getElementById(`personName5`);
const personName6 = d.getElementById(`personName6`);
const personName7 = d.getElementById(`personName7`);
const personName8 = d.getElementById(`personName8`);
const personName9 = d.getElementById(`personName9`);
const personInfo0 = d.getElementById(`personinfo0`);
const personInfo1 = d.getElementById(`personinfo1`);
const personInfo2 = d.getElementById(`personinfo2`);
const personInfo3 = d.getElementById(`personinfo3`);
const personInfo4 = d.getElementById(`personinfo4`);
const personInfo5 = d.getElementById(`personinfo5`);
const personInfo6 = d.getElementById(`personinfo6`);
const personInfo7 = d.getElementById(`personinfo7`);
const personInfo8 = d.getElementById(`personinfo8`);
const personInfo9 = d.getElementById(`personinfo9`);
const btn0=d.getElementById(`btn0`);
const btn1=d.getElementById(`btn1`);
const btn2=d.getElementById(`btn2`);
const btn3=d.getElementById(`btn3`);
const btn4=d.getElementById(`btn4`);
const btn5=d.getElementById(`btn5`);
const btn6=d.getElementById(`btn6`);
const btn7=d.getElementById(`btn7`);
const btn8=d.getElementById(`btn8`);
//იუზერების სახელის გამოტანა HTML-ში
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(data=>data.json())
.then(response=>{
   personName0.innerText = response[0].name;
   personName1.innerText = response[1].name;
   personName2.innerText = response[2].name;
   personName3.innerText = response[3].name;
   personName4.innerText = response[4].name;
   personName5.innerText = response[5].name;
   personName6.innerText = response[6].name;
   personName7.innerText = response[7].name;
   personName8.innerText = response[8].name;
   personName9.innerText = response[9].name;
}).catch(e=>{
   console.error(Error);
   console.log(e);
});
//იუზერების ინფორმაციის გამოტანა HTML-ში
let arry=[] 
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(data=>data.json())
.then(response=>{
 let pushArry=arry.push(response);
 let string=JSON.stringify(arry);
 let cutArry=string.split(",").join("\n.")
 personInfo0.innerText=cutArry.slice(2,418);
 personInfo1.innerText=cutArry.slice(419,835);
 personInfo2.innerText=cutArry.slice(836,1263);
 personInfo3.innerText=cutArry.slice(1264,1696);
 personInfo4.innerText=cutArry.slice(1697,2110);
 personInfo5.innerText=cutArry.slice(2111,2556);
 personInfo6.innerText=cutArry.slice(2557,2965);
 personInfo7.innerText=cutArry.slice(2966,3394);
 personInfo8.innerText=cutArry.slice(3395,3825);
 personInfo9.innerText=cutArry.slice(3826,4250)
}).catch(e=>{
   console.error(Error);
   console.log(e);
});
//იუზერების სახელზე კლიკით ინფორმაციის ჩვენება
//პირველი იუზერი
personName0.addEventListener(`click`,toglemenu0)
let aa=false
function toglemenu0(){
 if(aa){
    btn0.style.display=`none`
 }else{
   btn0.style.display=`block`
 }
 aa=!aa
};
//მეორე იუზერი
let aaa=false
personName1.addEventListener(`click`,toglemenu1)
function toglemenu1(){
   if(aaa){
      btn1.style.display=`none`
   }else{
     btn1.style.display=`block`
   }
   aaa=!aaa
  };
//მესამე იუზერი
let aaaa=false
personName2.addEventListener(`click`,toglemenu2)
function toglemenu2(){
   if(aaaa){
      btn2.style.display=`none`
   }else{
     btn2.style.display=`block`
   }
   aaaa=!aaaa
  };
//მეოთხე იუზერი
let aaaaa=false
personName3.addEventListener(`click`,toglemenu3)
function toglemenu3(){
   if(aaaaa){
      btn3.style.display=`none`
   }else{
     btn3.style.display=`block`
   }
   aaaaa=!aaaaa
  };
//მეხუთე იუზერი
let aaaaaa=false
personName4.addEventListener(`click`,toglemenu4)
function toglemenu4(){
   if(aaaaaa){
      btn4.style.display=`none`
   }else{
     btn4.style.display=`block`
   }
   aaaaaa=!aaaaaa
  };
//მეექვსე იუზერი
let aaaaaaa=false
personName5.addEventListener(`click`,toglemenu5)
function toglemenu5(){
   if(aaaaaaa){
      btn5.style.display=`none`
   }else{
     btn5.style.display=`block`
   }
   aaaaaaa=!aaaaaaa
  };
//მეშვიდე იუზერი
let aaaaaaaa=false
personName6.addEventListener(`click`,toglemenu6)
function toglemenu6(){
   if(aaaaaaaa){
      btn6.style.display=`none`
   }else{
     btn6.style.display=`block`
   }
   aaaaaaaa=!aaaaaaaa
  };
//მეერვე იუზერი
let aaaaaaaaa=false
personName7.addEventListener(`click`,toglemenu7)
function toglemenu7(){
   if(aaaaaaaaa){
      btn7.style.display=`none`
   }else{
     btn7.style.display=`block`
   }
   aaaaaaaaa=!aaaaaaaaa
  };
//მეეცხრე იუზერი
let aaaaaaaaaa=false
personName8.addEventListener(`click`,toglemenu8)
function toglemenu8(){
   if(aaaaaaaaaa){
      btn8.style.display=`none`
   }else{
     btn8.style.display=`block`
   }
   aaaaaaaaaa=!aaaaaaaaaa
  };
//მეათე იუზერი
let aaaaaaaaaaa=false
personName9.addEventListener(`click`,toglemenu9)
function toglemenu9(){
   if(aaaaaaaaaaa){
      btn9.style.display=`none`
   }else{
     btn9.style.display=`block`
   }
   aaaaaaaaaaa=!aaaaaaaaaaa
  };
  //მომხმარებლის პოსტები
  const back=d.getElementById(`back`);
 const hed=d.getElementById(`hed`);
const nexpage0=d.getElementById(`nex-page0`);
const nexpage1=d.getElementById(`nex-page1`);
const nexpage2=d.getElementById(`nex-page2`);
const nexpage3=d.getElementById(`nex-page3`);
const nexpage4=d.getElementById(`nex-page4`);
const nexpage5=d.getElementById(`nex-page5`);
const nexpage6=d.getElementById(`nex-page6`);
const nexpage7=d.getElementById(`nex-page7`);
const nexpage8=d.getElementById(`nex-page8`);
const nexpage9=d.getElementById(`nex-page9`);
const post0=d.getElementById(`post0`);
const post1=d.getElementById(`post1`);
const post2=d.getElementById(`post2`);
const post3=d.getElementById(`post3`);
const post4=d.getElementById(`post4`);
const post5=d.getElementById(`post5`);
const post6=d.getElementById(`post6`);
const post7=d.getElementById(`post7`);
const post8=d.getElementById(`post8`);
const post9=d.getElementById(`post9`);
fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post0.innerText=text 
});
function f(){
   hed.style.display=`none`;
   back.style.display=`block`
}
function showpost0(){
   post0.style.display=`block`;
   f()
};
nexpage0.addEventListener(`click`,showpost0);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=2`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post1.innerText=text 
});

function showpost1(){
   post1.style.display=`block`;
   f()
};
nexpage1.addEventListener(`click`,showpost1);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=3`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post2.innerText=text 
});

function showpost2(){
   post2.style.display=`block`;
   f()
};
nexpage2.addEventListener(`click`,showpost2);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=4`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post3.innerText=text 
});

function showpost3(){
   post3.style.display=`block`;
   f()
};
nexpage3.addEventListener(`click`,showpost3);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=5`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post4.innerText=text 
});

function showpost4(){
   post4.style.display=`block`;
   f()
};
nexpage4.addEventListener(`click`,showpost4);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=6`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post5.innerText=text 
});

function showpost5(){
   post5.style.display=`block`;
   f()
};
nexpage5.addEventListener(`click`,showpost5);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=7`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post6.innerText=text 
});

function showpost6(){
   post6.style.display=`block`;
   f()
};
nexpage6.addEventListener(`click`,showpost6);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=8`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post7.innerText=text 
});

function showpost7(){
   post7.style.display=`block`;
   f()
};
nexpage7.addEventListener(`click`,showpost7);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=9`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post8.innerText=text 
});

function showpost8(){
   post8.style.display=`block`;
   f()
};
nexpage8.addEventListener(`click`,showpost8);

fetch(`https://jsonplaceholder.typicode.com/posts?userId=10`)
.then(function(res){
   return res.text()
})
.then (function(text){
   post9.innerText=text
});

function showpost9(){
   post9.style.display=`block`;
   f()
};
nexpage9.addEventListener(`click`,showpost9);

  

