import e, { Application } from 'express';
import { CreateCajaController } from '../controllers/CreateCajaController';
import { GetCajaController } from '../controllers/GetCajaController';
import { UpdateCajaController } from '../controllers/UpdateCajaController';

export class CajaRouter {
  readonly endpoint = '/caja';

  constructor(
    private readonly getCajaController: GetCajaController,
    private readonly updateCajaController: UpdateCajaController,
    private readonly createCajaController: CreateCajaController
  ) {}

  public routes(app: Application): void {
    app.route(this.endpoint).post(this.createCajaController.createCaja);

    app
      .route(this.endpoint + '/:id')
      .get(this.getCajaController.getCaja)
      .put(this.updateCajaController.updateCaja);
  }
}
