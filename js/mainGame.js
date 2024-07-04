const apiKey = 'b39e2ef514mshcd614fc318800ffp1a2c8ajsn1dfbdc1fc2db'
const host = 'free-to-play-games-database.p.rapidapi.com'
const options = {
     method: 'GET',
     headers: {
          'x-rapidapi-key': `${apiKey}`,
          'x-rapidapi-host': `${host}`
     }
};
let cat = document.querySelectorAll('.nav-link')
console.log(cat)

for (let i = 0; i < cat.length; i++) {
     cat[i].addEventListener('click', function () {
          cat.forEach(function (e) {
               e.classList.remove('active');
          });
          this.classList.add('active');
          console.log(this.innerText.toLowerCase())
          displayGamebyCategory(this.innerText.toLowerCase())
     });
}

let closeBtn = document.getElementById('btnClose');
closeBtn.addEventListener('click', function () {
     $('.specificGameSection').hide(300)
})


// store id in hidden p
// let cards;

// async function displayGamebyCategory(category) {
//      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category.toLowerCase()}`;
//      try {
//           const response = await fetch(url, options);
//           const result = await response.json();
//           console.log(result);

//           let box = '';
//           for (let i = 0; i < result.length; i++) {
//                box += `<div class="col-md-3 gy-5">
//                 <div class="card h-100 text-white">
//                     <div class="card-body">
//                         <img src=${result[i].thumbnail} class="img-fluid w-100 pb-2" />
//                         <div class="d-flex justify-content-between">
//                             <h5 class="card-title">${result[i].title}</h5>
//                             <p class="tag">Free</p>
//                         </div>
//                         <p class="card-text text-center text-wrap">
//                             ${result[i].short_description}
//                         </p>
//                     </div>
//                     <div class="card-footer pb-0 d-flex justify-content-between">
//                         <p class="badge">${result[i].genre}</p>
//                         <p class="badge">${result[i].platform}</p>
//                     //     <p class="gameId d-none">${result[i].id}</p>
//                     </div>
//                 </div>
//             </div>`;
//           }

//           document.getElementById('rowBody').innerHTML = box;

//           // Add event listeners to the newly rendered cards
//           cards = document.querySelectorAll('.card');
//           cards.forEach(card => {
//                card.addEventListener('click', function () {
//                     const gameId = this.querySelector('.gameId').innerText;
//                     $('.specificGameSection').fadeIn(1000);
//                     displaySpecificGame(gameId);
//                });
//           });
//      } catch (error) {
//           console.error(error);
//      }
// }

// async function displaySpecificGame(id) {
//      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
//      try {
//           const response = await fetch(url, options);
//           const result = await response.json();
//           console.log(result);

//           let box = `<div class="col-md-12 d-flex">
//             <div class="col-md-4">
//                 <img src="${result.thumbnail}" class="img-fluid w-100 me-2" alt="" />
//             </div>
//             <div class="col-md-8 text-white px-4">
//                 <h3>Title: ${result.title}</h3>
//                 <p>Category: <span class="badge text-bg-info"> ${result.genre}</span></p>
//                 <p>Platform: <span class="badge text-bg-info">${result.platform}</span></p>
//                 <p>Status: <span class="badge text-bg-info">${result.status}</span></p>
//                 <p class="small">
//                     ${result.description}
//                 </p>
//                 <a class="btn btn-outline-warning" target="_blank" href=${result.game_url}>Show Game</a>
//             </div>
//         </div>`;
//           document.getElementById('specificGame').innerHTML = box;
//      } catch (error) {
//           console.error(error);
//      }
// }

displayGamebyCategory('mmorpg');
// $('.specificGameSection').fadeIn(1000);

// pass to function directly
// const apiKey = 'b39e2ef514mshcd614fc318800ffp1a2c8ajsn1dfbdc1fc2db';
// const host = 'free-to-play-games-database.p.rapidapi.com';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': apiKey,
//         'x-rapidapi-host': host
//     }
// };

let cards;

async function displayGamebyCategory(category) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category.toLowerCase()}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        let box = '';
        for (let i = 0; i < result.length; i++) {
            box += `<div class="col-md-3 gy-5">
                <div class="card h-100 text-white" data-id="${result[i].id}">
                    <div class="card-body">
                        <img src=${result[i].thumbnail} class="img-fluid w-100 pb-2" />
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">${result[i].title}</h5>
                            <p class="tag">Free</p>
                        </div>
                        <p class="card-text text-center text-wrap">
                            ${result[i].short_description}
                        </p>
                    </div>
                    <div class="card-footer pb-0 d-flex justify-content-between">
                        <p class="badge">${result[i].genre}</p>
                        <p class="badge">${result[i].platform}</p>
                    </div>
                </div>
            </div>`;
        }

        document.getElementById('rowBody').innerHTML = box;

        cards = document.querySelectorAll('.card');
        let specificGame = document.querySelector('.specificGameSection')
        cards.forEach(card => {
            card.addEventListener('click', function () {
                const gameId = card.getAttribute('data-id');
                specificGame.classList.remove('d-none');
                $('.specificGameSection').fadeIn(1000);
                displaySpecificGame(gameId);
            });
        });
    } catch (error) {
        console.error(error);
    }
}

async function displaySpecificGame(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        let box = `<div class="col-md-12 d-flex">
            <div class="col-md-4">
                <img src="${result.thumbnail}" class="img-fluid w-100 me-2" alt="" />
            </div>
            <div class="col-md-8 text-white px-4">
                <h3>Title: ${result.title}</h3>
                <p>Category: <span class="badge text-bg-info">${result.genre}</span></p>
                <p>Platform: <span class="badge text-bg-info">${result.platform}</span></p>
                <p>Status: <span class="badge text-bg-info">${result.status}</span></p>
                <p class="small">${result.description}</p>
                <a class="btn btn-outline-warning" target="_blank" href=${result.game_url}>Show Game</a>
            </div>
        </div>`;
        document.getElementById('specificGame').innerHTML = box;
    } catch (error) {
        console.error(error);
    }
}

displayGamebyCategory('mmorpg');
