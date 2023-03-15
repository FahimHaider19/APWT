import { IsDate, IsNotEmpty, MinLength } from "class-validator";
import { GameDto } from "src/game/dto/game.dto";

export class NewsDto {
    newsId: number;

    @IsNotEmpty()
    @MinLength(5)
    newsTitle: string;

    @IsNotEmpty()
    @MinLength(20)
    newsDescription: string;

    @IsNotEmpty()
    @IsDate()
    newsDate: Date;
}
