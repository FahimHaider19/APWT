import { GameDto } from 'src/game/dto/game.dto';

export class ProductPRicesDto {
  productPriceId: number;
  game: GameDto;
  price: number;
}
