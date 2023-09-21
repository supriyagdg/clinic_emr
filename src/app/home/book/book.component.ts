import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators, AbstractControl, FormGroup} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/cdk/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {
  faUser,
  faAddressBook,
  faCreditCard,
  faChevronLeft,
  faChevronRight,
  faSave,
  faBan,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  isLinear = true;

  @Input()
  isEditable = true;

  frmValues: object = {};

  faPerson = faUser;
  faAddressBook = faAddressBook;
  faCreditCard = faCreditCard;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faSave = faSave;

  faBan = faBan;

  frmStepper: FormGroup;

  get formArray(): AbstractControl {
    return this.frmStepper.get('steps');
  }


public showForm:boolean=false;
public calender:boolean=true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.frmStepper = this.fb.group({
    //   steps: this.fb.array([
    //     this.fb.group({
    //       firstName: ['First Name', Validators.compose([Validators.required])],
    //       lastName: ['Last Name', Validators.compose([Validators.required])],
    //       phone: [null], // optional
    //       email: [
    //         'johndoe@example.com',
    //         Validators.compose([Validators.required, Validators.email]),
    //       ],
    //     }),
    //     this.fb.group({
    //       addressOne: [null, Validators.compose([Validators.required])],
    //       addressTwo: [null], // optional
    //       city: [null, Validators.compose([Validators.required])],
    //       county: [null, Validators.compose([Validators.required])],
    //       country: [null, Validators.compose([Validators.required])],
    //     }),
    //     this.fb.group({
    //       creditCardNo: [
    //         '4111 1111 1111 1111',
    //         Validators.compose([Validators.required]),
    //       ],
    //       expiryDate: ['', Validators.compose([Validators.required])],
    //       cvvCode: ['', Validators.compose([Validators.required])],
    //     }),
    //   ]),
    // });
  }

  // submit(): void {
  //   console.log(this.frmStepper.value);
  //   this.frmValues = this.frmStepper.value;
  // }


  
  onSubmit(frm:any)
  {
    console.log(frm.value);
    
  }

proceedToPay()
{
 
  this.showForm=true;
  this.calender=false;
}

}