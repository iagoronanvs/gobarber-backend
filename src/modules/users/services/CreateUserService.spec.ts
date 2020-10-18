import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new appointment', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'Jhon Doe',
      email: 'jhon@example.com',
      password: 'password',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('jhon@example.com');
  });

  it('should not be able to create a new user with same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    await createUserService.execute({
      name: 'Jhon Doe',
      email: 'jhon@example.com',
      password: 'password',
    });

    expect(
      createUserService.execute({
        name: 'Jhon Doe',
        email: 'jhon@example.com',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
