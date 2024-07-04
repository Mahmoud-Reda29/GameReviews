export default class GameFetcher {
     constructor(apiKey, host) {
          this.apiKey = apiKey;
          this.host = host;
          this.options = {
               method: 'GET',
               headers: {
                    'x-rapidapi-key': this.apiKey,
                    'x-rapidapi-host': this.host,
               }
          };
     }
     async fetchGamesByCategory(category) {
          const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category.toLowerCase()}`;
          try {
               const response = await fetch(url, this.options);
               const result = await response.json();
               console.log(result);
               return result;
          } catch (error) {
               console.error(error);
          }
     }
     async fetchGameById(id) {
          const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
          try {
               const response = await fetch(url, this.options);
               const result = await response.json();
               console.log(result);
               return result
          } catch (error) {
               console.error(error)
          }
     }
}