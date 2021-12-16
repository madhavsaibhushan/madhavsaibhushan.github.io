import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, EventEmitter } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  imgList = [];
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  // isCollapsed: boolean = false;
  isShow: boolean;
  regFormOpen: boolean;
  arrowShow: boolean;
  userIcon: boolean;
  docIcon: boolean;
  panShow: boolean;
  aadharShow: boolean;
  gstShow: boolean;
  iecodeShow: boolean;
  panimgList: any[];
  aadharimgList: any[];
  gstimgList: any[];
  iecodeimgList: any[];
  radioReg:boolean=false;
  ngAfterViewInit() {
    this.funbtn();
  }
  
  constructor() { } 

  // collapsed(event: any): void {
  //   // console.log(event);
  //   this.arrowShow = !this.arrowShow;
  // }
  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  // expanded(event: any): void {
  //   // console.log(event);
  //   this.arrowShow = true;
  // }
  secondTab(tabId: number) {
    debugger;
    document.getElementById('doc-link').classList.remove('DisabledTab');
    this.staticTabs.tabs[tabId].active = true;
    debugger;
    this.userIcon = !this.userIcon;
    this.docIcon = !this.docIcon;
    this.regFormOpen = false;
    // this.userIcon = true;
    // this.docIcon = true;
  } 
  funbtn() {
    document.getElementById('doc-link').classList.add('DisabledTab');
    debugger;
  }

  getFileDetails (event: { target: { files: string | any[]; }; }, value: string){
    let list = [];
    for (var i = 0; i < event.target.files.length; i++) {
      var name = event.target.files[i].name;
      var type = event.target.files[i].type;
      var size = event.target.files[i].size;
      var modifiedDate = event.target.files[i].lastModifiedDate;
      list.push({Name: name, Type: type});
      this.imgList = list;
    }
    if(value == 'pan'){
      debugger;
      this.panimgList = this.imgList;
      this.panShow = true;
    }
    else if(value == 'aadhar'){
      debugger;
      this.aadharimgList = this.imgList;
      this.aadharShow = true;
    }
    else if(value == 'gst'){
      debugger;
      this.gstimgList = this.imgList;
      this.gstShow = true;
    }
    else if(value == 'iecode'){
      debugger;
      this.iecodeimgList = this.imgList;
      this.iecodeShow = true;
    }
  }
  DeleteUploadFiles(value: string){
    if(value == 'pan'){
      debugger;
      this.panimgList = []
      this.panShow = false;
    }
    else if(value == 'aadhar'){
      debugger;
      this.aadharimgList = []
      this.aadharShow = false;
    }
    else if(value == 'gst'){
      debugger;
      this.gstimgList = []
      this.gstShow = false;
    }
    else if(value == 'iecode'){
      debugger;
      this.iecodeimgList = []
      this.iecodeShow = false;
    }
  }

  // radioNewReg(e){
  //   debugger    
  //   var type= e.target.value;
  //   var chkd= e.target.checked;
  //   if(type=='option1' && chkd)//New Registration
  //   {
  //   document.getElementById("Transaction").style.display="none";
  //   }
  //   if(type=='option2' && chkd)
  //   {
  //     document.getElementById("Transaction").style.display="block";
  //   }    
  // }
}
