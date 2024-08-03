import { Component, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('4s ease-out', style({ transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('900ms', [
            animate('0.9s', style({ opacity: 3 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent  {
  listItems = [
    'Established in 2010 in Amravati district',
    'Focused on archery since 2010.',
    'Our primary focus is on archery, helping students compete at district, national, and international levels.',
    'We take the initiative to arrange inter-college and inter-block competitions to provide better coaching and support.',
    'Our mission is to nurture students\' talents in archery, especially those from tribal regions.'
];


// counter
ngAfterViewInit(): void {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.counter h1').forEach((element: any) => {
          let counter = 0;
          const target = parseInt(element.innerText);
          const step = Math.ceil(target / 60);
          const interval = setInterval(() => {
            counter += step;
            if (counter >= target) {
              clearInterval(interval);
              counter = target;
            }
            element.innerText = counter + '+';
          }, 70);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px', threshold: 0.9 });

  const counters = document.querySelectorAll('.countersub');
  counters.forEach((counter: Element) => {
    observer.observe(counter);
    });
this.addStaggerAnimation();
  }



// activeLink: string = '/';

//   setActive(link: string) {
//     this.activeLink = link;
//   }


activeLink: string = '/';

setActive(link: string) {
  this.activeLink = link;
  setTimeout(() => {
    this.addStaggerAnimation();
  }, 0);
}

// ngAfterViewInittt() {
//   this.addStaggerAnimation();
// }

addStaggerAnimation() {
  const listItems = document.querySelectorAll('.staggered-list li');
  listItems.forEach((item, index) => {
    (item as HTMLElement).style.setProperty('--delay', `${index * 0.6}s`);
  });
}
}
