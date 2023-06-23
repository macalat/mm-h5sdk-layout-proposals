import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approval-tag-detail',
  template: `
  <div class="main-container">
    <div class="row-clear-fix list-detail-container">
      <div class="twelve columns data-container">
        <div class="detail-form-container">
          <form #f="ngForm" class="detail-form">
            <section class="detail-body padding-left-zero">
              <div class="row-clear-fix margin-bottom-lg">
                <div class="four columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Certification no</label>
                      <input type="text" class="input-sm" readonly disabled value="CENO" />
                    </div>
                    <div class="field">
                      <label class="label">Certificate</label>
                      <input type="text" class="input-sm" readonly disabled value="CERT" />
                    </div>
                    <div class="field">
                      <label class="label">Warehouse</label>
                      <input type="text" class="input-xs" readonly disabled value="WHLO" />
                    </div>
                    <div class="field">
                      <label class="label">Delivery number</label>
                      <input type="text" class="input-sm" readonly disabled value="DLIX" />
                    </div>
                  </div>
                </div>
                <div class="four columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Repl cert ref</label>
                      <input type="text" class="input-sm" readonly disabled value="OFNO" />
                    </div>
                    <div class="field">
                      <label class="label">Organisation address</label>
                      <input soho-lookup type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="ADK1" />
                    </div>
                    <div class="field">
                      <label class="label">Approval no</label>
                      <input type="text" class="input-mm" readonly disabled value="APNO" />
                    </div>
                    <div class="field">
                      <label class="label">New/Repair</label>
                      <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'" [readonly]="locked">
                        <option>CKNR</option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="four columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Replaced by</label>
                      <input type="text" class="input-sm" readonly disabled value="RCEN" />
                    </div>
                  </div>
                </div>
              </div>
          
              <div class="row-clear-fix margin-bottom-lg">
                <div class="twelve columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Ref order no</label>
                      <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'" [readonly]="locked">
                        <option>RORC</option>
                        <option></option>
                      </select>
                      <input type="text" class="input-sm margin-right-xs margin-left-xs" readonly disabled value="RIDL" />
                      <input type="text" class="input-sm margin-right-xs" readonly disabled value="RIRL" />
                      <input type="text" class="input-xs" readonly disabled value="RIRX" />
                    </div>
                    <div class="field">
                      <label class="label">Item number</label>
                      <input type="text" class="input-sm margin-right-xs" readonly disabled value="ITNO" />
                      <input type="text" class="input-xl margin-right-xs" readonly disabled value="ITDS" />
                      <input type="text" readonly disabled value="POPN" />
                    </div>
                    <div class="field">
                      <label class="label">Description 1</label>
                      <input type="text" class="input-xl" readonly disabled value="TEDS" />
                    </div>
                    <div class="field">
                      <label class="label">Customer P/N</label>
                      <input type="text" class="margin-right-xs" readonly disabled value="CPPN" />
                      <input type="text" readonly disabled value="CPP2" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row-clear-fix margin-bottom-xl">
                <div class="four columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Dely qty bU/M</label>
                      <input type="text" class="input-sm" readonly disabled value="DLQT" />
                    </div>
                    <div class="field">
                      <label class="label">Cust order no</label>
                      <input type="text" readonly disabled value="CUOR" />
                    </div>
                    <div class="field">
                      <label class="label">Cert status</label>
                      <select soho-dropdown class="input-sm" [cssClass]="'dropdown-short'" [readonly]="locked">
                        <option>CEST</option>
                        <option></option>
                      </select>
                    </div>
                    <div class="field">
                      <label class="label">Status/work</label>
                      <input soho-lookup type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="STAT" />
                    </div>
                    <div class="field">
                      <label class="label">Responsible</label>
                      <input soho-lookup type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="RESP" />
                      <span class="additional-info">RENM</span>
                    </div>
                    <div class="field">
                      <label class="label">Approval type</label>
                      <select soho-dropdown class="input-sm" [cssClass]="'dropdown-short'" [readonly]="locked">
                        <option>APPT</option>
                        <option></option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="four columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Appr/auth no</label>
                      <input type="text" class="input-sm" readonly disabled value="NOCA" />
                    </div>
                    <div class="field">
                      <label class="label">Draft</label>
                      <input soho-datepicker type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="ARLD" />
                    </div>
                    <div class="field">
                      <label class="label">Draft approval</label>
                      <input soho-datepicker type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="VADA" />
                    </div>
                    <div class="field">
                      <label class="label">Req E-sign</label>
                      <input soho-datepicker type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="RSID" />
                    </div>
                    <div class="field">
                      <label class="label">Printed</label>
                      <input soho-datepicker type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="SIDA" />
                    </div>
                  </div>
                </div>
              </div>
  
              <section class="row-clear-fix">
                <div class="four columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Serial numbers</label>
                    </div>
                    <soho-listview [selectable]="false">
                      <li soho-listview-item class="inline-item"><p class="listview-heading">00818SDFSEE1</p></li>
                      <li soho-listview-item class="inline-item"><p class="listview-heading">PPSOD SAD FISDF SAD</p></li>
                      <li soho-listview-item class="inline-item"><p class="listview-heading">LOQQA SA </p></li>
                      <li soho-listview-item class="inline-item"><p class="listview-heading">SUEO S D J!</p></li>
                      <li soho-listview-item class="inline-item"><p class="listview-heading">288SA</p></li>
                    </soho-listview>
                  </div>
                </div>
              </section>
            </section>

            <div class="navigation-buttons">
              <button soho-button="tertiary" icon="cancel" (click)="cancel()">Cancel</button>
              <button soho-button="primary" icon="confirm" (click)="confirm()">Confirm</button>
            </div>
          </form>
        </div>
      </div>
  </div>
  `,
  styles: []
})
export class ApprovalTagDetailComponent implements OnInit {
  action = 'Display';
  locked = true;
  queryParams: any;
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    this.action = this.queryParams.action;
  }

  cancel(): void {
    this.router.navigate(['/approval-tag/main']);
  }

  confirm(): void {
    this.router.navigate(['/approval-tag/main/detail-text']);
  }
}