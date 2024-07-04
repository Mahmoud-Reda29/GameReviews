export default class GameDisplay {
     constructor(fetcher) {
          this.fetcher = fetcher;
          this.init();
     }

     init() {
          this.setupEventListeners();
     }

     setupEventListeners() {
          const cat = document.querySelectorAll('.nav-link');
          cat.forEach((link) => {
               link.addEventListener('click', (event) => {
                    cat.forEach((e) => e.classList.remove('active'));
                    event.currentTarget.classList.add('active');
                    const category = event.currentTarget.innerText.toLowerCase();
                    this.displayGamesByCategory(category);
               });
          });

          const closeBtn = document.getElementById('btnClose');
          closeBtn.addEventListener('click', () => {
               $('.specificGameSection').hide(300);
          });
     }

     async displayGamesByCategory(category) {
          const games = await this.fetcher.fetchGamesByCategory(category);
          const rowBody = document.getElementById('rowBody');
          let box = '';

          games.forEach((game) => {
               box += `<div class="col-md-3 gy-5">
                 <div class="card h-100 text-white">
                     <div class="card-body">
                         <img src=${game.thumbnail} class="img-fluid w-100 pb-2" />
                         <div class="d-flex justify-content-between">
                             <h5 class="card-title">${game.title}</h5>
                             <p class="tag">Free</p>
                         </div>
                         <p class="card-text text-center text-wrap">
                             ${game.short_description}
                         </p>
                     </div>
                     <div class="card-footer pb-0 d-flex justify-content-between">
                         <p class="badge">${game.genre}</p>
                         <p class="badge">${game.platform}</p>
                         <p class="gameId d-none">${game.id}</p>
                     </div>
                 </div>
             </div>`;
          });

          rowBody.innerHTML = box;
          this.addCardEventListeners();
     }

     addCardEventListeners() {
          const cards = document.querySelectorAll('.card');
          let specificGame = document.querySelector('.specificGameSection')
          cards.forEach((card) => {
               card.addEventListener('click', (event) => {
                    const gameId = event.currentTarget.querySelector('.gameId').innerText;
                    // const gameId = event.currentTarget.getAttribute('data-id');
                    specificGame.classList.remove('d-none');
                    $('.specificGameSection').fadeIn(1000);
                    this.displaySpecificGame(gameId);
               });
          });
     }

     async displaySpecificGame(id) {
          const game = await this.fetcher.fetchGameById(id);
          const specificGame = document.getElementById('specificGame');
          const box = `<div class="col-md-12 d-flex">
             <div class="col-md-4">
                 <img src="${game.thumbnail}" class="img-fluid w-100 me-2" alt="" />
             </div>
             <div class="col-md-8 text-white px-4">
                 <h3>Title: ${game.title}</h3>
                 <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
                 <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                 <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
                 <p class="small">${game.description}</p>
                 <a class="btn btn-outline-warning" target="_blank" href=${game.game_url}>Show Game</a>
             </div>
         </div>`;

          specificGame.innerHTML = box;
     }
}
