import { Component, Input, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/rankingservice/ranking.service';
import { member } from 'src/app/models/member.model';
import { PodiumService } from 'src/app/services/podiumservice/podium.service';

@Component({
  selector: 'app-winner-card',
  templateUrl: './winner-card.component.html',
  styleUrls: ['./winner-card.component.css']
})
export class WinnerCardComponent implements OnInit {
  @Input() winner!: any; // Update the type based on your actual structure
  memberDetails: member | undefined;

  constructor(private podiumService: PodiumService) {}

  ngOnInit(): void {
    if (this.winner && this.winner.id && this.winner.id.memberId) {
      this.podiumService.getMemberDetails(this.winner.id.memberId).subscribe(
        (data: member) => {
          this.memberDetails = data;
          console.log('Member details:', data);
        },
        error => {
          console.error('Error loading member details:', error);
        }
      );
    }
  }
}
