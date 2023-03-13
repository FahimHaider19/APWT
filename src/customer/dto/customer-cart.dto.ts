import { IsNotEmpty, IsNumberString } from "class-validator";
import { Game } from "src/game/entities/game.entity";
import { CustomerDTO } from "./customer.dto";

export class cartDTO{

    @IsNumberString()
    gameImageId: number;

    @IsNotEmpty()
    customer: CustomerDTO;

    @IsNotEmpty()
    game: Game;
}