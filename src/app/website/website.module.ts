import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../material/material.module';
import { TooltipDirective } from './directives/tooltip.directive';

@NgModule({
  declarations: [
    HomeComponent,
    WebsiteComponent,
    FoodCardComponent,
    RecipeComponent,
    NotFoundComponent,
    TooltipDirective,
  ],
  imports: [CommonModule, WebsiteRoutingModule, MaterialModule],
})
export class WebsiteModule {}
