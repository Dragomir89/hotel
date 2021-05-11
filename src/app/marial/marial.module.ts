import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

const materialComponents = [
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatTableModule,
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MarialModule {}
