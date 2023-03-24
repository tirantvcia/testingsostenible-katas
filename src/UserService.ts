export class User {
    getSurename(): string {
        return this.surename;
    }
    getName(): string {
        return this.name;
    }
    private name: string;
    private surename: string;

    setName(arg1: string) {
        this.name = arg1;
    }
    constructor(name: string, surname: string) {
        this.name = name;
        this.surename = surname;
    }
}

export interface UserRepository {

    findUserByName: (name: string) => User[];
    findUserBySureName: (surename: string) => User[];
    save: (user: User) => void;

}

export class UserService {

    add(user: User) {
        this.repository.save(user);
    }

    updateName(user: User, arg1: string) {
        user.setName(arg1)
        this.repository.save(user);
    }

    constructor(private repository: UserRepository) { }


    findUser(name: string): User[] {
        const usersFromRepo = this.repository.findUserByName(name);
        if (usersFromRepo != null && usersFromRepo.length > 0) {
            return usersFromRepo;
        } else {
            return this.repository.findUserBySureName(name);
        }
    }


}