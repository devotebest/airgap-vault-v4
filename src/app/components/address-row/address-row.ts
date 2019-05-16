import { Component, Input } from '@angular/core'

@Component({
  selector: 'address-row',
  templateUrl: 'address-row.html',
  styleUrls: ['./address-row.scss']
})
export class AddressRowComponent {
  @Input()
  label: string

  @Input()
  address: string
}
