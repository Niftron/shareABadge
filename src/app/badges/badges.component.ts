import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NIFTRON, TokenType, CreateBadgeModel, NiftronConfig } from 'niftron-sdk';


@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  niftrons;
  constructor(private router: Router) { }

  ngOnInit() {

    this.getBalance();

  }

  async testSDK() {
    try {
      const testResponse = await NIFTRON.user.testTransfer();
      this.getBalance();
      console.log(testResponse);
    } catch (e) {
      console.log(e);
    }
  }

  async getBalance() {
    NIFTRON.user.getNiftronCreditBalance()
      .then((res: any) => {
        console.log(res);
        this.niftrons = res;
      })
      .catch((err) => {
        console.log('err' + err);
      });
  }

  async createBadge() {
    const createBadgeModel: CreateBadgeModel = {
      tokenName: 'CBS2020',
      tokenType: TokenType.SFT,
      tokenData: JSON.stringify({ 'Organizer': 'Niftron' }),
      tokenCount: 2,
      previewImageUrl: 'https://www.colomboblockchainsummit.lk/images/CBS2_logo2x.png',
    };

    await NIFTRON.tokenBuilder
      .createBadge(createBadgeModel)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err' + err);
      });

  }

  goToTransferPage(id: number): void {
    this.router.navigateByUrl('/transferBadge/' + id);
  }

}
