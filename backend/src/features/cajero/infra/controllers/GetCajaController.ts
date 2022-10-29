import { Request, Response } from 'express';
import { GetCajaUseCase } from '../../domain/use_cases/GetCajaUseCase';

export class GetCajaController {
  constructor(private readonly getCajaUseCase: GetCajaUseCase) {}

  async getCaja(req: Request, res: Response) {
    const { idCaja } = req.params;
    const caja = await this.getCajaUseCase.execute(+idCaja);
    res.json(caja);
  }
}
