import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { SohoMessageService } from 'ids-enterprise-ng';
import { SohoAlertDirective } from 'ids-enterprise-ng/lib/alert';

@Directive({
  selector: '[fieldHelp]'
})
export class FieldHelpDirective {

  @Input() helpInfo: FieldHelp = {
    title: '',
    message: ''
  };

  constructor(private el: ElementRef, private messageService: SohoMessageService){        
    console.log("constructor triggered", el);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent){        
      if (e.key === 'F1' && !e.repeat) {
        e.preventDefault();
        e.stopPropagation();

        this.showDialog(this.helpInfo.title, this.helpInfo.message);
      }
  }

  showDialog(title: string, message: string): void {
    const buttons:SohoModalButton[] = [{ 
      text: Soho.Locale.translate('Close'),
      click: (e: any, modal: any) =>  modal.close(),
      isDefault: true 
    }];
    
    if (!message) {
      this.messageService.error()
         .title(Soho.Locale.translate('Alert'))
         .message('Field help is not available for this field.')
         .buttons(buttons)
         .open();

      return;
    }
    
    this.messageService.message()
       .title(Soho.Locale.translate(title) || 'No name')
       .message(Soho.Locale.translate(message))
       .buttons(buttons)
       .cssClass('help-modal')
       .open();
 }

}

type FieldHelp = {
  title: string;
  message: string;
}