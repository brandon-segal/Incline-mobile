import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesComponent } from './categories/categories';
import { CommonModule } from '@angular/common';
import { HabitProgressComponent } from './habit-progress/habit-progress';
import { HabitProgressConfig } from './habit-progress/habit-progress.config';
import { HabitProgressEase } from './habit-progress/habit-progress.ease';
import { HabitProgressService } from './habit-progress/habit-progress.service';
import { NameHabitComponent } from './name-habit/name-habit';
import { StartDateComponent } from './start-date/start-date';
import { ReminderComponent } from './reminder/reminder';

@NgModule({
	declarations: [
      CategoriesComponent,
      HabitProgressComponent,
      NameHabitComponent,
      CategoriesComponent,
      StartDateComponent,
      ReminderComponent,
  ],
	imports: [IonicPageModule,CommonModule],
	exports: [
    CategoriesComponent,
    HabitProgressComponent,
    NameHabitComponent,
    StartDateComponent,
    ReminderComponent
    ],
    providers:[
      HabitProgressConfig,
      HabitProgressEase,
      HabitProgressService,
      StartDateComponent,
      ReminderComponent,
    ]
})
export class ComponentsModule {}
