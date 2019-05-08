import { NgModule, RendererFactory2 } from '@angular/core'
import { Platform } from '@ionic/angular'
import { IonicModule } from '@ionic/angular'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { SecretGeneratePage } from './secret-generate'
import { GyroscopeNativeService } from '../../providers/gyroscope/gyroscope.native.service'
import { CameraNativeService } from '../../providers/camera/camera.native.service'
import { CameraFactory } from '../../providers/camera/camera.factory'
import { AudioNativeService } from '../../providers/audio/audio.native.service'
import { AudioServiceFactory } from '../../providers/audio/audio.factory'
import { GyroscopeServiceFactory } from '../../providers/gyroscope/gyroscope.factory'
import { Gyroscope } from '@ionic-native/gyroscope/ngx'
import { SecureStorageService } from '../../providers/storage/secure-storage'
import { SecureStorageFactory } from '../../providers/storage/secure-storage.factory'
import { ComponentsModule } from '../../components/components.module'
import { MaterialIconsModule } from 'ionic2-material-icons'
import { ScannerProvider } from '../../providers/scanner/scanner'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [SecretGeneratePage],
  imports: [
    ComponentsModule,
    MaterialIconsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: SecretGeneratePage }])
  ],
  providers: [
    Gyroscope,
    ScannerProvider,
    Platform,
    {
      provide: SecureStorageService,
      useFactory: SecureStorageFactory,
      deps: [Platform]
    },
    {
      provide: CameraNativeService,
      useFactory: CameraFactory,
      deps: [Platform, RendererFactory2]
    },
    {
      provide: AudioNativeService,
      useFactory: AudioServiceFactory,
      deps: [Platform]
    },
    {
      provide: GyroscopeNativeService,
      useFactory: GyroscopeServiceFactory,
      deps: [Platform, Gyroscope]
    }
  ],
  entryComponents: [SecretGeneratePage]
})
export class SecretGeneratePageModule {}
