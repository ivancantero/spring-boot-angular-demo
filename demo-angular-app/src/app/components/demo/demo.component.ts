import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  valorGenerado: string;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.demoService
      .getValor()
      .subscribe((valor: string) => (this.valorGenerado = valor));
  }
}
