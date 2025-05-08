import { Worker } from './worker.assembler';

describe('Worker', () => {
  it('should create an instance', () => {
    expect(new Worker()).toBeTruthy();
  });
});
