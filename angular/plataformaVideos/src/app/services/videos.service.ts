import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../models/Videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor(private http: HttpClient) { }
  private readonly baseUrl = "http://localhost:8080/videos"

  public getVideos():Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl);
  }

  public getVideoById(id: string):Observable<Video> {
    return this.http.get<Video>(this.baseUrl + '/' + id);
  }

  public postVideo(video: Video): Observable<Video> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<Video>(this.baseUrl,video,{headers});
  }

  public deleteVideo(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  public addLike(id:string): Observable<Video> {
    return this.http.patch<Video>(this.baseUrl + '/' + 'likes/'+ id,1);
  }

  public addDislike(id:string): Observable<Video> {
    return this.http.patch<Video>(this.baseUrl + '/' + 'dislikes/'+ id,1);
  }

  public addView(id:string): Observable<Video> {
    return this.http.patch<Video>(this.baseUrl + '/' + 'views/'+ id,1);
  }

  public addStars(id:string,cant:number):Observable<Video> {
    return this.http.patch<Video>(this.baseUrl + '/' + 'stars/'+ id,cant);
  }
}
