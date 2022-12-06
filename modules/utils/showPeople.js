const showPeople =(people)=>{
  const newPeople= people.map((person)=>{
    const{name,job}=person;
    return `<p> ${name} <em> ${job}</em></p>`
  }).join(" ");
return newPeople;

}

export default showPeople;
