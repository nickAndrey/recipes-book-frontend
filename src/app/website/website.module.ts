import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, WebsiteComponent, FoodCardComponent, RecipeComponent, NotFoundComponent],
  imports: [CommonModule, WebsiteRoutingModule],
})
export class WebsiteModule {}
