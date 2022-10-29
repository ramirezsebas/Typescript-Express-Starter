import { Caja } from '../entities/Caja.entity';
import { CajaRepository } from '../repositories/CajaRepository';

export class CreateCajaUseCase {
  constructor(private readonly cajaRepository: CajaRepository) {}

  async execute(caja: Caja): Promise<Caja> {
    return this.cajaRepository.createCaja(caja);
  }
}
