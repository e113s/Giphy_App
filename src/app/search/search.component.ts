import { Component, OnInit } from '@angular/core';
import { GiphyService} from '../giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private offset = 0;
  private perPage = 12;
  public results: any;
  public query: string;
  public gifs: Array<any> = [];
  public isLoading: boolean = true;

  constructor(private giphyServie: GiphyService) { }

  ngOnInit() {
  }

  searchGifs(offset,limit,query){
    this.giphyServie.searchGifs(offset,limit,query).subscribe(
      (data) => {
        this.results = data;
        this.gifs = this.gifs.concat(this.results.data);
        this.isLoading = false;
      },
      (err) => console.log('Error', err),
      () => console.log('Respuesta', this.results)
    )
  }

  search(query){ 
    this.query = query;
    this.isLoading = true;
    this.searchGifs(this.offset,this.perPage,this.query);
  }

  getMore(){
    this.isLoading = true;
    this.offset = this.offset + this.perPage;
    this.searchGifs(this.offset,this.perPage,this.query);
  }

}
