import { Component, ViewChild } from '@angular/core'
import { ModalController, IonSlides } from '@ionic/angular'
import { Storage } from '@ionic/storage'
import { handleErrorLocal, ErrorCategory } from '../../providers/error-handler/error-handler'

@Component({
  selector: 'page-distribution-onboarding',
  templateUrl: 'distribution-onboarding.html'
})
export class DistributionOnboardingPage {
  @ViewChild(IonSlides) slides: IonSlides

  constructor(private viewController: ModalController, private storage: Storage) {}

  async next() {
    this.slides.slideNext()
  }

  async accept() {
    await this.storage.set('DISCLAIMER_ELECTRON', true)
    this.viewController.dismiss().catch(handleErrorLocal(ErrorCategory.IONIC_MODAL))
  }
}
