'use strict';

require('./_thumbnail.scss');
//line 5 is attempting to explain to the linter where exactly gallery is being defined.
require('../create-gallery/create-gallery.js');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
  },
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deletePic = function() {
    $log.debug('thumbnailCtrl.deletePic');

    for(let i = 0; i < this.gallery.pic.length; i++) {
      let current = this.gallery.pic[i];
      if(current._id == this.spic._id[i]) {
        this.gallery.pics.splice(i, 1);
      }
    }
  };
  
}
