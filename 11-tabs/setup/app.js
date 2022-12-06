const content = [{
    serial: 0,
    id: 'history',
    text: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`
  },
  {
    serial: 1,
    id: 'vision',
    text: `Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.
    list item
    list item
    list item`
  },
  {
    serial: 2,
    id: 'goals',
    text: `Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.`
  },
  {
      serial: 3,
      id: 'Info',
      text: `I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.`
    },

]


const section = document.querySelector(".tabs-content");
var tabs = document.querySelector(".tabs");
var sectionHeading = document.querySelector("#section-heading");
var sectionText = document.querySelector("#section-text");
var currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {

  // const item = content[currentItem];
  //
  // sectionHeading.innerText = item.id;
  // sectionText.innerText = item.text;
  showButtons();
  showContent(currentItem);
});

function showButtons() {
  const tabContent =
    content.map(function(item) {
      return `  <button  id="${item.id}"" class="btn" type="button" name="button"> ${item.id}
  </button>`
    })
    .join("");

  tabs.innerHTML = tabContent;

  const btns = document.querySelectorAll(".btn");


  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const btnId = e.currentTarget.id;


      const selectedItem = content.filter(function(contentItem) {
        if (contentItem.id === btnId) {
          return contentItem;
        }
      })
      const itemIndex = selectedItem[0].serial;
      showContent(itemIndex);

btns.forEach(function (clickedBtn){
  if (clickedBtn==btn){
    if (!clickedBtn.classList.contains("active")){
      btn.classList.add("active");
    }

  }
  else
  clickedBtn.classList.remove("active")
})


    })

  })
}

function showContent(currentItem) {

  const item = content[currentItem];

  sectionHeading.innerText = item.id;
  sectionText.innerText = item.text;
}
