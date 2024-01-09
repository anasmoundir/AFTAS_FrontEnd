import { Component } from '@angular/core';
import { MemberServiceService } from 'src/app/services/memberservice/member-service.service';
import { member } from 'src/app/models/member.model';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css'],
})
export class MemberSearchComponent {
  searchName: string = '';
  searchFamilyname: string = '';
  searchNum: number = 0;
  searchResults: member[] = [];
  isSearching: boolean = false;

  constructor(private memberService: MemberServiceService) {}

  searchByName(): void {
    this.isSearching = true;
    this.resetSearchResults();

    if (this.searchName.trim() !== '') {
      this.memberService.searchMembersByName(this.searchName).subscribe(
        (membersByName) => {
          this.searchResults = membersByName;
        },
        (error) => {
          console.error('Error searching members by name:', error);
        }
      );
    }
  }

  searchByFamilyname(): void {
    this.isSearching = true;
    this.resetSearchResults();

    if (this.searchFamilyname.trim() !== '') {
      this.memberService.searchMembersByFamilyname(this.searchFamilyname).subscribe(
        (membersByFamilyname) => {
          this.searchResults = membersByFamilyname;
        },
        (error) => {
          console.error('Error searching members by family name:', error);
        }
      );
    }
  }

  searchByNum(): void {
    this.isSearching = true;
    this.resetSearchResults();

    if (this.searchNum > 0) {
      this.memberService.searchMembersByNum(this.searchNum).subscribe(
        (membersByNum) => {
          this.searchResults = membersByNum;
        },
        (error) => {
          console.error('Error searching members by number:', error);
        }
      );
    }
  }

  resetSearchResults(): void {
    this.searchResults = [];
  }

  resetInputs(): void {
    this.searchName = '';
    this.searchFamilyname = '';
    this.searchNum = 0;
    this.isSearching = false;
    this.resetSearchResults();
  }
}
