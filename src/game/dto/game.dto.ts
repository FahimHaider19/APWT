import { NewsDto } from "src/news/dto/news.dto";
import { GameCategoryDto } from "./game-category.dto";
import { GameImageDto } from "./game-image.dto";

export class GameDto {
  gameId: number;
  gameName: string;
  gameDescription: string;
  gamePrice: number;
  discount: number;
  gameRating: number;
  gameReleaseDate: Date;
  // gameDeveloper: string;
  gamePublisher: string; //object....many to one
  systemRequirments: string;
  gameImage: GameImageDto[]; //one to many
  gameCategory: GameCategoryDto[]; //one to many
  gameNews: NewsDto[]; //one to many
  gameReviews: number; //one to many
  isDlc: boolean;
  prerequisit: number; //inner table relationship, another game
}
