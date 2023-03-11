import { Game } from "src/game/entities/game.entity";
import { CustomerDTO } from "./customer.dto";

export class LibraryDTO{
    libraryId: number;
    customer: CustomerDTO;
    game: Game;
}