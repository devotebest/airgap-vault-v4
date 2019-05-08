import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { ComponentsModule } from '../../components/components.module'
import { SecretCreatePage } from './secret-create'
import { MaterialIconsModule } from 'ionic2-material-icons'

@NgModule({
  declarations: [SecretCreatePage],
  imports: [
    MaterialIconsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: SecretCreatePage }]),
    TranslateModule
  ],
  entryComponents: [SecretCreatePage]
})
export class SecretCreatePageModule {}
