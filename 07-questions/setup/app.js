//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question-box");

// const answers=document.querySelectorAll(".answer");
//
// const btns=document.querySelectorAll(".question-btn");
//
// const minusSign=document.querySelectorAll(".minus-icon");


// btns.forEach(function(btn){
//   btn.addEventListener('click',function (e){
//     const currentQuestion= e.currentTarget.parentElement.parentElement;
//     console.log(currentQuestion);
//     currentQuestion.classList.toggle("show-text");
//   })
// })


questions.forEach(question=>{

  const btn= question.querySelector(".question-btn");

  btn.addEventListener('click',()=>{

    questions.forEach(item=>{
      if(item!==question){
        item.classList.remove('show-text');
      }
    })

    question.classList.toggle('show-text');

  })

})
