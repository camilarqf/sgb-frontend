import { BibliotecarioService } from './../../../service/bibliotecario.service';
import { Bibliotecario } from './../../../models/bibliotecario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bibliotecarios-list',
  templateUrl: './bibliotecarios-list.component.html',
  styleUrls: ['./bibliotecarios-list.component.css'],
})
export class BibliotecariosListComponent implements OnInit {
  DATA: Bibliotecario[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'matricula', 'acoes'];
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: BibliotecarioService) {}

  dataSource = new MatTableDataSource<Bibliotecario>(this.DATA);
  ngOnInit(): void {
    this.findAll();
    console.log(this.dataSource);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      this.DATA = response;
      this.dataSource = new MatTableDataSource<Bibliotecario>(this.DATA);
      this.loading = false;
    });
  }
}
