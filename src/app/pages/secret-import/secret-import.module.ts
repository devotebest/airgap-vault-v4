import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { SecretImportPage } from './secret-import'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SecretImportPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SecretImportPage }])
  ],
  entryComponents: [SecretImportPage]
})
export class SecretImportPageModule {}
