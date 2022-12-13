import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AadharCardService } from '../aadhar-card.service';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent implements OnInit {
 aadharNumber: String=" ";

  constructor(private fb:FormBuilder,private service:AadharCardService, private router:Router, private _router:ActivatedRoute) { }

  ngOnInit(): void {
  this.aadharNumber =  this._router.snapshot.paramMap.get('aadharNumber')
  }

}
