import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { member } from 'src/app/models/member.model';
import { MatDialog } from '@angular/material/dialog';
import { MemberServiceService } from 'src/app/services/memberservice/member-service.service';
import { identitydocumenttype } from 'src/app/models/identitydocumenttype';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrls: ['./member-modal.component.css']
})
export class MemberModalComponent {
  identityDocumentTypes = Object.keys(identitydocumenttype);
  isEditMode: boolean;
  data: member;

  constructor(
    public dialogRef: MatDialogRef<MemberModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: member,
    private dialog: MatDialog,
    private memberService: MemberServiceService
  ) {
    this.isEditMode = !!dialogData.id;
    this.data = { ...dialogData };
  }
  onUpdate(): void {
    this.memberService.updateMember(this.data.id, this.data).subscribe(
      (result) => {
        console.log('Member updated successfully', result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error('Error updating member:', error);
      }
    );
  }

  onAdd(): void {

    this.memberService.addMember(this.data).subscribe(
      (result) => {
        console.log('Member added successfully', result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error('Error adding member:', error);
      }
    );
  }

  onDelete(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
