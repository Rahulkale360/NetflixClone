import {
  Component,
  OnInit,
  Input,
  SystemJsNgModuleLoader,
} from "@angular/core";
import { AppService } from "../services/app.service";
import { Constants } from "../helpers/constants";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
})
export class MovieListComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() isLargeRow: boolean;
  constants = Constants;
  movies: any = [];
  videoId;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getMovies();
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  getWidth() {
    return window.innerWidth * 0.8;
  }

  getMovies() {
    this.appService.getMovies(this.url).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  getTrailer(id: any) {
    if (this.videoId) this.videoId = "";
    this.appService.getTrailerUrl(id).subscribe(
      (data: any) => {
        if (data && data.results) {
          let youtube = data.results.find((x) => x.site == "YouTube");
          if (youtube && youtube.key) this.videoId = youtube.key;
          else this.videoId = "";
        }
      },
      (error) => {
        this.videoId = "";
      }
    );
  }
}
