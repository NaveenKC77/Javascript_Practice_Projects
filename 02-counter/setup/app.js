

var count =0;
const counter=document.querySelector(".count");
const btns =document.querySelectorAll(".btn");

btns.forEach((item => {
  item.addEventListener('click',e=>{
    const styles = e.currentTarget.classList;
    if(styles.contains('increase')){
      count+=1;
    }
    else if(styles.contains('decrease')){
      count-=1;
    }
    else{
      count=0;
    }
        counter.textContent=count;

        if (count > 0) {
          counter.style.color = "green";
        }
        if (count < 0) {
          counter.style.color = "red";
        }
        if (count === 0) {
          counter.style.color = "#222";
        }
        counter.textContent = count;
  })
}));
