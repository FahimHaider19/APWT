import { IsNotEmpty } from "class-validator";

export class GameImageDto {
  gameImageId: number;
  @IsNotEmpty()
  link: string;
}
