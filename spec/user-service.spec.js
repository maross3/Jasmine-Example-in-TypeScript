"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("../src/user-service");
describe("getting users from the user service", function () {
    var userService;
    var admin = { 'name': 'admin' };
    beforeEach(function () {
        userService = new user_service_1.UserService();
    });
    it('should be defined', function () {
        expect(userService.getUsers()).toBeDefined();
    });
    it('should return an array', function () {
        expect(userService.getUsers()).toEqual(jasmine.arrayContaining([]));
    });
    it('should return the admin test object { name: admin }', function () {
        expect(userService.getUsers()[0]).toEqual(admin);
    });
});
//# sourceMappingURL=user-service.spec.js.map