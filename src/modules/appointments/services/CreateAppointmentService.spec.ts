import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRespository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
    it('should be able to create a new appointment', async () => {
      const fakeAppointmentsRepository = new FakeAppointmentsRepository();
      const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);

      const appoinment = await createAppointment.execute({
        date: new Date(),
        provider_id: '1213131',
      });

      expect(appoinment).toHaveProperty('id');
      expect(appoinment.provider_id).toBe('1213131');
    });

    // it('should not be able to create two appointmnets on the same time', () => {
    //   expect()
    // });
});
