import { Component, OnInit } from '@angular/core';
import { VeggieHiveService } from 'src/services/veggie-hive.service';
import { OwnerInfo } from '../owner-info';

@Component({
  selector: 'app-book-slots',
  templateUrl: './book-slots.component.html',
  styleUrls: ['./book-slots.component.css']
})
export class BookSlotsComponent implements OnInit {

  private slotBooked: boolean;
  public slots: any[] = []
  public slotsAvailable: any;
  private slotColor = 'honeydew';

  constructor(private veggieHiveService: VeggieHiveService) {

  }

  ngOnInit() {
    // this.slots = [{ 'slotId': 1, 'SlotName': 'Slot 1', 'dimension': '100Ft', 'location': 'Bangalore' },
    // { 'slotId': 2, 'SlotName': 'Slot 2', 'dimension': '200Ft', 'location': 'Mumbai' },
    // { 'slotId': 3, 'SlotName': 'Slot 3', 'dimension': '100Ft', 'location': 'Chennai' }];
    this.veggieHiveService.getAllSlotsAvailable().subscribe(data => {
      this.slotsAvailable = data;
    }, error => console.log(error));
  }

  bookSlot(slotData) {
    let userName = localStorage.getItem('userName');
    let userId = localStorage.getItem('userId')
    console.log(OwnerInfo)
    this.veggieHiveService.bookSlot(OwnerInfo, slotData.id).subscribe(slot => {
      console.log(slot)
    }, error => console.log(error));

  }

}
