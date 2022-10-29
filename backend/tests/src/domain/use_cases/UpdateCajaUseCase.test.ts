import { Caja } from '../../../../src/features/cajero/domain/entities/Caja.entity';
import { UpdateCajaUseCase } from '../../../../src/features/cajero/domain/use_cases/UpdateCajaUseCase';
import { MockCajaRepository } from './GetCajaUseCase.test';

describe('Caso de uso que corresponde a la actualizacion del estado de la caja', () => {
  test('deberia actualizar el estado de la caja', async () => {
    const expectedResult = new Caja(1, 'Caja 1', 1, new Date());
    const cajaRepository = new MockCajaRepository();
    const updateCajaUseCase = new UpdateCajaUseCase(cajaRepository);
    const caja = await updateCajaUseCase.execute(1, 1);
    expect(caja).toEqual(expectedResult);
  });
});
