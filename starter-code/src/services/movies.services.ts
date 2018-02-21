import { Injectable } from "@angular/core";
import movies from "../assets/sample-movies";

@Injectable()
export class MoviesServices {
    Movies: Array<Object> = movies;

    getMovies() {
        return movies;
    }

    getMovie(id: Number) {
        // this.Movies.filter(e => {
        //     if (this.Movies === movies) {
        //         return movies;
        //     }
        // })
    }
}