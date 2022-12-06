

  const reviewsfactory=(name,id)=>{
  return{  name,
    id}
  }

const reviews1 = reviewsfactory('bad',10);
const reviews2 = reviewsfactory('good',11);

console.log(reviews2);
