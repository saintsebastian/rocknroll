import Ember from 'ember';

export default Ember.Controller.extend({
  songCreationStarted: false,
  canCreateSong: Ember.computed('songCreationStarted', 'model.songs.length', function() {
    return this.get('songCreationStarted') || this.get('model.songs.length');
  }),
  actions: {
    updateRating: function(params) {
      var song = params.item;
      var rating = params.rating;
      song.set('rating', rating);
    },
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
  }
});
