import { Component, Input } from '@angular/core'
import { Secret } from '../../models/secret'
import { InteractionSetting } from '../../providers/interaction/interaction'

@Component({
  selector: 'secret-item',
  templateUrl: 'secret-item.html',
  styleUrls: ['./secret-item.scss']
})
export class SecretItemComponent {
  @Input()
  secret: Secret

  public interactionSetting = InteractionSetting
}
