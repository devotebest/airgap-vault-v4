import { NgModule } from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { Platform } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { ComponentsModule } from '../../components/components.module'
import { WarningsModalPage } from './warnings-modal'
import { SecureStorageService } from '../../providers/storage/secure-storage'
import { SecureStorageFactory } from '../../providers/storage/secure-storage.factory'
import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [WarningsModalPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicStorageModule,
    TranslateModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: WarningsModalPage }])
  ],
  entryComponents: [WarningsModalPage],
  providers: [
    Platform,
    {
      provide: SecureStorageService,
      useFactory: SecureStorageFactory,
      deps: [Platform]
    }
  ]
})
export class WarningsModalPageModule {}
