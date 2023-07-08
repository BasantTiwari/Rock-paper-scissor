let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let win_modal=document.querySelector(".win_modal");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let random=Math.floor(Math.random()*3);
let score=JSON.parse(localStorage.getItem("sc"));
let scoreElem=document.getElementById("score");
let com_score=JSON.parse(localStorage.getItem("pcscore"));
let pcscoreElem=document.getElementById("com_score");
let rulbtn=document.querySelector(".btn_rule");
let rulemodal=document.querySelector(".rule_modal");
let ruleimage=document.querySelector(".rule_img");

if(com_score)
{
    pcscoreElem.innerText=com_score;
}

if(score)
{
   scoreElem.innerText=score;
}
let count=0;
let count2=0;
con.forEach((element,index) => {
    element.addEventListener("click",()=>{
        user.style.opacity="1";
      con.forEach(item=>{
        item.style.display="none";
      });
      element.style.display="block";
      element.classList.add("show");
      setTimeout(()=>{
            machine.style.opacity="1";
            setTimeout(()=>{
                computer[random].style.display="block";
                computer[random].classList.add("right");
                

            },1000);

      },500);
      
      setTimeout(()=>{
        
        if(random==index)
        {
            win_modal.style.display="grid";
            winner.innerText="Match Draw";
            
        }
        else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1)
            {
               win_modal.style.display="grid";
               winner.innerText="You Win";
               count=score;
               count++;
               scoreElem.innerText=count;
               localStorage.setItem("sc",JSON.stringify(count));
            } 
        else
        {
           win_modal.style.display="grid";
           winner.innerText="You loose";
           count2=com_score;
               count2++;
               pcscoreElem.innerText=count2;
               localStorage.setItem("pcscore",JSON.stringify(count2));
            
        }

        if (count >= 3 || count2 >= 3) {
            count = 0;
            count2 = 0;
            scoreElem.innerText = count;
            pcscoreElem.innerText = count2;
            localStorage.setItem("sc", JSON.stringify(count));
            localStorage.setItem("pcscore", JSON.stringify(count2));
        }

   

   },1500);
    })
    
});

play.addEventListener("click",()=>{
    window.location.reload();
})
rulbtn.addEventListener("click",()=>{
    rulemodal.style.display="flex";
  setTimeout(()=>{
    ruleimage.style.transform="translateY(0)";
  },400);
})
let close=document.querySelector(".close")
close.addEventListener("click",()=>{
    
    ruleimage.style.transform="translateY(-200%)";
    setTimeout(()=>{
        rulemodal.style.display="none";
    },400);
})