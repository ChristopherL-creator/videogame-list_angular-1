export class VideogameClass {

    name: string;
    publicationDate: number;
    genreGame: VideogameGenre;
    softwareHouse: string[];
    isInProd: boolean;

    constructor(name: string, publicationDate: number, genreGame: VideogameGenre, softwareHouse: string[], isInProd: boolean = true){
        this.name = name;
        this.publicationDate = publicationDate;
        this.genreGame = genreGame;
        this.softwareHouse = softwareHouse;
        this.isInProd = isInProd;
    }

    get genre(): string{
        return getGenreString(this.genreGame);
    }

    isOutOfProd(): void{
      this.isInProd = false;
    }

    static compareByName(a: VideogameClass, b: VideogameClass){
        return a.name.localeCompare(b.name);
    }

    static compareByDate(a: VideogameClass, b: VideogameClass){
        return a.publicationDate - b.publicationDate;
    }

    static fromGameObj(dbObject: any){
        const game = new VideogameClass(dbObject.name, dbObject.publicationDate, dbObject.genreGame, dbObject.softwareHouse, dbObject.isInProd )
        return game
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
