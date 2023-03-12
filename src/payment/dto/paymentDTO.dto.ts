export class PaymentDTO {
  paymentId: number;
  userId: number;
  amount: number;
  paymentMethod: string;
  date: Date;
  paymentTo: number;
  verificationStatus: string;
}