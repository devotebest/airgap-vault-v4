import { NgModule, RendererFactory2, NgZone } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { TranslateModule } from '@ngx-translate/core'
import { CameraPreview } from '@ionic-native/camera-preview/ngx'
import { Clipboard } from '@ionic-native/clipboard/ngx'
import { Diagnostic } from '@ionic-native/diagnostic/ngx'
import { AppVersion } from '@ionic-native/app-version/ngx'
import { DeviceMotion } from '@ionic-native/device-motion/ngx'
import { Deeplinks } from '@ionic-native/deeplinks/ngx'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MaterialIconsModule } from 'ionic2-material-icons'
import { SecretsProvider } from './providers/secrets/secrets.provider'
import { SecureStorageService } from './providers/storage/secure-storage'
import { SecureStorageFactory } from './providers/storage/secure-storage.factory'
import { DeviceProvider } from './providers/device/device'
import { CameraNativeService } from './providers/camera/camera.native.service'
import { CameraFactory } from './providers/camera/camera.factory'
import { AudioNativeService } from './providers/audio/audio.native.service'
import { AudioServiceFactory } from './providers/audio/audio.factory'
import { EntropyService } from './providers/entropy/entropy.service'
import { GyroscopeNativeService } from './providers/gyroscope/gyroscope.native.service'
import { GyroscopeServiceFactory } from './providers/gyroscope/gyroscope.factory'
import { ComponentsModule } from './components/components.module'
import { PagesModule } from './pages/pages.module'
import { ScannerProvider } from './providers/scanner/scanner'
import { IonicStorageModule } from '@ionic/storage'

import { StartupChecksProvider } from './providers/startup-checks/startup-checks.provider'
import { SchemeRoutingProvider } from './providers/scheme-routing/scheme-routing'
import { ClipboardProvider } from './providers/clipboard/clipboard'
import { PermissionsProvider } from './providers/permissions/permissions'
import { ShareUrlProvider } from './providers/share-url/share-url'
import { ErrorHandlerProvider } from './providers/error-handler/error-handler'
import { InteractionProvider } from './providers/interaction/interaction'
import { DeepLinkProvider } from './providers/deep-link/deep-link'
import { ProtocolsProvider } from './providers/protocols/protocols'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    MaterialIconsModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    ComponentsModule,
    PagesModule,
    IonicStorageModule.forRoot({
      name: '__airgap_storage',
      driverOrder: ['sqlite', 'localstorage']
    }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    CameraPreview,
    Deeplinks,
    DeviceMotion,
    Diagnostic,
    SecretsProvider,
    EntropyService,
    StartupChecksProvider,
    ScannerProvider,
    Clipboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: SecureStorageService,
      useFactory: SecureStorageFactory,
      deps: [Platform]
    },
    {
      provide: CameraNativeService,
      useFactory: CameraFactory,
      deps: [Platform, CameraPreview, RendererFactory2, PermissionsProvider]
    },
    {
      provide: AudioNativeService,
      useFactory: AudioServiceFactory,
      deps: [Platform, PermissionsProvider]
    },
    {
      provide: GyroscopeNativeService,
      useFactory: GyroscopeServiceFactory,
      deps: [Platform, DeviceMotion]
    },
    ClipboardProvider,
    DeviceProvider,
    SchemeRoutingProvider,
    PermissionsProvider,
    InteractionProvider,
    ShareUrlProvider,
    ErrorHandlerProvider,
    DeepLinkProvider,
    ProtocolsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
