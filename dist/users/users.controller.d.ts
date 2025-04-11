import { Repository } from 'typeorm';
import { User } from 'shared-orm-library/dist/entities/user.entity';
export declare class UsersController {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
}
