import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newuser = new User();
    Object.assign(newuser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(newuser);
    return newuser;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((u) => u.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((u) => u.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    receivedUser.turnAdmin();
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
