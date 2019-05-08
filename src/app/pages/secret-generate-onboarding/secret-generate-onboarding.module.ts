import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ComponentsModule } from '../../components/components.module'
import { SecretGenerateOnboardingPage } from './secret-generate-onboarding'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SecretGenerateOnboardingPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SecretGenerateOnboardingPage }])
  ]
})
export class SecretGenerateOnboardingPageModule {}
