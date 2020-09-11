import { Component, OnInit, OnDestroy } from '@angular/core';

import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  constructor(
    private alertService: AlertService
  ) { }

  notification: any;

  ngOnInit(): void {
    this.alertService.currentMessage.subscribe(noti => {
      this.notification = noti;
      if (this.notification !== null && this.notification.text) {
        document.getElementById('notification').style.animation = 'notiShow 2s 1';
        setTimeout(() => {
          document.getElementById('notification').style.animation = 'none';
        }, 3000);
      }

    });
  }

  ngOnDestroy() {
    console.log('noti destroy');
  }

  // showNoti(){
  //   document.getElementById('notification').style.animation = 'notiShow 3s 1';
  //   setTimeout(() => {
  //     document.getElementById('notification').style.animation = 'none';
  //   }, 3000);
  // }

  hiddenNoti() {
    document.getElementById('notification').style.animation = 'none';
  }

}
