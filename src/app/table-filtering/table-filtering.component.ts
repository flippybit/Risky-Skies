import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatPaginatorModule, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Ivuelos {
  numTerminal: Number
  destino: string
  numVuelo: string
  horaLlegada: string
  airline: string
  status: string
  img: string
}

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.css']
})
export class TableFilteringComponent implements AfterViewInit {

  displayedColumns: string[] = ['numTerminal','airline', 'destino', 'horaLlegada', 'numVuelo'];
//  dataSource = new MatTableDataSource(ELEMENT_DATA);
dataSource: MatTableDataSource<Ivuelos>;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private afs: AngularFirestore) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    // REFACTOR - implementar con sercivios
    this.afs.collection<any>('freakyFlights').valueChanges().subscribe(doc => {
      this.dataSource = new MatTableDataSource(doc);
      console.log(doc);
      
      this.dataSource.paginator = this.paginator
      
    })
  }

}
