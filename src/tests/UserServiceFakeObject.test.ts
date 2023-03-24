import { UserService } from './../UserService';
import { User, UserRepository } from './../UserService';
class InMeMoryRepository implements UserRepository {
    private users: User[] = [];

    findUserByName(name: string): User[] {
        return this.users.filter(u => u.getName() === name);
    }
    findUserBySureName(surename: string): User[] {
        return this.users.filter(u => u.getSurename() === surename);
    }
    save(user: User): void {
        this.users.push(user);
    }

}

describe("The User Service", () => {
    it('Saves user throughout the repository', () => {
        const repository = new InMeMoryRepository();
        const service = new UserService(repository);
        const user = new User('Jaime', 'irrelevant-surename');

        service.add(user);
        //service.updateName(user, 'Jaime');

        expect(repository.findUserByName('Jaime').length).toBe(1)
    })
})