import { Request, Response } from 'express';
import { CreateCajaUseCase } from '../../domain/use_cases/CreateCajaUseCase';

export class CreateCajaController {
  constructor(private readonly createCajaUseCase: CreateCajaUseCase) {}

  async createCaja(req: Request, res: Response) {
    const body = req.body;

    const cajaNueva = body.caja;

    const caja = await this.createCajaUseCase.execute(cajaNueva);

    res.json(caja);
  }
}
