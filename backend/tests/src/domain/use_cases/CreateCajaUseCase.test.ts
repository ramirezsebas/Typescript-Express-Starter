import { Caja } from '../../../../src/features/cajero/domain/entities/Caja.entity';
import { CreateCajaUseCase } from '../../../../src/features/cajero/domain/use_cases/CreateCajaUseCase';
import { MockCajaRepository } from './GetCajaUseCase.test';

describe('Caso de Uso que corresponde a la creacion de una caja', () => {
  test('deberia crear una caja', async () => {
    const expectedResult = new Caja(1, 'Caja 1', 1, new Date());
    const cajaRepository = new MockCajaRepository();
    const createCajaUseCase = new CreateCajaUseCase(cajaRepository);
    const caja = await createCajaUseCase.execute(expectedResult);
    expect(caja).toEqual(expectedResult);
  });
});
