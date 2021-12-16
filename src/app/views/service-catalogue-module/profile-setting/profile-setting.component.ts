import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  locations: boolean = false;
  profile: boolean = true;
  custodian: boolean = false;
  rights: boolean = false;
  subscription: boolean = false;
  request: boolean = false;

  ngAfterViewInit() {
    this.funbtn();
  }

  constructor() { }

  ngOnInit(): void {
  }
  secondTab(tabId: number) {
    document.getElementById('second-link').classList.remove('DisabledTab');
 
    this.staticTabs.tabs[tabId].active = true;
  }
  thirdTab(tabId: number) {
    document.getElementById('third-link').classList.remove('DisabledTab');
    this.staticTabs.tabs[tabId].active = true;
  }
 fourthTab(tabId: number) {
    document.getElementById('four-link').classList.remove('DisabledTab');
    this.staticTabs.tabs[tabId].active = true;
  }
  fifthTab(tabId: number) {
    document.getElementById('five-link').classList.remove('DisabledTab');
    this.staticTabs.tabs[tabId].active = true;
  }
  sixTab(tabId: number) {
    document.getElementById('six-link').classList.remove('DisabledTab');
    this.staticTabs.tabs[tabId].active = true;
  }

    funbtn() {
    document.getElementById('second-link').classList.add('DisabledTab');
    document.getElementById('third-link').classList.add('DisabledTab');
    document.getElementById('four-link').classList.add('DisabledTab');
    document.getElementById('five-link').classList.add('DisabledTab');
    document.getElementById('six-link').classList.add('DisabledTab');
    debugger;
  }

}
