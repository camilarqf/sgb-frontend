import { UsuarioService } from './../../../service/usuario.service';
import { Usuario } from './../../../models/usuario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** Constants used to fill up our data base. */

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {
  DATA: Usuario[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'cpf',
    'matricula',
    'acoes',
  ];
  loading: boolean = true;
  dataSource = new MatTableDataSource<Usuario>(this.DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: UsuarioService) {}
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
  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      this.DATA = response;
      this.dataSource = new MatTableDataSource<Usuario>(this.DATA);
      this.loading = false;
    });
  }
}
