import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Token, NIFTRON, Transfer } from 'niftron-sdk';

@Component({
  selector: 'app-transfer-badge',
  templateUrl: './transfer-badge.component.html',
  styleUrls: ['./transfer-badge.component.css']
})
export class TransferBadgeComponent implements OnInit {
  transferToken: Token;
  receiverPK = '';

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.transferToken = this.appService.transferToken;
  }


  goToBadgesPage(): void {
    this.router.navigateByUrl('/badges');
  }

  async transfer() {
    await NIFTRON
      .tokenBuilder.transferToken(
        this.receiverPK, // receiverPk
        this.transferToken.assetCode,
        this.transferToken.assetIssuer,
        1, // amount
        'GATNGTO7TFARD3NMY3JT355Z6C6C6ZXVEVPNNB2PKHXHYRCAGXYTT67W', // senderPk
        undefined, // SenderKeypair
        true // for dev
      ).then((res: Transfer) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('err' + err);
      });
  }

}
