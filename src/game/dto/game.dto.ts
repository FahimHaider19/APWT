import { IsDate, IsNotEmpty, IsNumber, Min } from "class-validator";
import { NewsDto } from "src/news/dto/news.dto";
import { GameCategoryDto } from "./game-category.dto";
import { GameImageDto } from "./game-image.dto";

export class GameDto {
  gameId: number;

  @IsNotEmpty()
  @Min(3)
  gameName: string;

  @IsNotEmpty()
  @Min(20)
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
  @IsDate()
  gameReleaseDate: Date;

  // gameDeveloper: string;
  
  @IsNotEmpty()
  gamePublisher: string; //object....many to one

  @IsNotEmpty()
  systemRequirments: string;
  gameImage: GameImageDto[]; //one to many
  gameCategory: GameCategoryDto[]; //one to many
  gameNews: NewsDto[]; //one to many
  gameReviews: number; //one to many
  isDlc: boolean;
  prerequisit: number; //inner table relationship, another game
}
