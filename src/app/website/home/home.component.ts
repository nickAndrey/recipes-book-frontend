import { Component, OnInit } from '@angular/core';
import { IRecipeModel } from '../../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: IRecipeModel[];
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.read().subscribe((data) => (this.recipes = data.rows));
  }
}
