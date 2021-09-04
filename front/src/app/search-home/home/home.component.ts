import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url = new FormControl('');
  constructor(private ss: SearchService) { }

  ngOnInit(): void {
  }

  analize() {
    
    if (this.url.value.length > 5) {
      this.ss.analizeUrl(this.url.value).subscribe( (res) => {
        console.log(res);
      })
    }

  }

}
