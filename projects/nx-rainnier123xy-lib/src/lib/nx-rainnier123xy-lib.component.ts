import { NxRainnier123xyLibService } from './nx-rainnier123xy-lib.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'nx-nx-rainnier123xy-lib',
  template: `
    <img *ngIf="postUrl$ | async as src" [src]="src"/>
  `,
  styles: [
    `
    :host {
      display:inline-block;
      overflow:hidden;
      line-height: 0;
    }
    `
  ]
})
export class NxRainnier123xyLibComponent implements OnInit {

  constructor(private service:NxRainnier123xyLibService) { }

  @Input()
  id:number|any

  postUrl$:Observable<string>|any

  ngOnInit(): void {
    this.postUrl$ = this.service.getShow(this.id ?? 0).pipe(
      map((show:any) => show.image.medium)
    )
  }

}
