import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Video } from '../../models/Videos';
import { VideosService } from '../../services/videos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private serviceVideo: VideosService,private router2:Router) {}

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
    starsVotes: 0,
  }

  postVideo(form:NgForm){
    if(form.valid){
      this.serviceVideo.postVideo(this.video).subscribe((data:Video) => {
        console.log("Se agrego" + data);
      })
      this.router2.navigate(['/main']);
    }
  }
}
