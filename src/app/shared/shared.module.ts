import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreloaderComponent } from './components/preloader/preloader.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

const sharedComponents = [ErrorModalComponent, PreloaderComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule],
  exports: []
})
export class SharedModule { }
