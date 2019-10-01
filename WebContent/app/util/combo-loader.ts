import {RpIntercomService} from '../framework/rp-intercom.service';
import {RpHttpService} from '../framework/rp-http.service';
import {RpReferences} from '../framework/rp-references';
declare var jQuery: any;
// RP Application Spedific 
import {ClientUtil} from '../util/rp-client.util';

export class ComboLoader {

  _util: ClientUtil = new ClientUtil();
  _comboobj = { "value": "", "caption": "" };
  array = [{ "value": "", "caption": "" }];

  constructor(private ics: RpIntercomService, private ref: RpReferences, private http: RpHttpService) {
  }

  loadCombo() {
    this.getCarrierAreaList();
    this.getCarrierCountryList();

  }

  //get lov3 refs for carriers' combo...
  getCarrierAreaList() {
    this.http.doGet(this.ics._apiurl + 'serviceCarrier/getcarrierarealist').subscribe(
      response => {
        if (response != null && response != undefined) {
          this.ref._lov3.ref011 = response.data;
        } else {
          this.ref._lov3.ref011 = this.array;
        }

      },
      error => {

        //alert(error);
      },
      () => { }
    );
  }
  getCarrierCountryList() {
    this.http.doGet(this.ics._apiurl + 'serviceCarrier/getcarriercountrylist').subscribe(
      response => {
        if (response != null && response != undefined) {
          this.ref._lov3.ref012 = response.data;
        } else {
          this.ref._lov3.ref012 = this.array;
        }

      },
      error => {

        //alert(error);
      },
      () => { }
    );
  }
  //end of get lov3 refs for carriers' combo...

}
