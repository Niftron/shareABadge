
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
      projectKey: 'GCVBUIXIIV3WPZ4YPMVKSKEYZMKZPIWSLPS52QBUTNMQQABKADRHL7JP',
      secretKey: 'SBKAETY5WKUI6EVHL55LNHTWJ5OQHILH7SXV2HXWK6CPWBYJZCUW2GPD',
    };

    const niftron: NIFTRON = new NIFTRON(niftronConfig);

    niftron.initialize();
  }




}
