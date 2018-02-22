import { Injectable } from "@angular/core";
import  movies  from "../assets/sample-movies";

@Injectable()
export class MoviesService {
  Movies: Array<Object> = movies;

  getMovies() {
    return movies;
  }

  getMovie(id: Number) {
    return this.Movies.filter(e => {
      if (this.Movies === movies) {
        return movies;
      }
    });
  }
}