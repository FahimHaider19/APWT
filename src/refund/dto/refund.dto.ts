import { CustomerDTO } from "src/customer/dto/customer.dto";
import { GameDto } from "src/game/dto/game.dto";

export class RefundDto {
    refundId: number;
    cusomer: CustomerDTO;
    refundDate: Date;
    refundTotal: number;
    refundItem: GameDto;
    status: string;
}
