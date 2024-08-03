import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  navListVisible = false;
  activeLink = '';

  toggleNavList() {
    this.navListVisible = !this.navListVisible;
  }

  setActive(link: string) {
    this.activeLink = link;
    this.navListVisible = false; // Hide nav list after clicking a link
  }
}
