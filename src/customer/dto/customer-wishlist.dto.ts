import { IsInt, IsNotEmpty, IsNumberString } from "class-validator";
import { GameDto } from "src/game/dto/game.dto";
import { Game } from "src/game/entities/game.entity";
import { CustomerDTO } from "./customer.dto";

export class wishlistDTO{
    @IsInt()
    @IsNotEmpty()
    gameImageId: number;

    @IsNotEmpty()
    customerid: number;

    @IsNotEmpty()
    gameid:number;
}