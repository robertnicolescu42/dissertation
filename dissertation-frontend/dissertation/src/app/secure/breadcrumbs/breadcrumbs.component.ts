import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { BreadcrumbDefinition, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$: Observable<{ label: string; url: string }[]> | undefined;
  constructor(public breadcrumbService: BreadcrumbService) {}
  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$.pipe(
      tap((data) => console.log(data)),
      map((breadcrumbs: BreadcrumbDefinition[]) => {
        return breadcrumbs.map(
          (
            breadcrumb: BreadcrumbDefinition,
            index: number,
            array: BreadcrumbDefinition[]
          ) => {
            const urlParts = breadcrumb.routeLink!.split('/');
            const label = urlParts[urlParts.length - 1] + ' > ';
            const url = array
              .slice(0, index + 1)
              .map((b) => b.routeLink)
              .join('/');
            return { label, url };
          }
        );
      }),
      tap((data) => console.log(data))
    );
  }
}
