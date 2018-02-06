'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('meanJsApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
