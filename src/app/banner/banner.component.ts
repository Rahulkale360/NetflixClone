import { Component, OnInit } from "@angular/core";
import { AppService } from "../services/app.service";
import { Constants } from "../helpers/constants";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  banners: any = [];
  movie: any;
  Constants = Constants;
  bannerUrl: string;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getBannerMovies();
  }

  getBannerMovies() {
    this.appService
      .getMovies(Constants.NETFLIX_ORIGNALS)
      .subscribe((data: any) => {
        this.banners = data;
        this.movie =
          data.results[Math.floor(Math.random() * data.results.length)];
        this.bannerUrl = `url(${Constants.IMG_URL}${this.movie.backdrop_path})`;
      });
  }

  truncate(str: string, n: number) {
    return str && str.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  getTitle() {
    if (!this.movie) return;

    if (this.movie.title) return this.movie.title;
    else if (this.movie.name) return this.movie.name;
    else this.movie.original_name;
  }
}
