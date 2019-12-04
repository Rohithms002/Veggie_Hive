import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-hive-home',
  templateUrl: './hive-home.component.html',
  styleUrls: ['./hive-home.component.css']
})
export class HiveHomeComponent implements OnInit {

  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
    
  }

}
