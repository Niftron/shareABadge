
import { Component, OnInit } from '@angular/core';
import { NiftronConfig, NIFTRON } from 'niftron-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Share A Badge';

  constructor() {

  }

  ngOnInit(): void {

    const niftronConfig: NiftronConfig = {
      projectKey: 'GDVZAYOHZAZX4U73N6A4ZRIW3S4P43G4R4EUTCVYDSKYAER5V5FWQGTJ',
      secretKey: 'SAS6SI3LK6ZITYMP77IHVYHJQMEKHINN2KQ6X4LVJVVT4XQRWXURRWAL',
    };

    const niftron: NIFTRON = new NIFTRON(niftronConfig);

    niftron.initialize();
  }




}
