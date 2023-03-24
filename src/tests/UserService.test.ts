import { User, UserService, UserRepository } from "../UserService";


class RepositorySpy implements UserRepository {
    public user: User;
    constructor(private usersStubsList: User[]) { }
    findUserByName(name: string): User[] {
        return this.usersStubsList;
    }
    findUserBySureName(surename: string): User[] {
        return this.usersStubsList;
    }

    save(user: User): void {
        this.user = user;
    }

}

describe('The User service', () => {
    it('saves user throughout the repository', () => {
        const repository = new RepositorySpy([]);
        const service = new UserService(repository);
        const user = new User('irrelevant-name', 'irrelevant-surename');
        service.updateName(user, 'more-irrelevant-name');

        expect(repository.user).toBe(user);

        const userFromRepo = repository.user;
        expect(userFromRepo.getName()).toBe('more-irrelevant-name');
    })
})

