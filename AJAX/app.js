// const xhr = new XMLHttpRequest();
//
// xhr.open('GET','./API/sample.txt');
//
//
// xhr.onreadystatechange= function(){
//   if(xhr.readyState === 4 && xhr.status === 200){
//     const text =document.createElement('p');
//     text.textContent=xhr.responseText;
//     document.body.appendChild(text);
//   }
//   else{
//     console.log({
//       status:xhr.status,
//       statusText:xhr.statusText,
//     })
//   }
// }
// xhr.send();

// const xhr = new XMLHttpRequest();
// const url='./API/people.json'
// xhr.open('GET',url);
//
//
//
// xhr.onreadystatechange= function(){
//   if(xhr.readyState === 4 && xhr.status === 200){
//   const data = JSON.parse(xhr.responseText);
//   console.log(data);
//   }
//   else{
//     console.log({
//       status:xhr.status,
//       statusText:xhr.statusText,
//     })
//   }
// }
// xhr.send();


const url ='./API/people.json';

// fetch(url).then((resp)=>{
//   //response object
//   //useful properties
//   // console.log(resp);
//   //convert response inro JSON cupidatat
//   //returns promise
//   return resp.json()
// }).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

fetch(url).then(response=>response.json()).then(data=>displayItems(data)).catch(err=>console.log(err));


const displayItems =(items)=>{
  const displayData=items.map((item)=>{
    const {name} = item;
    return `<p> ${name}</p>`
  }).join("");
  const element =document.createElement("div");
  element.innerHTML=displayData;
  document.body.appendChild(element);
}






























// const xhr = new XMLHttpRequest();
//
// xhr.open('GET','./API/sample.txt');
// xhr.onreadystatechange=function(){
//
// if(xhr.readyState ===4 && xhr.status === 200){
// const text =document.createElement('p');
// text.textContent=xhr.responseText;
// document.body.appendChild(text);
// }
// else{
//   console.log({
//     status:xhr.status,
//     text:xhr.statusText,
//   })
// }
// };
//
// xhr.send();
