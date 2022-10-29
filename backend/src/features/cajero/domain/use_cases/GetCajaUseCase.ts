import { Caja } from '../entities/Caja.entity';
import { CajaRepository } from '../repositories/CajaRepository';

export class GetCajaUseCase {
  constructor(private readonly cajaRepository: CajaRepository) {}

  async execute(idCaja: number): Promise<Caja> {
    return await this.cajaRepository.getCaja(idCaja);
  }
}
