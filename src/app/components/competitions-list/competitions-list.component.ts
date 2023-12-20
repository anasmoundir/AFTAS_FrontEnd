import { Component, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { competition } from 'src/app/models/competition.model';
import { CompetitionService } from 'src/app/services/competitionservice/competition.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-competitions-list',
  templateUrl: './competitions-list.component.html',
  styleUrls: ['./competitions-list.component.css']
})
export class CompetitionsListComponent {

  openCompetitions : competition[] = [] ;
  closedCompetitions :competition[] = [];

  constructor(private competitionService: CompetitionService) { }

  displayedColumns: string[] = ['theDate', 'startTime', 'endTime', 'numberOfParticipant','id', 'location', 'amount'];
  openCompetitionsDataSource = new MatTableDataSource<competition>();
  closedCompetitionsDataSource = new MatTableDataSource<competition>();

  @ViewChild('openPaginator') openPaginator!: MatPaginator;
  @ViewChild('closedPaginator') closedPaginator!: MatPaginator;

  ngOnInit(): void {
    this.fetchOpenCompetitions();
    this.fetchClosedCompetitions();
  }

  private fetchOpenCompetitions(page: number = 0, size: number = 10): void {
    this.competitionService.getOpenCompetitions(page, size).subscribe(
      (competitions: competition[]) => {
        this.openCompetitions = competitions;
        console.log(competitions);
        this.openCompetitionsDataSource.data = competitions;
        this.openPaginator.length = competitions.length;
      },
      error => {
        console.error('Error fetching open competitions:', error);
      }
    );
  }

  private fetchClosedCompetitions(page: number = 0, size: number = 10): void {
    this.competitionService.getClosedCompetitions(page, size).subscribe(
      (competitions: competition[]) => {
        this.closedCompetitions = competitions;
        console.log(competitions);
        this.closedCompetitionsDataSource.data = competitions;
        this.closedPaginator.length = competitions.length; // Update paginator length
      },
      error => {
        console.error('Error fetching closed competitions:', error);
      }
    );
  }

  onOpenPageChange(event: PageEvent): void {
    this.fetchOpenCompetitions(event.pageIndex, event.pageSize);
  }

  onClosedPageChange(event: PageEvent): void {
    this.fetchClosedCompetitions(event.pageIndex, event.pageSize);
  }
}
