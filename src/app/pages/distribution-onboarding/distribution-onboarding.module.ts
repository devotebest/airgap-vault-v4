import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'
import { DistributionOnboardingPage } from './distribution-onboarding'
import { TranslateModule } from '@ngx-translate/core'
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [DistributionOnboardingPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: DistributionOnboardingPage }]),
    TranslateModule
  ]
})
export class DistributionOnboardingPageModule {}
