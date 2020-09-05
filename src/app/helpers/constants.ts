export class Constants {
public static API_KEY = '818f07c79abfdcef6abfb046cd897e86';
public static IMG_URL ='https://image.tmdb.org/t/p/original/'
    // API URLs
    public static BASE_URL = 'https://api.themoviedb.org/3'
    public static GET_TRENDING = `${Constants.BASE_URL}/trending/all/week?api_key=${Constants.API_KEY}&language=en-US`;
    public static NETFLIX_ORIGNALS = `${Constants.BASE_URL}/discover/tv?api_key=${Constants.API_KEY}&with_networks=213`;
    public static TOP_RATED = `${Constants.BASE_URL}/movie/top_rated/?api_key=${Constants.API_KEY}&language=en-US`;
    public static ACTION_MOVIES =   `${Constants.BASE_URL}/discover/movie?api_key=${Constants.API_KEY}&with_genres=28`;
    public static COMEDY_MOVIES =   `${Constants.BASE_URL}/discover/movie?api_key=${Constants.API_KEY}&with_genres=35`;
    public static HORROR_MOVIES =   `${Constants.BASE_URL}/discover/movie?api_key=${Constants.API_KEY}&with_genres=27`;
    public static ROMANCE_MOVIES =   `${Constants.BASE_URL}/discover/movie?api_key=${Constants.API_KEY}&with_genres=10745`;
    public static DOCUMENTARY_MOVIES =   `${Constants.BASE_URL}/discover/movie?api_key=${Constants.API_KEY}&with_genres=99`;
    
  
}
