import { IsDate, IsNotEmpty, IsNumber, Min } from "class-validator";
import { NewsDto } from "src/news/dto/news.dto";
import { GameCategoryDto } from "./game-category.dto";
import { GameImageDto } from "./game-image.dto";

export class GameDto {
  gameId: number;

  @IsNotEmpty()
  gameName: string;

  gameDescription: string;

  @IsNotEmpty()
  @IsNumber()
  gamePrice: number;

  @IsNotEmpty()
  @IsNumber()
  discount: number;

  @IsNotEmpty()
  @IsNumber()
  gameRating: number;

  @IsNotEmpty()
  gameReleaseDate: Date;

  // gameDeveloper: string;
  
  @IsNotEmpty()
  gamePublisher: string; //object....many to one

  @IsNotEmpty()
  systemRequirments: string;
  gameImage: any[]; //one to many
  gameCategory: GameCategoryDto[]; //one to many
  gameNews: NewsDto[]; //one to many
  gameReviews: number; //one to many
  isDlc: boolean;
  prerequisit: number; //inner table relationship, another game
}
