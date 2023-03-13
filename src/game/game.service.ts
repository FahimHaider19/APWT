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
    private GameRepo: Repository<Game>
  ) {}
  
  async create(GameDto: GameDto) {
    const game = new Game();
    // let images:GameImage[] = [];
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
    game.discount = GameDto.discount;
    // for(let i=0; i<GameDto.gameImage.length; i++){
    //   const gameImage = new GameImage();
    //   gameImage.link = GameDto.gameImage[i].link;
    //   images.push(gameImage);
    // }
    GameDto.gameImage.forEach(gameImageDto => {
      const gameImage = new GameImage();
      gameImage.link = gameImageDto.link;
    });
    // game.gameImage = images;
    
    return this.GameRepo.save(game);
  }

  findAll() {
    return this.GameRepo.find({
      relations: { gameImage: true, gameCategory: true, gameNews: true, gameReviews: true }
    }
    );
  }

  findAllInfo() {
    return this.GameRepo.find();
  }

  findOne(id: number) {
    return this.GameRepo.find(
      { 
        relations: {gameImage: true, gameCategory: true, gameNews: true, gameReviews: true},
        where: {gameId: id}
      }
    );
  }

  findOneInfo(id: number) {
    return this.GameRepo.find({ where: { gameId: id } });
  }

  update(id: number, GameDto: GameDto) {
    const game = new Game();
    // const gameImages: Array<GameImage> = [];
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

    // for (let gameImageDto of GameDto.gameImage) {
    //   const gameImage = new GameImage();
    //   gameImage.link = gameImageDto.link;
    //   gameImages.push(gameImage);
    // }
    // game.gameImage = gameImages;

    return this.GameRepo.update(id, game);
  }

  remove(id: number) {
    return this.GameRepo.delete(id);
  }
}
