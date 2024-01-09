import { Component, OnInit, ViewChild } from '@angular/core';
import { RankingService } from 'src/app/services/rankingservice/ranking.service';
import { CompetitionService } from 'src/app/services/competitionservice/competition.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ranking } from 'src/app/models/rankin.model';
import { competition } from 'src/app/models/competition.model';
import { PodiumService } from 'src/app/services/podiumservice/podium.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podiom.component.html',
  styleUrls: ['./podiom.component.css']
})
export class PodiumComponent implements OnInit {
  podium: ranking[] = [];
  competitions: competition[] = [];
  selectedCompetition: competition | undefined;
  displayedColumns: string[] = ['position', 'name', 'score'];
  dataSource = new MatTableDataSource<ranking>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private rankingService: RankingService,
    private PodiumService : PodiumService,
  ) { }

  ngOnInit(): void {
    this.loadOpenCompetitions();
    this.dataSource.paginator = this.paginator;
  }

  loadPodium(competitionId: number) {
    this.rankingService.getPodiumForCompetition(competitionId).subscribe(
      data => {
        console.log('Podium data:', data);
        this.podium = data;
        this.dataSource.data = data;
         },
      error => {
        console.error('Error loading podium:', error);
      }
    );
  }

  onSearchButtonClick() {
    if (this.selectedCompetition && this.selectedCompetition.id !== undefined) {
      this.loadPodium(this.selectedCompetition.id);
    } else {
      console.error('Competition ID is not defined.');
    }
  }

  loadOpenCompetitions() {
    this.PodiumService.getCompetitionsFor(0, 130).subscribe(
      (competitions: competition[]) => {
        this.competitions = competitions;
        console.log(competitions);
        this.selectedCompetition = competitions.length > 0 ? competitions[0] : undefined;
        if (this.selectedCompetition) {
          this.loadPodium(this.selectedCompetition.id);
        }
      },
      error => {
        console.error('Error loading  competitions:', error);
      }
    );
  }
}
