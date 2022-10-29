import { Caja } from '../../domain/entities/Caja.entity';
import { CajaRepository } from '../../domain/repositories/CajaRepository';
import { CajaRemoteDataSource } from '../data_sources/CajaRemoteDataSource';

class CajaRepositoryImpl implements CajaRepository {
  constructor(private readonly cajaRemoteDataSource: CajaRemoteDataSource) {}
  createCaja(caja: Caja): Promise<Caja> {
    throw new Error('Method not implemented.');
  }
  updateCajaState(codigo: number, estado: number): Promise<Caja> {
    throw new Error('Method not implemented.');
  }
  getCaja(codigo: number): Promise<Caja> {
    throw new Error('Method not implemented.');
  }
}
