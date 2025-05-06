import { Reservation } from './reservation.assembler';

describe('Reservation', () => {
  it('should create an instance', () => {
    expect(new Reservation()).toBeTruthy();
  });
});
