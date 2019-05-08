import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { MaterialIconsModule } from 'ionic2-material-icons'
import { SecretEditPopoverComponent } from './secret-edit-popover/secret-edit-popover.component'
import { TranslateModule } from '@ngx-translate/core'
import { SecretEditPage } from './secret-edit'

@NgModule({
  declarations: [SecretEditPage, SecretEditPopoverComponent],
  imports: [
    MaterialIconsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SecretEditPage }])
  ],
  entryComponents: [SecretEditPage, SecretEditPopoverComponent]
})
export class SecretEditPageModule {}
