import { IsNotEmpty, IsNumberString } from "class-validator";

export class ReviewDto {

    @IsNumberString()
    reviewId: number;

    @IsNumberString()
    userId: number;

    @IsNumberString()
    gameId: number;

    @IsNotEmpty()
    reviewDate: Date;

    @IsNotEmpty()
    reviewRating: number;

    @IsNotEmpty()
    reviewText: string;

    @IsNotEmpty()
    reviewTitle: string;
}
