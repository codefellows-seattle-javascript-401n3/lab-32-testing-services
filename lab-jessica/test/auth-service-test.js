'use strict';

describe('Auth Service', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then(token => {
        expect(token).toEqual('test token');
      });

      this.$window.localStorage.removeItem('token');
      this.$rootScope.$apply();
    });

    it('should return "Error token not found"', () => {
      this.authService.getToken()
      .catch(err => {
        expect(err).toEqual(new Error('token not found'));
      });

      this.$rootScope.$apply();
    });
  });

  describe('authService.logout()', () => {
    it('should remove token from localStorage', () => {
      this.$window.localStorage.setItem('token', 'testertoken');
      expect(this.$window.localStorage.token).toEqual('testertoken');

      this.authService.logout()
      .then(() => {
        expect(this.$window.localStorage.token).toBeUndefined();
      });

      this.$rootScope.$apply();
    });
  });
});
