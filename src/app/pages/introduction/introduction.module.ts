import { NgModule } from '@angular/core'
import { IonicModule, Platform } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { IntroductionPage } from './introduction'
import { IonicStorageModule } from '@ionic/storage'
import { TranslateModule } from '@ngx-translate/core'
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [IntroductionPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicStorageModule,
    RouterModule.forChild([{ path: '', component: IntroductionPage }]),
    TranslateModule
  ],
  providers: [Platform],
  entryComponents: [IntroductionPage]
})
export class IntroductionPageModule {}
