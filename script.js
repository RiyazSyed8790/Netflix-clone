
function toggleans1(){
    
        if(document.getElementById("answer1").style.display == 'none'){
          if(document.getElementById("answer2").style.display == 'block' || document.getElementById("answer3").style.display == 'block' || document.getElementById("answer4").style.display == 'block' || document.getElementById("answer5").style.display == 'block' || document.getElementById("answer6").style.display == 'block'){
            /*Others none section*/
            document.getElementById("answer2").style.display = 'none';
            document.getElementById("answer3").style.display = 'none';
            document.getElementById("answer4").style.display = 'none';
            document.getElementById("answer5").style.display = 'none';
            document.getElementById("answer6").style.display = 'none';
            /*End*/
            document.getElementById("answer1").style.display = 'block';
            document.getElementById("answer1").classList.add("effect");
            document.getElementById("sign1").innerText="X";
            /*Others + section*/
            document.getElementById("sign2").innerText="+";
            document.getElementById("sign3").innerText="+";
            document.getElementById("sign4").innerText="+";
            document.getElementById("sign5").innerText="+";
            document.getElementById("sign6").innerText="+";
            /*End*/
          }
          else{
            document.getElementById("answer1").style.display = 'block';
            document.getElementById("answer1").classList.add("effect");
            document.getElementById("sign1").innerText="X"; 
          }
        }
        else{
          document.getElementById("answer1").style.display = 'none';
          document.getElementById("sign1").innerText="+";
        }
      
}
function toggleans2(){
    
    if(document.getElementById("answer2").style.display == 'none'){
      if(document.getElementById("answer1").style.display == 'block' || document.getElementById("answer3").style.display == 'block' || document.getElementById("answer4").style.display == 'block' || document.getElementById("answer5").style.display == 'block' || document.getElementById("answer6").style.display == 'block'){
          /*Others None section*/
          document.getElementById("answer1").style.display = "none";
          document.getElementById("answer3").style.display = 'none';
          document.getElementById("answer4").style.display = 'none';
          document.getElementById("answer5").style.display = 'none';
          document.getElementById("answer6").style.display = 'none';
          /*End*/
          document.getElementById("answer2").style.display = 'block';
          document.getElementById("answer2").classList.add("effect");
          document.getElementById("sign2").innerText="X";
          /*Others + section*/
          document.getElementById("sign1").innerText="+";
            document.getElementById("sign3").innerText="+";
            document.getElementById("sign4").innerText="+";
            document.getElementById("sign5").innerText="+";
            document.getElementById("sign6").innerText="+";
            /*End*/
      }
      else{
        document.getElementById("answer2").style.display = 'block';
        document.getElementById("answer2").classList.add("effect");
        document.getElementById("sign2").innerText="X";
      }
    }
    else{
      document.getElementById("answer2").style.display = 'none';
      document.getElementById("sign2").innerText="+";
    }
  
}
function toggleans3(){
    
    if(document.getElementById("answer3").style.display == 'none'){
      if(document.getElementById("answer1").style.display == 'block' || document.getElementById("answer2").style.display == 'block' || document.getElementById("answer4").style.display == 'block' || document.getElementById("answer5").style.display == 'block' || document.getElementById("answer6").style.display == 'block' ){
          /*Others none section*/
          document.getElementById("answer1").style.display = "none";
          document.getElementById("answer2").style.display = 'none';
          document.getElementById("answer4").style.display = 'none';
          document.getElementById("answer5").style.display = 'none';
          document.getElementById("answer6").style.display = 'none';
          /*End*/
          document.getElementById("answer3").style.display = 'block';
          document.getElementById("answer3").classList.add("effect");
          document.getElementById("sign3").innerText="X";
          /*Others + section*/
          document.getElementById("sign2").innerText="+";
            document.getElementById("sign1").innerText="+";
            document.getElementById("sign4").innerText="+";
            document.getElementById("sign5").innerText="+";
            document.getElementById("sign6").innerText="+";
         /*End*/ 
      }
      else{
        document.getElementById("answer3").style.display = 'block';
        document.getElementById("answer3").classList.add("effect");
        document.getElementById("sign3").innerText="X";
        
      }
    }
    else{
      document.getElementById("answer3").style.display = 'none';
      document.getElementById("sign3").innerText="+";
    }
  
}
function toggleans4(){
    if(document.getElementById("answer4").style.display == 'none'){
        if(document.getElementById("answer2").style.display == 'block' || document.getElementById("answer3").style.display == 'block' || document.getElementById("answer1").style.display =='block' || document.getElementById("answer5").style.display == 'block' || document.getElementById("answer6").style.display == 'block' ){
          /*Others none section*/
          document.getElementById("answer2").style.display = 'none';
          document.getElementById("answer3").style.display = 'none';
          document.getElementById("answer1").style.display = 'none';
          document.getElementById("answer5").style.display = 'none';
          document.getElementById("answer6").style.display = 'none';
          /*End*/
          document.getElementById("answer4").style.display = 'block';
          document.getElementById("answer4").classList.add("effect");
          document.getElementById("sign4").innerText="X";
          /*Others + section*/
          document.getElementById("sign2").innerText="+";
          document.getElementById("sign3").innerText="+";
          document.getElementById("sign1").innerText="+";
          document.getElementById("sign5").innerText="+";
          document.getElementById("sign6").innerText="+";
          /*End*/
        }
        else{
          document.getElementById("answer4").style.display = 'block';
          document.getElementById("answer4").classList.add("effect");
          document.getElementById("sign4").innerText="X"; 
        }
      }
      else{
        document.getElementById("answer4").style.display = 'none';
        document.getElementById("sign4").innerText="+";
      }
}
function toggleans5(){
    if(document.getElementById("answer5").style.display == 'none'){
        if(document.getElementById("answer2").style.display == 'block' || document.getElementById("answer3").style.display == 'block' || document.getElementById("answer1").style.display =='block' || document.getElementById("answer4").style.display == 'block' || document.getElementById("answer6").style.display == 'block'){
          /*Others none section*/
          document.getElementById("answer2").style.display = 'none';
          document.getElementById("answer3").style.display = 'none';
          document.getElementById("answer1").style.display = 'none';
          document.getElementById("answer4").style.display = 'none';
          document.getElementById("answer6").style.display = 'none';
          /*End*/
          document.getElementById("answer5").style.display = 'block';
          document.getElementById("answer5").classList.add("effect");
          document.getElementById("sign5").innerText="X";
          /*Others + section*/
          document.getElementById("sign2").innerText="+";
          document.getElementById("sign3").innerText="+";
          document.getElementById("sign1").innerText="+";
          document.getElementById("sign4").innerText="+";
          document.getElementById("sign6").innerText="+";

          /*End*/
        }
        else{
          document.getElementById("answer5").style.display = 'block';
          document.getElementById("answer5").classList.add("effect");
          document.getElementById("sign5").innerText="X"; 
        }
      }
      else{
        document.getElementById("answer5").style.display = 'none';
        document.getElementById("sign5").innerText="+";
      }
}
function toggleans6(){
    if(document.getElementById("answer6").style.display == 'none'){
        if(document.getElementById("answer2").style.display == 'block' || document.getElementById("answer3").style.display == 'block' || document.getElementById("answer1").style.display =='block' || document.getElementById("answer4").style.display == 'block' || document.getElementById("answer5").style.display == 'block'){
          /*Others none section*/
          document.getElementById("answer2").style.display = 'none';
          document.getElementById("answer3").style.display = 'none';
          document.getElementById("answer1").style.display = 'none';
          document.getElementById("answer4").style.display = 'none';
          document.getElementById("answer5").style.display = 'none';
          /*End*/
          document.getElementById("answer6").style.display = 'block';
          document.getElementById("answer6").classList.add("effect");
          document.getElementById("sign6").innerText="X";
          /*Others + section*/
          document.getElementById("sign2").innerText="+";
          document.getElementById("sign3").innerText="+";
          document.getElementById("sign1").innerText="+";
          document.getElementById("sign4").innerText="+";
          document.getElementById("sign5").innerText="+";

          /*End*/
        }
        else{
          document.getElementById("answer6").style.display = 'block';
          document.getElementById("answer6").classList.add("effect");
          document.getElementById("sign6").innerText="X"; 
        }
      }
      else{
        document.getElementById("answer6").style.display = 'none';
        document.getElementById("sign6").innerText="+";
      }
}