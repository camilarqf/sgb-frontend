import { BibliotecarioService } from './../../../service/bibliotecario.service';
import { Bibliotecario } from './../../../models/bibliotecario';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bibliotecarios-list',
  templateUrl: './bibliotecarios-list.component.html',
  styleUrls: ['./bibliotecarios-list.component.css'],
})
export class BibliotecariosListComponent implements OnInit {
  DATA: Bibliotecario[] = [];

  constructor(private service: BibliotecarioService) {}

  dataSource = new MatTableDataSource<Bibliotecario>(this.DATA);
  ngOnInit(): void {
    this.findAll();
    console.log(this.dataSource)
  }

  findAll(): void {
    this.service.findAll().subscribe((response) => {
      this.DATA = response;
      this.dataSource = new MatTableDataSource<Bibliotecario>(this.DATA);
    });
  }
}
