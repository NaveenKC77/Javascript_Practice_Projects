const container = document.querySelector(".container");

const display = (followers) => {

  container.innerHTML = followers.map((follower) => {
    const {
      login,
      html_url,
      avatar_url,
      id
    } = follower;
    return `
     <article class='card'>
       <img src="${avatar_url}" alt='person' />
         <h4>${login}</h4>
       <a href="${html_url}" target ="_blank" class="btn">view profile</a>
     </article>
     `
  }).join("");
}

export default display
