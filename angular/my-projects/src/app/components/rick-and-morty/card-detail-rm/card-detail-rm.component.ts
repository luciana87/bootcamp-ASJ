import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail-rm',
  templateUrl: './card-detail-rm.component.html',
  styleUrls: ['./card-detail-rm.component.css'],
  providers: [RickAndMortyServiceService]
})
export class CardDetailRmComponent implements OnInit {

  idCharacter: string | null = '';
  character: any = {};

  constructor(public service: RickAndMortyServiceService, public ruteo: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.ruteo.snapshot.paramMap.get('id'));
    
    this.idCharacter = this.ruteo.snapshot.paramMap.get('id');
    // console.log(this.idCharacter);
    
    if (this.idCharacter != null) {
      this.service.getPersonajeAPI(parseInt(this.idCharacter)).subscribe((data) => {
        this.character = data;
        console.log(data);
        
      })
    }
  }
}
