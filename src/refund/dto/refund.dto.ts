export class RefundDto {
    refundId: number;
    userId: number;
    receiptId: number;
    refundDate: Date;
    refundTotal: number;
    refundItems: number[];
    status: string;
}
