import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { Video } from '../../models/Videos';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  constructor(private serviceVideo:VideosService){ }

  safeURL:any;
  videos:Video[] = [];
  title:string = '';
  category:string = '';
  categories: string[] = [];

  ngOnInit(): void {
    this.refreshVideos();
  }

  refreshVideos(){
    this.serviceVideo.getVideos().subscribe((data:Video[]) => {
      this.videos = data;
      const uniqueCategories = Array.from(new Set(this.videos.flatMap(video => video.category)));
      this.categories = uniqueCategories;
    })
  }

  addView(id:string) {
    this.serviceVideo.addView(id).subscribe((data: Video) => {
      console.log("Miraste el video" + data);
    })
  }

}
