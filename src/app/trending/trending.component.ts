import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  private offset = 0;
  private perPage = 12;
  public result: any;
  public gifs: Array<any> = [];
  public isLoading: boolean = false;

  constructor(private giphyService : GiphyService) { }

  ngOnInit() {
    this.getTrendingGifs(this.offset,this.perPage);
  }

  getTrendingGifs(offset,limit){
    this.giphyService.getTrendingGifs(offset,limit).subscribe(
      (data) => {
        this.result = data;
        this.gifs = this.gifs.concat(this.result.data);
        this.isLoading = false;
      },
      (err) => console.log('Error', err),
      () => console.log('Respuesta', this.result)

    )
  }

  getMore(){
    this.isLoading = true;
    this.offset = this.offset + this.perPage;
    this.getTrendingGifs(this.offset,this.perPage);
  }

}
