import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then((mod) => mod.WebsiteModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
    AdminModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
