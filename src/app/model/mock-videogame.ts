import { VideogameClass, VideogameGenre } from "./videogame-class";

export const GAMES: VideogameClass[] = []; 

const game1 = new VideogameClass('Call of Duty', 2003, VideogameGenre.FPS, ['Infinity Ward', 'Aspyr Media']); 
const game2 = new VideogameClass('Spyro the Dragon', 1998, VideogameGenre.PLATFORM, ['Insomniac Games', 'Universal Interactive']); 
const game3 = new VideogameClass('Star Wars: Empire at War', 2006, VideogameGenre.STRATEGY, ['Petroglyph']); 
const game4 = new VideogameClass('Deponia', 2012, VideogameGenre.PUZZLE, ['Daedalic Entertainment']); 

GAMES.push(game1, game2, game3, game4); 

export const GAMES2: VideogameClass[] = []; 

const game21 = new VideogameClass('Candy Crush', 2012, VideogameGenre.PUZZLE, ['Infinity Ward', 'Aspyr Media']); 
const game22 = new VideogameClass('Pou!', 2012, VideogameGenre.SIMULATION, ['Insomniac Games', 'Universal Interactive']); 
const game23 = new VideogameClass('Snake', 2000, VideogameGenre.ARCADE, ['Petroglyph']); 
const game24 = new VideogameClass('Pong', 1972, VideogameGenre.SPORT, ['Daedalic Entertainment']); 

GAMES2.push(game21, game22, game23, game24);