import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompetitionService } from 'src/app/services/competitionservice/competition.service';

@Component({
  selector: 'app-competition-add',
  templateUrl: './competition-add.component.html',
  styleUrls: ['./competition-add.component.css']
})
export class CompetitionAddComponent implements OnInit {
  competitionForm!: FormGroup;

  constructor(private fb: FormBuilder, private competitionService: CompetitionService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    const currentDate = new Date();
  const minStartDate = new Date(currentDate.getTime() + 48 * 60 * 60 * 1000); 

  this.competitionForm = this.fb.group({
    theDate: [null, [Validators.required, this.dateValidator(currentDate, 'Cannot select a date before today.')]],
    startTime: [null, [Validators.required, this.dateValidator(minStartDate, 'Cannot select a time less than 48 hours from now.')]],
    endTime: [null, Validators.required],
    numberOfParticipant: [null, [Validators.required, Validators.min(1)]],
    location: [null, Validators.required],
    amount: [null, [Validators.required, Validators.min(0)]]
  });
  }

  onSubmit(): void {
    if (this.competitionForm.valid) {
      const competitionData = this.competitionForm.value;
      this.competitionService.addCompetition(competitionData).subscribe(
        (response) => {
          console.log('Competition added successfully:', response);
          this.initForm();
        },
        (error) => {
          console.error('Error adding competition:', error);
        }
      );
    }
  }
  dateValidator(minDate: Date, errorMessage: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = control.value ? new Date(control.value) : null;

      if (selectedDate && selectedDate < minDate) {
        return { 'dateError': errorMessage };
      }

      return null;
    };
  }


}
