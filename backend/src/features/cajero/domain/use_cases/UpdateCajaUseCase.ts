import { Caja } from '../entities/Caja.entity';
import { CajaRepository } from '../repositories/CajaRepository';

export class UpdateCajaUseCase {
  constructor(private readonly cajaRepository: CajaRepository) {}

  async execute(id: number, estado: number): Promise<Caja> {
    return this.cajaRepository.updateCajaState(id, estado);
  }
}
