'use strict';

let __API_URL__ = 'http:localhost://8000'
require('../app/service/auth-service.js')

describe('Auth Service', function(){

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(( $rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.logout()', () => {
    it('should remove token from localStorage', () => {
      this.authService.logout();
      this.authService.getToken()
      .then( token => {
        expect(token).toEqual(null);
      })

      // $window.localStorage.removeItem('token');
      // token = null;
      // return $q.resolve();

    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply();
    });
  });


});
