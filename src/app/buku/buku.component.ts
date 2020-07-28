import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import halaman dialog yang sudah dibuat pada tahap sebelumnya
import { TambahDataComponent } from '../tambah-data/tambah-data.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})

export class BukuComponent implements OnInit {
  dataBuku: Object;

  constructor(
    public dialog: MatDialog,
    public api: ApiService
  ) {
    this.getData()
  }

  getData()
  {
    this.api.baca().subscribe(res=>{
      this.dataBuku=res;
    })
  }

  ngOnInit(): void {
  }

  tambahBuku() {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data: null
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getData
    });
  }


  editBuku(data) {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
      data: data
    });
    dialogRef.afterClosed().subscribe(res => {
      this.getData // menampilkan data setelah diperbarui
    });
  }

  hapusBuku(id) {
    console.log('data dihapus')
    this.api.hapus(id).subscribe(res => {
      this.getData()
    })
  }
}

  
  