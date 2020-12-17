import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NIFTRON, TokenType, CreateBadgeModel, Token, NiftronAssetResponse } from 'niftron-sdk';
import { AppService } from '../app.service';


@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {
  niftrons: NiftronAssetResponse;
  tokens: Token[] = [];
  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {

    this.getBalance();
    this.getTokens();

  }

  async testSDK() {
    await NIFTRON.user.testTransfer()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err' + err);
      });
  }

  async getBalance() {
    NIFTRON.user.getNiftronCreditBalance()
      .then((res: NiftronAssetResponse) => {
        console.log(res);
        this.niftrons = res;
      })
      .catch((err) => {
        console.log('err' + err);
      });
  }

  async getTokens() {
    NIFTRON.user.getTokensByPublicKey()
      .then((res: Token[]) => {
        this.tokens = res;
        console.log(this.tokens);
      })
      .catch((err) => {
        console.log('err' + err);
      });
  }

  async createBadge() {
    const createBadgeModel: CreateBadgeModel = {
      tokenName: 'CBS - 2020',
      tokenType: TokenType.SFT,
      tokenData: JSON.stringify({ 'Organizer': 'Niftron' }),
      tokenCount: 10,
      previewImageUrl: 'https://i.ibb.co/VqWSJ2k/CBS-2020.png',
    };
    // previewImageUrl: 'https://www.colomboblockchainsummit.lk/images/niftron.png',

    await NIFTRON.tokenBuilder
      .createBadge(createBadgeModel)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err' + err);
      });

  }

  goToTransferPage(token: Token): void {
    this.appService.transferToken = token;
    this.router.navigateByUrl('/transferBadge/' + token.assetCode);
  }

}
