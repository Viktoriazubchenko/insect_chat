let url = 'https://www.acefrontend.com/c/critter/feed.json';
let cards = document.querySelector('.chat-cards');
fetch(url)
  .then(response => response.json())
  .then((data) => {
    console.log(data.feed);
    data.feed.forEach((result) => {
        console.log(result.text);
        let card = `<div class='chat-card'>
        <div class='chat-card__user'>
        <img class='chat-card__avatar' src="${result.user.avatar}" alt="avatar">
        <p class='chat-card__username'>@${result.user.username}</p>
        </div>
        <div class='chat-card__time'>
        <p>${result.created_at.slice(0, 11)}</p>
        </div>
        <div class='chat-card__desc'>
        <p>${result.text}</p>
        </div>
        <div class='chat-card__likes'>
        <i class="far fa-heart"></i>
        <p>${result.likes}</p>
        </div>
        </div>`;
        cards.insertAdjacentHTML("beforeend", card);
  });
});


  
    



