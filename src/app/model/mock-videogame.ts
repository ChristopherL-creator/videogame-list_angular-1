import { VideogameClass, VideogameGenre } from "./videogame-class";

export const GAMES: VideogameClass[] = []; 

const game1 = new VideogameClass('Call of Duty', 2003, VideogameGenre.FPS, ['Infinity Ward', 'Aspyr Media']); 
const game2 = new VideogameClass('Spyro the Dragon', 1998, VideogameGenre.PLATFORM, ['Insomniac Games', 'Universal Interactive']); 
const game3 = new VideogameClass('Star Wars: Empire at War', 2006, VideogameGenre.STRATEGY, ['Petroglyph']); 
const game4 = new VideogameClass('Deponia', 2012, VideogameGenre.PUZZLE, ['Daedalic Entertainment']); 

GAMES.push(game1, game2, game3, game4);