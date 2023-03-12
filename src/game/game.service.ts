import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameDto } from './dto/game.dto';
import { GameCategory } from './entities/game-category.entity';
import { GameImage } from './entities/game-image.entity';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private GameRepo: Repository<Game>,
    @InjectRepository(GameCategory)
    private GameCategory: Repository<GameCategory>,
    @InjectRepository(GameImage)
    private GameImageRepo: Repository<GameImage>,
  ) {}
  
  async create(GameDto: GameDto) {
    const game = new Game();
    const gameImages:Array<GameImage> = [];
    game.gameName = GameDto.gameName;
    game.gameDescription = GameDto.gameDescription;
    game.gamePrice = GameDto.gamePrice;
    game.gameRating = GameDto.gameRating;
    game.gameReleaseDate = GameDto.gameReleaseDate;
    // game.gameDeveloper = GameDto.gameDeveloper;
    game.gamePublisher = GameDto.gamePublisher;
    game.gameRating = GameDto.gameRating;
    game.gameReleaseDate = GameDto.gameReleaseDate;
    game.systemRequirments = GameDto.systemRequirments;
    game.isDlc = GameDto.isDlc;
    game.prerequisit = GameDto.prerequisit;

    for(let link of GameDto.GameImage){
      const gameImage = new GameImage();
      gameImage.link = link;
      gameImages.push(gameImage);
    }
    game.GameImage = gameImages;
    
    return this.GameRepo.save(game);
  }

  findAll() {
    return this.GameRepo.find({
        relations: {GameImage: true}
      }
    );
  }

  findOne(id: number) {
    return this.GameRepo.find(
      { 
        relations: {GameImage: true},
        where: {gameId: id}
      }
    );
  }

  update(id: number, GameDto: GameDto) {
    const game = new Game();
    const gameImages: Array<GameImage> = [];
    game.gameName = GameDto.gameName;
    game.gameDescription = GameDto.gameDescription;
    game.gamePrice = GameDto.gamePrice;
    game.gameRating = GameDto.gameRating;
    game.gameReleaseDate = GameDto.gameReleaseDate;
    // game.gameDeveloper = GameDto.gameDeveloper;
    game.gamePublisher = GameDto.gamePublisher;
    game.gameRating = GameDto.gameRating;
    game.gameReleaseDate = GameDto.gameReleaseDate;
    game.systemRequirments = GameDto.systemRequirments;
    game.isDlc = GameDto.isDlc;
    game.prerequisit = GameDto.prerequisit;

    for (let link of GameDto.GameImage) {
      const gameImage = new GameImage();
      gameImage.link = link;
      gameImages.push(gameImage);
    }
    game.GameImage = gameImages;

    return this.GameRepo.update(id, game);
  }

  remove(id: number) {
    return this.GameRepo.delete(id);
  }
}
