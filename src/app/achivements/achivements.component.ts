import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


interface Player {
  name: string;
  achievements: string;
  link: string;
}
@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent implements OnInit {
  players: Player[] = [
    { name: 'Girish Ratnakar Kukade', achievements: '1 Gold, 5 Silver', link: '/girish' },
    { name: 'Shubham Ram Nage', achievements: 'Participate', link: '/shubham' },
    { name: 'Riddhi Vinod Pote', achievements: 'Participate', link: '/riddhi' },
    { name: 'Siddhi Vinod Pote', achievements: 'Participate', link: '/siddhi' },
    { name: 'Seham Nandkishor Dhave', achievements: 'Participate', link: '/seham' },
    { name: 'Shreyash Balu Awaghad', achievements: 'Participate', link: '/shreyash' },
    { name: 'Bhola Parashram Bethe', achievements: '1 Silver', link: '/bhola' },
    { name: 'Prathmesh Pramod Shende', achievements: 'Participate', link: '/prathmesh' },
    { name: 'Astha Prakash Kabir', achievements: 'Participate', link: '/astha' }
  ];

  currentPage: number = 0;
  pageSize: number = 4; // Default to 4 for large screens
  currentPlayers: Player[] = [];

  constructor(private breakpointObserver: BreakpointObserver) {}

 ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset,  // Small screens
      Breakpoints.Tablet,   // Medium screens
      Breakpoints.Web       // Large screens
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.Handset]) {
        this.pageSize = 1;
      } else if (result.breakpoints[Breakpoints.Tablet]) {
        this.pageSize = 3;
      } else {
        this.pageSize = 4;
      }
      this.updateCurrentPlayers();
    });

    this.updateCurrentPlayers(); // Initialize with default pageSize
  }
  updateCurrentPlayers(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.currentPlayers = this.players.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage(): void {
    this.currentPage++;
    this.updateCurrentPlayers();
  }

  prevPage(): void {
    this.currentPage--;
    this.updateCurrentPlayers();
  }
}
