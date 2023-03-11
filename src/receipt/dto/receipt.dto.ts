import { ProductPRicesDto } from "./product-price.dto";

export class ReceiptDto {
    receiptId: number;
    userId: number;
    receiptDate: Date;
    receiptTotal: number;
    receiptItems: ProductPRicesDto[]; //new object game-price
}
