import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MedicosComponent } from './Intermedio/espias/medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { RUTAS } from './advanced/rutas/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterMedicoComponent } from './advanced/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( RUTAS )
  ],
  providers: [ MedicoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
