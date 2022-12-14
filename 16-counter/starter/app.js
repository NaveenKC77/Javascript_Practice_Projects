//get Elemnet

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element
  }
  throw new Error(`Please check the ${selection} selector . Such element doesn't exist`)
}

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

this.increase=this.increase.bind(this);
this.decrease=this.decrease.bind(this);
this.reset=this.reset.bind(this);

this.increaseBtn.addEventListener('click',this.increase);
this.decreaseBtn.addEventListener('click',this.decrease);
this.resetBtn.addEventListener('click',this.reset);

  }
  increase(){
    this.value++;
    this.valueDOM.textContent=this.value;

  }
  decrease(){
    this.value--;
    this.valueDOM.textContent=this.value;

  }
  reset(){
    this.value=0;
    this.valueDOM.textContent=this.value;

  }
}

const counter1=new Counter(getElement(".first-counter"),0);
const counter2=new Counter(getElement(".second-counter"),100);
const counter3=new Counter(getElement(".third-counter"),200);
//setup class
//initialize element and value
//DOM manipulation

//bind class's function to buttons

//addEventListener

//increase,decrease and reset function

//setup objects for counter
