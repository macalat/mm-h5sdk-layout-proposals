import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approval-tag-copy',
  template: `
  <div class="main-container">
    <div class="row-clear-fix list-detail-container">
      <div class="twelve columns data-container">
        <div class="detail-form-container">
          <form #f="ngForm" class="detail-form">
            <section class="detail-head padding-left-zero">
              <div class="row-clear-fix margin-bottom-lg">
                <div class="twelve columns">
                  <div class="m3-field">
                    <div class="field">
                      <div class="group-title">Copy from</div>
                    </div>
                    <div class="field">
                      <label class="label">Certification no</label>
                      <input type="text" class="input-sm" readonly disabled />
                    </div>
                    <div class="field">
                      <label class="label">Certification</label>
                      <input type="text" class="input-sm" readonly disabled />
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
                      <div class="group-title">Copy to</div>
                    </div>
                    <div class="field">
                      <label class="label">Certification</label>
                      <input type="text" soho-lookup class="input-sm" />
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
export class ApprovalTagCopyComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  cancel(): void {
    this.location.back();
  }

  confirm(): void {
    this.router.navigate(['/approval-tag/main/detail/copy']);
  }
}