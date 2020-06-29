import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import AppointmentController from '../controllers/AppointmentController';

const appointmentsRouter = Router();
const appointmentController = new AppointmentController()

appointmentsRouter.use(ensureAuthentication);

appointmentsRouter.post('/', appointmentController.create);

export default appointmentsRouter;
