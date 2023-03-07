import {UserService} from '../src/user-service';

// tes suite to validate the UserService.getUsers method
describe("getting users from the user service", () => {

    // user service to be initialized before each test
    let userService: UserService;

    // example admin object for method return validation
    const admin = {'name': 'admin'};

    // Instantiate the user service object
    beforeEach(() => {
        userService = new UserService();
    });

    // test
    it('should be defined', () => {
        expect(userService.getUsers()).toBeDefined();
    });

    it('should return an array', () => {
        expect(userService.getUsers()).toEqual(jasmine.arrayContaining([]));
    });

    it('should return the admin test object { name: admin }', () => {
        expect(userService.getUsers()[0]).toEqual(admin);
    });
});
