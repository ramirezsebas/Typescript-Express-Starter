import { DataSource } from 'typeorm';
import { Caja } from '../../domain/entities/Caja.entity';

export interface CajaRemoteDataSource {}

class CajaRemoteDataSourceImpl implements CajaRemoteDataSource {
  constructor(private dataSource: DataSource) {}
}
