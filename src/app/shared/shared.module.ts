import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ToasterComponent } from './components/toaster/toaster.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
// import { ModalComponent } from './components/modal/modal.component';
// import { ModalService } from './components/modal/modal.service';

@NgModule({
    declarations: [ToasterComponent, SpinnerComponent],
    imports: [CommonModule, TranslateModule],
    exports: [ToasterComponent, SpinnerComponent],
    providers: []
})
export class SharedModule {}
