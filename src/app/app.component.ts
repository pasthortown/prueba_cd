import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sitio';
  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  calcular(operacion: string) {
    this.resultado = 0;
    switch (operacion) {
      case 'potencia':
        this.resultado = 1;
        for(let i = 0; i< this.numero2; i++) {
          this.resultado = this.resultado * this.numero1;
        }
        break;
      case 'suma':
        // Magaly
        break;
      case 'resta':
        this.resultado = (this.numero1 - this.numero2);
        break;
      case 'multiplicacion':
        this.resultado = (this.numero1 * this.numero2);

        break;
      case 'division':
        this.resultado = (this.numero1 / this.numero2);
        break;
    }
  }
}
