import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { member } from 'src/app/models/member.model';
import { MemberServiceService } from 'src/app/services/memberservice/member-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MemberModalComponent } from '../member-modal/member-modal.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'familyname', 'accessinsDate', 'nationality', 'identitydocumenttype', 'edit', 'delete'];
  dataSource = new MatTableDataSource<member>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private memberService: MemberServiceService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(
      (members: member[]) => {
        this.dataSource.data = members;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error loading members:', error);
      }
    );
  }

  openMemberModal(member: member | null, mode: string): void {
    if (mode === 'delete' && member !== null) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: {
          title: 'Confirm Deletion',
          message: 'Are you sure you want to delete this member?'
        }
      });

      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.deleteMember(member as member);
        }
      });
    } else {
      const dialogRef = this.dialog.open(MemberModalComponent, {
        data: {
          member: member,
          mode: mode,
        }
      });

      dialogRef.afterClosed().subscribe((result: member | string) => {
        if (result && member === null) {
          this.addMember(result as member);
        } else if (result && mode === 'edit') {
          this.updateMember(result as member);
        }
      });
    }
  }

  private addMember(newMember: member): void {
    this.memberService.addMember(newMember).subscribe(
      (result) => {
        console.log('Member added successfully', result);
        this.loadMembers();
      },
      (error) => {
        console.error('Error adding member:', error);
      }
    );
  }

  private updateMember(updatedMember: member): void {
    this.memberService.updateMember(updatedMember.id, updatedMember).subscribe(
      (result) => {
        console.log('Member updated successfully', result);
        this.loadMembers();
      },
      (error) => {
        console.error('Error updating member:', error);
      }
    );
  }

  private deleteMember(member: member): void {
    this.memberService.deleteMember(member.id).subscribe(
      () => {
        this.loadMembers();
      },
      (error) => {
        console.error('Error deleting member:', error);
      }
    );
  }
}
