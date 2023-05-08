exports.up = (pgm) => {
  pgm.createTable('playlistsSongs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    playlistId: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    SongId: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('playlistsSongs', 'fk_playlistsSongs.playlistId_playlists.id', 'FOREIGN KEY("playlistId") REFERENCES playlists(id) ON DELETE CASCADE');

  pgm.addConstraint('playlistsSongs', 'fk_playlistsSongs.SongId_songs.id', 'FOREIGN KEY("SongId") REFERENCES songs(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('playlistsSongs');
};
