import { Request, Response } from 'express';

import { UpdateCajaUseCase } from '../../domain/use_cases/UpdateCajaUseCase';

export class UpdateCajaController {
  constructor(private readonly updateCajaUseCase: UpdateCajaUseCase) {}

  async updateCaja(req: Request, res: Response) {
    const { idCaja } = req.params;
    const { estado } = req.body;

    const caja = await this.updateCajaUseCase.execute(+idCaja, +estado);
    res.json(caja);
  }
}
