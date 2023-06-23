import { Component, OnInit } from '@angular/core';
import { forkJoin, from, Observable, of, throwError } from 'rxjs';
import { catchError, concatAll, concatMap, delay, filter, map, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-wo-reporting-portal-2',
  templateUrl: './wo-reporting-portal-2.component.html',
  styleUrls: ['./wo-reporting-portal-2.component.css']
})
export class WoReportingPortal2Component implements OnInit {
  wo_columns: SohoDataGridColumn[] = [];
  FACI = '';
  text_input = '';

  constructor() {}

  ngOnInit() {
    this.wo_columns = [
      { id: 'COL1', field: 'COL1', name: 'Column 1' },
      { id: 'COL2', field: 'COL2', name: 'Column 2' },
      { id: 'COL3', field: 'COL3', name: 'Column 3' },
      { id: 'COL4', field: 'COL4', name: 'Column 4' },
      { id: 'COL5', field: 'COL5', name: 'Column 5' },
      { id: 'COL6', field: 'COL6', name: 'Column 6' },
      { id: 'COL7', field: 'COL7', name: 'Column 7' },
      { id: 'COL8', field: 'COL8', name: 'Column 8' },
      {
        id: 'COL9',
        field: 'COL9',
        name: 'Column 9',
        formatter: Soho.Formatters.Hyperlink,
        href: '#',
        click: (e, args) => {
          alert(`You clicked ${args[0].item.COL9}`);
        }
      },
      { id: 'COL10', field: 'COL10', name: 'Column 10' },
      { id: 'COL11', field: 'COL11', name: 'Column 11' },
      { id: 'COL12', field: 'COL12', name: 'Column 12' },
      { id: 'COL13', field: 'COL13', name: 'Column 13' },
      { id: 'COL14', field: 'COL14', name: 'Column 14' },
      { id: 'COL14', field: 'COL14', name: 'Column 15' },
      { id: 'COL14', field: 'COL14', name: 'Column 16' },
      { id: 'COL14', field: 'COL14', name: 'Column 17' },
      { id: 'COL14', field: 'COL14', name: 'Column 18' },
      { id: 'COL14', field: 'COL14', name: 'Column 19' },
      { id: 'COL14', field: 'COL14', name: 'Column 20' },
      { id: 'COL14', field: 'COL14', name: 'Column 21' },
      { id: 'COL14', field: 'COL14', name: 'Column 22' },
      { id: 'COL14', field: 'COL14', name: 'Column 23' }
    ];
  }

  test() {
    from(['A', 'B'])
      .pipe(
        concatMap(item => this.singleApi(item)
          .pipe(
            catchError(err => of(err)),
            tap(res => {
              if (res.errorMessage) console.log(`Error on ${res.errorMessage}`)
            }),
            filter(res => !res.errorMessage ),
            tap(res => console.log(res.item || res.errorMessage)),
            switchMap(() => this.multipleApi('listCO', 3)),
            tap(res => console.log(res.items)),
            switchMap((res: any) => {
              return from(res.items);
            }),
            concatMap((item: any) => this.singleApi('from concat')
              .pipe(
                tap(res => console.log(res.item)),
              )
            ),
            toArray(),
            // tap(res => console.log(`concatMap ${res}`)),
            // concatAll(),
            tap(() => console.log('after concat all'))
            )
        
        ),
        // Do not continue if first api returned error
        
        // map(res => res.items),
        // filter(items => items.length > 0),

        // switchMap(items => from(items)),
        // concatMap((item: any) => this.singleApi(`proposedate_${item.value}`, true)
        //   .pipe(
        //     catchError(err =>  of(err)),
        //     tap(res => console.log(res.item || res.errorMessage)),
        //     switchMap((res: any) => {
        //       if (res.errorMessage) {
        //         return of({errorMessage: 'update not executed' });
        //       }
              
        //       return this.singleApi(`update_${res.item.value}`, true)
        //     }),
        //     catchError(err =>  of(err)),
        //     tap(res => console.log(res.item || res.errorMessage)),
        //   )
        // ),
      ).subscribe({
        next: (res: any) => {
          console.log('Observable done', res.item || res.errorMessage);
          console.log('==================================================');
        },
        error: err => console.log(err),
        complete: () => console.log('%c ======= All done! ', 'background: #25AF65; color: #ffffff')
      });
  }

  /*
   * @id - id of the Observable
   * @withError - Observable is possible to return an error. False by default
   * @definite - Set to true if error should be return immediately. By default this is set to false and will return error with 20% possiblity
   */
  singleApi(id: string, withError = false, definite = false): Observable<any> {
    if (withError && definite
        ||
        withError && !definite
        && Math.ceil(Math.random() * 5) === 3) {
      return throwError({ errorCode: id, errorMessage: 'System malfunction', item: `Error: ${id}` });
    }
    
    return of({
      item: { id, value: (Math.random() * 1000).toFixed(2), source: 'single' },
      items: [{ id, value: (Math.random() * 1000).toFixed(2), source: 'single' }]
    }).pipe(delay(1000));
  }

  multipleApi(id: string, count = 3): Observable<any> {
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: `${id}_${count + 1}`,
        value: (Math.random() * 1000).toFixed(2),
        source: 'multiple'
      });
    }

    if (count === 0) {
      return  of({ items: [] });
    }

    return of({
      item: items[0],
      items,
    });
  }
}
