import { Caja } from '../entities/Caja.entity';

export interface CajaRepository {
  createCaja(caja: Caja): Promise<Caja>;
  updateCajaState(codigo: number, estado: number): Promise<Caja>;
  getCaja(codigo: number): Promise<Caja>;
}
