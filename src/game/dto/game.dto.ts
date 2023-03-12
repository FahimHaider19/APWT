import { News } from "src/news/entities/news.entity";
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
  GameImage: string[]; //one to many
  gameNews: News[]; //one to many
  gameReviews: number; //one to many
  isDlc: boolean;
  prerequisit: number; //inner table relationship, another game
}
