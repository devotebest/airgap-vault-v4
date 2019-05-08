import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { SecretValidatePage } from './secret-validate'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SecretValidatePage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SecretValidatePage }])
  ],
  entryComponents: [SecretValidatePage]
})
export class SecretValidatePageModule {}
