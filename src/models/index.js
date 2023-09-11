
const Genres = require('./Genres');
const Actors = require('./Actors');
const Directors = require('./Directors');
const Movies = require('./Movies');

Movies.belongsToMany(Actors, { through: "MoviesActors" });
Movies.belongsToMany(Directors, { through: "MoviesDirectors" });
Movies.belongsToMany(Genres, { through: "MoviesGenres" });

