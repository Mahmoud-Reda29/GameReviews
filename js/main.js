import gameFetcher from './gameFetcher.js';
import gameDisplay from './gameDisplay.js';

const apiKey = 'b39e2ef514mshcd614fc318800ffp1a2c8ajsn1dfbdc1fc2db';
const host = 'free-to-play-games-database.p.rapidapi.com';

const fetcher = new gameFetcher(apiKey, host);
const display = new gameDisplay(fetcher);


display.displayGamesByCategory('mmorpg');
