import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from '@angular/forms';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent, DiretivasAtributosComponent, MenuComponent, DiretivasEstruturaisComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class AppModule { }
