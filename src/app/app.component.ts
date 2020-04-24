import {Component, OnInit} from '@angular/core';
import {PageTitleService} from "@wavenet/ngx-wvn-core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wvn-angular-demo';

  constructor(private titleService: PageTitleService) {
  }

  ngOnInit(): void {
    this.titleService.init();
  }
}
