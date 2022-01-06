import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

const UIModule = [
  MatInputModule,
  MatIconModule,
  MatFormFieldModule
]

const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent},
  {path: '', redirectTo: 'calculator', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ...UIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
