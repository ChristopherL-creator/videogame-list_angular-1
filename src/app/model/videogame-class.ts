export class VideogameClass {

    name: string;
    publicationDate: number;
    genreGame: VideogameGenre;
    softwareHouse: string[];

    constructor(name: string, publicationDate: number, genreGame: VideogameGenre, softwareHouse: string[]){
        this.name = name;
        this.publicationDate = publicationDate;
        this.genreGame = genreGame;
        this.softwareHouse = softwareHouse;
    }

    get genre(): string{
        return getGenreString(this.genreGame);
    }

    static compareByName(a: VideogameClass, b: VideogameClass){
        return a.name.localeCompare(b.name);
    }

    static compareByDate(a: VideogameClass, b: VideogameClass){
        return a.publicationDate - b.publicationDate;
    }
}

export enum VideogameGenre {
    PLATFORM = 0,
    FPS = 1,
    STRATEGY = 2,
    PUZZLE = 3,
    SPORT = 4,
    ARCADE = 5,
    SIMULATION = 6
}

export function getGenreString(genre: VideogameGenre): string{
    switch (genre) {
        case VideogameGenre.PLATFORM:
        return 'Platform';
        case VideogameGenre.FPS:
        return 'Fps';
        case VideogameGenre.STRATEGY:
        return 'Strategy';
        default:
        return 'puzzle';
    }
}
