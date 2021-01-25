import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AdminComponent } from './admin.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DialogPromptComponent } from './dialog-prompt/dialog-prompt.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    RecipesComponent,
    AdminComponent,
    RecipeComponent,
    DialogPromptComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, MaterialModule, FormsModule],
})
export class AdminModule {}
