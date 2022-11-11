import { Component, OnInit } from '@angular/core';



import {transdata} from '../transactions';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent implements OnInit {

  constructor() { }

  transdata = transdata.data;

  ngOnInit(): void {
  }

}
