import Ember from 'ember';

export default Ember.Controller.extend({
  loadPlugin: function(){
    Ember.$.getScript('assets/PixelSocket.js');
    Ember.$.getScript('assets/main.js');
    console.log('init');
  }.on('init')
});
