import { GetCajaUseCase } from '../../../../src/features/cajero/domain/use_cases/GetCajaUseCase';
import { CajaRepository } from '../../../../src/features/cajero/domain/repositories/CajaRepository';
import { Caja } from '../../../../src/features/cajero/domain/entities/Caja.entity';

export class MockCajaRepository implements CajaRepository {
  createCaja(caja: Caja): Promise<Caja> {
    return new Promise((resolve) => {
      resolve(caja);
    });
  }
  updateCajaState(estado: number): Promise<Caja> {
    return new Promise((resolve) => {
      resolve(new Caja(1, 'Caja 1', estado, new Date()));
    });
  }
  getCaja(codigo: number): Promise<Caja> {
    return new Promise((resolve) => {
      resolve(new Caja(1, 'Caja 1', 1, new Date()));
    });
  }
}

describe('Caso de uso que me permite obtener una caja segun el codigo', () => {
  test('deberia obtener una caja', async () => {
    const expectedResult = new Caja(1, 'Caja 1', 1, new Date());
    const cajaRepository = new MockCajaRepository();
    const getCajaUseCase = new GetCajaUseCase(cajaRepository);
    const caja = await getCajaUseCase.execute(1);
    expect(caja).toEqual(expectedResult);
  });
});
