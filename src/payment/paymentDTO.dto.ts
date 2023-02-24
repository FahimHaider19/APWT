export class PaymentDTO {
  paymentId: number;
  userId: number;
  amount: number;
  date: Date;
  paymentTo: number;
  verificationStatus: string;
}