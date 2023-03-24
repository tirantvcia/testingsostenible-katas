import { User } from './../UserService';
import { UserRepository, UserService } from './../UserService';

class RepositoryMock implements UserRepository {
    findUserByName: (name: string) => User[];
    findUserBySureName: (surename: string) => User[];
    z
    called = 0;
    save(user: User): void {
        this.called++;
    }

    verify() {
        if (this.called > 1) {
            throw new Error("save method was called more than once");
        }
    }
}

describe("The UserService", () => {
    it("save user throughout the repository", () => {
        const repository = new RepositoryMock();
        const service = new UserService(repository);
        const user = new User('JosePascual', 'Gimeno');

        service.updateName(user, "Jose Pascual");
        //service.updateName(user, "Jose Pascual");

        //expect(user.getName()).toBe("Jose Pascual")
        repository.verify();
    })
})