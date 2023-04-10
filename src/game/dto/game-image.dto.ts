import { IsNotEmpty } from "class-validator";

export class GameImageDto {
  gameImageId: number;
  link: string;
  game:any;
}
