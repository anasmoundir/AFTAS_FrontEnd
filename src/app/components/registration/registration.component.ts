import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/services/competitionservice/competition.service';
import { MemberServiceService } from 'src/app/services/memberservice/member-service.service'; // Import the MemberService

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  openCompetitions: competition[] = [];
  members: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private competitionService: CompetitionService,
    private memberService: MemberServiceService
  ) {
    this.registrationForm = this.formBuilder.group({
      competitionId: ['', Validators.required],
      memberId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchOpenCompetitions();
    this.fetchMembers(); 
  }

  fetchOpenCompetitions(): void {
    this.competitionService.getOpenCompetitions(1, 10).subscribe(
      competitions => {
        this.openCompetitions = competitions;
      },
      error => {
        console.error('Error fetching open competitions:', error);
      }
    );
  }

  registerForCompetition(): void {
    const competitionId = this.registrationForm.get('competitionId')?.value;
    const memberId = this.registrationForm.get('memberId')?.value;

    if (competitionId !== null && competitionId !== undefined && memberId !== null && memberId !== undefined) {
      this.competitionService.registerForCompetition(memberId, competitionId).subscribe(
        response => {
          console.log('Registration successful for competition:', competitionId);
        },
        error => {
          console.error('Error registering for competition:', error);
        }
      );
    }
  }

  fetchMembers(): void {
    this.memberService.getMembers().subscribe(
      members => {
        this.members = members;
      },
      error => {
        console.error('Error fetching members:', error);
      }
    );
  }
}
