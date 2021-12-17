import { Component } from '@angular/core';

import  { Platform } from '@ionic/angular';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  countryCode: String = '34';
  number: String = '606818422';
  message: String = 'Hello from Ionic';

  url: String = 'https://wa.me/' + this.countryCode + this.number + "?text=" + this.message;

  constructor(private platform: Platform, 
              private fingerPrint: FingerprintAIO,
              private uniqueDeviceID: UniqueDeviceID,
              private uid: Uid,
              private androidPermissions: AndroidPermissions,
              private sim: Sim
              ) {
  }

  // when uninstall the app secret will be removed
  registerBiometricSecret() {
      this.fingerPrint.registerBiometricSecret({
        title: 'Scanner Title',
        subtitle: 'This SubTitle',
        description: "Some biometric description",
        cancelButtonTitle: 'Cancel',          
        disableBackup: true,
        fallbackButtonTitle: 'FB Back Button',
        secret: (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)
      })
      .then((result: any) => {        
        alert("Successfully Authenticated!");         
      })
      .catch((error: any) => {
        console.log(error);
        alert("Match not found!");
      });
  }
  
  loadBiometricSecret() {
    this.fingerPrint.isAvailable().then((result: any) => {
      console.log(result);

      this.fingerPrint.loadBiometricSecret({
        title: 'Scanner Title',
        subtitle: 'This SubTitle',
        description: "Some biometric description",
        cancelButtonTitle: 'Cancel',          
        disableBackup: true,
        fallbackButtonTitle: 'FB Back Button'
      })
      .then((secret: any) => {        
        alert("Successfully Authenticated with secret: " + secret + "!");        
      })
      .catch((error: any) => {
        console.log(error);
        
        if (error.code === this.fingerPrint.BIOMETRIC_AUTHENTICATION_FAILED)        
          alert('Match not found!');

        if (error.code === this.fingerPrint.BIOMETRIC_SECRET_NOT_FOUND)
          this.registerBiometricSecret();
      }); 
    })
    .catch((error: any) => {
        console.log(error)
    });
  }

  async showFingerprintAuthDlg() {
    try {
      await this.platform.ready();

      this.loadBiometricSecret();
    } catch(exception) {
      console.error(exception);     
    }  
  }
  
  /*async showFingerprintAuthDlg() {
    try {
      await this.platform.ready();

      this.fingerPrint.isAvailable().then((result: any) => {
        console.log(result);
  
        this.fingerPrint.show({        
          title: 'Scanner Title',
          subtitle: 'This SubTitle',
          description: "Some biometric description",
          cancelButtonTitle: 'Cancel',          
          disableBackup: true,
          fallbackButtonTitle: 'FB Back Button'          
        })
        .then((result: any) => {
          console.log(result);
          alert("Successfully Authenticated!");           
        })
        .catch((error: any) => {
          console.log(error);
          alert("Match not found!");
        }); 
      })
      .catch((error: any) => {
          console.log(error)
      });
    } catch(exception) {
      console.error(exception);
    }
  }*/

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        alert(uuid);
        
      })
      .catch((error: any) => {        
        alert("Error!" + error);
      });
  }

  getPermission() {
    this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then(res => {
      if(res.hasPermission){
        alert(this.getID_UID('UUID'));
      }else{
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_PHONE_STATE,
                                                    this.androidPermissions.PERMISSION.READ_PRIVILEGED_PHONE_STATE]).then(res => {
          alert("Persmission Granted Please Restart App!"); 
          
          alert(this.getID_UID('UUID'));
        }).catch(error => {
          alert("Error! "+error);
        });
      }
    }).catch(error => {
      alert("Error! "+error);
    });
  }
  
  getID_UID(type){
    if(type == "IMEI"){
      return this.uid.IMEI;
    }else if(type == "ICCID"){
      return this.uid.ICCID;
    }else if(type == "IMSI"){
      return this.uid.IMSI;
    }else if(type == "MAC"){
      return this.uid.MAC;
    }else if(type == "UUID"){
      return this.uid.UUID;
    }
  }

  getSim() {
    this.sim.hasReadPermission().then(
      (permission) => {       
       if (permission === true) {
        this.sim.getSimInfo().then(
          (info) => alert('Sim info: ' + info),
          (err) => alert('Unable to get sim info: ' + err)
        );
       }
      }
    );
  }
}
