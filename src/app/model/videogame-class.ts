export class VideogameClass {

    id?: string;
    name: string;
    private readonly _publicationDate: number;
    genreGame: VideogameGenre;
    softwareHouse: string[];
    isInProd: boolean;

    constructor(name: string, publicationDate: Date = new Date() || 0, genreGame: VideogameGenre, softwareHouse: string[], isInProd: boolean = true){
        this.name = name;
        this._publicationDate = publicationDate.getTime();
        this.genreGame = genreGame;
        this.softwareHouse = softwareHouse;
        this.isInProd = isInProd;
    }

    get genre(): string{
        return getGenreString(this.genreGame);
    }
    get publicationDate(): Date{
        return new Date(this._publicationDate);
    }

    isOutOfProd(): void{
      this.isInProd = false;
    }

    static compareByName(a: VideogameClass, b: VideogameClass){
        return a.name.localeCompare(b.name);
    }

    static compareByDate(a: VideogameClass, b: VideogameClass){
        return a._publicationDate - b._publicationDate;
    }

    static fromGameObj(dbObject: any){
        const game = new VideogameClass(dbObject.name, new Date(dbObject.publicationDate * 1000), dbObject.genreGame, dbObject.softwareHouse, dbObject.isInProd )
        game.id = dbObject.id;
        return game
    }

    static toDbObj(game: VideogameClass): any{
      const dbObject: any = {};
      dbObject.id = game.id;
      dbObject.name = game.name;
      dbObject.publicationDate = game._publicationDate;
      dbObject.genre = game.genre;
      dbObject.softwareHouse = game.softwareHouse;
      dbObject.isInProd = game.isInProd;
      return dbObject;
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
