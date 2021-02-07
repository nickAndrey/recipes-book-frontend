import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { IRecipeModel } from '../../../models/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = [
    'name',
    'cookingmethod',
    'recipecategory',
    'recipecuisine',
    'datecreated',
    'actions',
  ];

  infoAboutAddedElement: any;

  constructor(private recipeService: RecipesService, private activatedRoute: ActivatedRoute) {}

  getRecipes(): void {
    this.recipeService.read().subscribe((data) => {
      (this.dataSource.data as IRecipeModel[]) = data.rows;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => (this.infoAboutAddedElement = data));
    this.getRecipes();
  }

  onDeleteRecipe(id: IRecipeModel['id']): void {
    this.recipeService.delete(id).subscribe((data) => {
      console.log(data);
      this.getRecipes();
    });
  }
}
