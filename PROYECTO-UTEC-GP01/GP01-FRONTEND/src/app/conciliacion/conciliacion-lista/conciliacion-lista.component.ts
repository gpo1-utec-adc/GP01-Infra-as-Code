import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conciliacion } from 'src/app/_model/conciliacion';
import { ConciliacionService } from 'src/app/_service/conciliacion.service';

@Component({
  selector: 'app-conciliacion-lista',
  templateUrl: './conciliacion-lista.component.html',
  styleUrls: ['./conciliacion-lista.component.css']
})
export class ConciliacionListaComponent implements OnInit {
  conciliacion: Conciliacion[] = [];
  filterQuery = "";

  
  constructor(private conciliacionService: ConciliacionService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
     
        this.conciliacionService.getConciliacion().subscribe(data => {
          this.conciliacion = data;
        });
    

      }
}

