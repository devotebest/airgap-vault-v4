import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { SecretShowPage } from './secret-show'
import { SecretValidatePageModule } from '../secret-validate/secret-validate.module'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SecretShowPage],
  imports: [
    SecretValidatePageModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SecretShowPage }])
  ],
  entryComponents: [SecretShowPage]
})
export class SecretShowPageModule {}
