import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameDto } from './dto/game.dto';
import { GameImages } from './entities/game-images.entity';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private GameRepo: Repository<Game>,
    protected GameImageRepo: Repository<GameImages>,
  ) {}
  
  async create(GameDto: GameDto) {
    const game = new Game();
    const gameImages:Array<GameImages> = [];
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

    for(let link of GameDto.gameImages){
      const gameImage = new GameImages();
      gameImage.link = link;
      gameImages.push(gameImage);
    }
    game.gameImages = gameImages;
    
    return this.GameRepo.save(game);
  }

  findAll() {
    return this.GameRepo.find(
      {
        relations: {gameImages: true}
      }
    );
  }

  findOne(id: number) {
    return this.GameRepo.find(
      { relations: {gameImages: true},
        where: {gameId: id}
      }
    );
  }

  update(id: number, GameDto: GameDto) {
    const game = new Game();
    const gameImages: Array<GameImages> = [];
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

    for (let link of GameDto.gameImages) {
      const gameImage = new GameImages();
      gameImage.link = link;
      gameImages.push(gameImage);
    }
    game.gameImages = gameImages;

    return this.GameRepo.update(id, game);
  }

  remove(id: number) {
    return this.GameRepo.delete(id);
  }
}
