(function() {
  'use strict';

  angular
    .module('mySampleAng')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
