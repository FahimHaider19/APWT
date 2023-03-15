import { IsNotEmpty } from "class-validator";

export class GameCategoryDto {
    categoryId: number;
    @IsNotEmpty()
    categoryName: string;
}
