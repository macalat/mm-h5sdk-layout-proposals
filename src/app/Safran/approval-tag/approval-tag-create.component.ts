import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approval-tag-create',
  template: `
  <div class="main-container">
    <div class="row-clear-fix list-detail-container">
      <div class="twelve columns data-container">
        <div class="detail-form-container">
          <form #f="ngForm" class="detail-form">
            <section class="detail-head padding-left-zero">
              <div class="row-clear-fix">
                <div class="twelve columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Certification</label>
                      <input soho-lookup type="text" class="input-sm" value="CERT" />
                    </div>
                    <div class="field">
                      <label class="label">Delivery number</label>
                      <input type="text" class="input-sm" value="DLIX" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="detail-body padding-left-zero">
              <div class="row-clear-fix margin-bottom-lg">
                <div class="twelve columns">
                  <div class="m3-field">
                    <div class="field">
                      <label class="label">Ref order no</label>
                      <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'">
                        <option>RORC</option>
                      </select>
                      <input type="text" class="input-sm margin-right-xs margin-left-xs" value="RIDN" />
                      <input type="text" class="input-sm margin-right-xs" value="RIDL" />
                      <input type="text" class="input-xs" value="RIDX" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="navigation-buttons">
              <button soho-button="tertiary" icon="cancel" (click)="cancel()">Cancel</button>
              <button soho-button="primary" icon="confirm" (click)="confirm()">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  `,
  styles: []
})
export class ApprovalTagCreateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  cancel(): void {
    this.location.back();
  }

  confirm(): void {
    this.router.navigate(['/approval-tag/main/detail/add']);
  }
}