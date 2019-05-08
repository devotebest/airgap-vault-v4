import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { SocialRecoveryImportPage } from './social-recovery-import'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SocialRecoveryImportPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SocialRecoveryImportPage }])
  ],
  entryComponents: [SocialRecoveryImportPage]
})
export class SocialRecoveryImportPageModule {}
