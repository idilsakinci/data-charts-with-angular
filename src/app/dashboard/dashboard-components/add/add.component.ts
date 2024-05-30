import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material/stepper';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/service/data.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [DemoMaterialModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AddComponent implements OnInit {
  @ViewChild('steppervarient') steppervarient!: MatStepper;
  public skills: { name: string; control: FormControl }[] = [];
  public teams: any;

  showTeamCard: boolean = true;
  showEmployeeCard: boolean = false;

  isLinear = false;
  firstFormGroup: FormGroup = Object.create(null);
  secondFormGroup: FormGroup = Object.create(null);
  thirdFormGroup: FormGroup = Object.create(null);
  fourthFormGroup: FormGroup = Object.create(null);
  fifthFormGroup: FormGroup = Object.create(null);
  sixthFormGroup: FormGroup = Object.create(null);
  seventhFormGroup: FormGroup = Object.create(null);

  isLinearvarient = false;
  varientfirstFormGroup: FormGroup = Object.create(null);
  varientsecondFormGroup: FormGroup = Object.create(null);
  varientthirdFormGroup: FormGroup = Object.create(null);
  varientfourthFormGroup: FormGroup = Object.create(null);
  varientfifthFormGroup: FormGroup = Object.create(null);
  varientsixthFormGroup: FormGroup = Object.create(null);
  varientseventhFormGroup: FormGroup = Object.create(null);

  isLinearposition = false;
  positionfirstFormGroup: FormGroup = Object.create(null);
  positionsecondFormGroup: FormGroup = Object.create(null);
  positionthirdFormGroup: FormGroup = Object.create(null);
  positionfourthFormGroup: FormGroup = Object.create(null);
  positionfifthFormGroup: FormGroup = Object.create(null);
  positionsixthFormGroup: FormGroup = Object.create(null);
  positionseventhFormGroup: FormGroup = Object.create(null);

  optionalfirstFormGroup: FormGroup = Object.create(null);
  optionalsecondFormGroup: FormGroup = Object.create(null);
  optionalthirdFormGroup: FormGroup = Object.create(null);
  optionalfourthFormGroup: FormGroup = Object.create(null);
  optionalfifthFormGroup: FormGroup = Object.create(null);
  optionalsixthFormGroup: FormGroup = Object.create(null);
  optionalseventhFormGroup: FormGroup = Object.create(null);
  isOptional = false;

  editablefirstFormGroup: FormGroup = Object.create(null);
  editablesecondFormGroup: FormGroup = Object.create(null);
  editablethirdFormGroup: FormGroup = Object.create(null);
  editablefourthFormGroup: FormGroup = Object.create(null);
  editablefifthFormGroup: FormGroup = Object.create(null);
  editablesixthFormGroup: FormGroup = Object.create(null);
  editableseventhFormGroup: FormGroup = Object.create(null);
  isEditable = false;

  customizefirstFormGroup: FormGroup = Object.create(null);
  customizesecondFormGroup: FormGroup = Object.create(null);
  customizethirdFormGroup: FormGroup = Object.create(null);
  customizefourthFormGroup: FormGroup = Object.create(null);
  customizefifthFormGroup: FormGroup = Object.create(null);
  customizesixthFormGroup: FormGroup = Object.create(null);
  customizeseventhFormGroup: FormGroup = Object.create(null);

  errorfirstFormGroup: FormGroup = Object.create(null);
  errorsecondFormGroup: FormGroup = Object.create(null);
  errorthirdFormGroup: FormGroup = Object.create(null);
  errorfourthFormGroup: FormGroup = Object.create(null);
  errorfifthFormGroup: FormGroup = Object.create(null);
  errorsixthFormGroup: FormGroup = Object.create(null);
  errorseventhFormGroup: FormGroup = Object.create(null);

  constructor(
    private _formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.dataService.getDashboardData().subscribe((data: any) => {
      if (data) {
        this.skills = data.data.skills_in_development.map((skill: any) => {
          return {
            name: skill.skill,
            control: this._formBuilder.control(false), // Default olarak tüm checkbox'lar işaretli olmayacak
          };
        });
        this.teams= data.data.teams;
      }
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
    });
    this.seventhFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required],
    });

    // varient
    this.varientfirstFormGroup = this._formBuilder.group({
      varientfirstCtrl: ['', Validators.required],
    });
    this.varientsecondFormGroup = this._formBuilder.group({
      varientsecondCtrl: ['', Validators.required],
    });
    this.varientthirdFormGroup = this._formBuilder.group({
      varientthirdCtrl: ['', Validators.required],
    });
    this.varientfourthFormGroup = this._formBuilder.group({
      varientfourthCtrl: ['', Validators.required],
    });
    this.varientfifthFormGroup = this._formBuilder.group({
      varientfifthCtrl: ['', Validators.required],
    });
    this.varientsixthFormGroup = this._formBuilder.group({
      varientsixthCtrl: ['', Validators.required],
    });
    this.varientseventhFormGroup = this._formBuilder.group({
      varientseventhCtrl: ['', Validators.required],
    });

    // position
    this.positionfirstFormGroup = this._formBuilder.group({
      positionfirstCtrl: ['', Validators.required],
    });
    this.positionsecondFormGroup = this._formBuilder.group({
      positionsecondCtrl: ['', Validators.required],
    });
    this.positionthirdFormGroup = this._formBuilder.group({
      positionthirdCtrl: ['', Validators.required],
    });
    this.positionfourthFormGroup = this._formBuilder.group({
      positionfourthCtrl: ['', Validators.required],
    });
    this.positionfifthFormGroup = this._formBuilder.group({
      positionfifthCtrl: ['', Validators.required],
    });
    this.positionsixthFormGroup = this._formBuilder.group({
      positionsixthCtrl: ['', Validators.required],
    });
    this.positionseventhFormGroup = this._formBuilder.group({
      positionseventhCtrl: ['', Validators.required],
    });

    // optional
    this.optionalfirstFormGroup = this._formBuilder.group({
      optionalfirstCtrl: ['', Validators.required],
    });
    this.optionalsecondFormGroup = this._formBuilder.group({
      optionalsecondCtrl: ['', Validators.required],
    });
    this.optionalthirdFormGroup = this._formBuilder.group({
      optionalthirdCtrl: ['', Validators.required],
    });
    this.optionalfourthFormGroup = this._formBuilder.group({
      optionalfourthCtrl: ['', Validators.required],
    });
    this.optionalfifthFormGroup = this._formBuilder.group({
      optionalfifthCtrl: ['', Validators.required],
    });
    this.optionalsixthFormGroup = this._formBuilder.group({
      optionalsixthCtrl: ['', Validators.required],
    });
    this.optionalseventhFormGroup = this._formBuilder.group({
      optionalseventhCtrl: ['', Validators.required],
    });

    // editable
    this.editablefirstFormGroup = this._formBuilder.group({
      editablefirstCtrl: ['', Validators.required],
    });
    this.editablesecondFormGroup = this._formBuilder.group({
      editablesecondCtrl: ['', Validators.required],
    });
    this.editablethirdFormGroup = this._formBuilder.group({
      editablethirdCtrl: ['', Validators.required],
    });
    this.editablefourthFormGroup = this._formBuilder.group({
      editablefourthCtrl: ['', Validators.required],
    });
    this.editablefifthFormGroup = this._formBuilder.group({
      editablefifthCtrl: ['', Validators.required],
    });
    this.editablesixthFormGroup = this._formBuilder.group({
      editablesixthCtrl: ['', Validators.required],
    });
    this.editableseventhFormGroup = this._formBuilder.group({
      editableseventhCtrl: ['', Validators.required],
    });

    // customize
    this.customizefirstFormGroup = this._formBuilder.group({
      customizefirstCtrl: ['', Validators.required],
    });
    this.customizesecondFormGroup = this._formBuilder.group({
      customizesecondCtrl: ['', Validators.required],
    });
    this.customizethirdFormGroup = this._formBuilder.group({
      customizethirdCtrl: ['', Validators.required],
    });
    this.customizefourthFormGroup = this._formBuilder.group({
      customizefourthCtrl: ['', Validators.required],
    });
    this.customizefifthFormGroup = this._formBuilder.group({
      customizefifthCtrl: ['', Validators.required],
    });
    this.customizesixthFormGroup = this._formBuilder.group({
      customizesixthCtrl: ['', Validators.required],
    });
    this.customizeseventhFormGroup = this._formBuilder.group({
      customizeseventhCtrl: ['', Validators.required],
    });

    // error
    this.errorfirstFormGroup = this._formBuilder.group({
      errorfirstCtrl: ['', Validators.required],
    });
    this.errorsecondFormGroup = this._formBuilder.group({
      errorsecondCtrl: ['', Validators.required],
    });
    this.errorthirdFormGroup = this._formBuilder.group({
      errorthirdCtrl: ['', Validators.required],
    });
    this.errorfourthFormGroup = this._formBuilder.group({
      errorfourthCtrl: ['', Validators.required],
    });
    this.errorfifthFormGroup = this._formBuilder.group({
      errorfifthCtrl: ['', Validators.required],
    });
    this.errorsixthFormGroup = this._formBuilder.group({
      errorsixthCtrl: ['', Validators.required],
    });
    this.errorseventhFormGroup = this._formBuilder.group({
      errorseventhCtrl: ['', Validators.required],
    });
  }

  addTeam() {
    this.showTeamCard = true;
    this.showEmployeeCard = false;
  }

  addEmployee() {
    this.showEmployeeCard = true;
    this.showTeamCard = false;
  }

  resetStepper() {
    if (this.steppervarient) {
      this.steppervarient.reset();
      this.skills.forEach((skill) => {
        skill.control.reset();
      });
    }
  }
}
