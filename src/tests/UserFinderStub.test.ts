import { User, UserService, UserRepository } from '../UserService';

class RepositoryStub implements UserRepository {

    constructor(private usersStubsList: User[]) { }

    save: (user: User) => User;

    findUserByName(name: string): User[] {
        return this.usersStubsList;
    }
    findUserBySureName(surename: string): User[] {
        return this.usersStubsList;
    }




}

describe('The User Finder', () => {
    it('searches user by name first', () => {
        const aName = 'irrelevant-name';
        const aUser = new User(aName, '');
        const repository = new RepositoryStub([aUser]);
        const userFinder = new UserService(repository);

        const usersFounded = userFinder.findUser(aName);

        expect(usersFounded.length).toBe(1);
        expect(usersFounded[0]).toBe(aUser);
        expect(usersFounded[0].getName()).toBe('irrelevant-name');

    })

    it('searches user by surename first', () => {
        const aName = 'irrelevant-name';
        const aUser = new User('', aName);
        const repository = new RepositoryStub([aUser]);
        const userFinder = new UserService(repository);

        const usersFounded = userFinder.findUser(aName);

        expect(usersFounded.length).toBe(1);
        expect(usersFounded[0]).toBe(aUser);
        expect(usersFounded[0].getSurename()).toBe('irrelevant-name');

    })
})