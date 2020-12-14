import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-badge',
  templateUrl: './transfer-badge.component.html',
  styleUrls: ['./transfer-badge.component.css']
})
export class TransferBadgeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {

  }


  goToBadgesPage(): void {
    this.router.navigateByUrl('/badges');
  }

}
