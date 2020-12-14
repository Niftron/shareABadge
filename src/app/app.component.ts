
import { Component, OnInit } from '@angular/core';
import { NiftronConfig, NIFTRON } from 'niftron-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  title = 'Share A Badge';
  ngOnInit(): void {
    console.log('AppComponent');

    const niftronConfig: NiftronConfig = {
      projectKey: 'GAV6PIK545MIPBTO66QNCDCU5R6ZQT3UW6CXIDQX75KJKOIX2A7NO5QM',
      secretKey: 'SAOP4EAUIZMV3WVOA73GGLQ5SX63YA4RSA4CHBBK2SH5MPQERLVZWWLA',
    };

    const niftron: NIFTRON = new NIFTRON(niftronConfig);

    niftron.initialize();
  }




}
