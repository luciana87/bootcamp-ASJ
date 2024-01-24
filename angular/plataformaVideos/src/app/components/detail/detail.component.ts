import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from '../../models/Videos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  constructor(private serviceVideos: VideosService,private router:ActivatedRoute, private router2: Router,private sanitizer: DomSanitizer){
  }

  idVid:any;
  likeFlag:boolean = false;
  dislikeFlag:boolean = false;
  starsFlag:boolean = false;
  avgStars:any = 0;

  video = {
    id: '',
    url:'',
    category: '',
    title: '',
    description: '',
    views: 0,
    likes: 0,
    dislikes: 0,
    stars: 0,
    starsVotes: 0
  }
  
  ngOnInit(): void {
    this.router.params.subscribe((data) => {
      this.idVid = data['idVid'];
      if(this.idVid !== undefined) {
        this.getVideoById(this.idVid);
      }
    })
  }

  getVideoById(id:string){
    this.serviceVideos.getVideoById(id).subscribe((data:Video) => {
      console.log("Obtuviste")
      console.log(data)
      this.video = data;
      if(this.video.stars !== 0 && this.video.starsVotes !== 0) {
        this.avgStars = (this.video.stars / this.video.starsVotes).toFixed(2)
      }
    })
  }

  deleteVideo(id:string) {
    this.serviceVideos.deleteVideo(id).subscribe((data) => {
      console.log(data)
    })
    this.router2.navigate(['/main']);
  }

  addLike(id:string) {
    this.serviceVideos.addLike(id).subscribe((data:Video) => {
      console.log("Agregaaste un like" + data)
      this.getVideoById(id);
    })
    this.likeFlag = true;
  }

  addDislike(id:string) {
    this.serviceVideos.addDislike(id).subscribe((data:Video) => {
      console.log("Agregaste un dislike" + data)
      this.getVideoById(id);
    })
    this.dislikeFlag = true;
  }

  addStars(id:string, cant:number) {
    this.serviceVideos.addStars(id,cant).subscribe((data:Video) => {
      console.log("Sumaste " + cant + " estrellas a");
      console.log(data);
      this.getVideoById(id);
    })
    this.starsFlag = true;
  }
}
