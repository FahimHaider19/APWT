import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class PurchaseLogDto {
    // @IsNotEmpty()
    // @IsNumber()
    purchaseLogId: number;

    @IsNotEmpty()
    @IsDate()
    purchaseDate: Date;

    @IsNotEmpty()
    @IsNumber()
    paidAmount: number;
    
    payment: any;
}