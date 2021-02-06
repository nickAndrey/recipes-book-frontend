import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { IRecipeModel } from '../../../models/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

export type formType = 'create' | 'edit';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  recipe: IRecipeModel;
  recipeID: IRecipeModel['id'];
  recipeForm: FormGroup;
  formType: formType;

  get randomId(): string {
    return Math.floor(Math.random() * 100).toString();
  }

  setFormBaseValue(valueToCheck: any | undefined, baseValue: string | any): any {
    return valueToCheck === undefined || baseValue ? baseValue : valueToCheck;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((item) => (this.recipeID = item.id));
    this.activatedRoute.data.subscribe((item) => (this.formType = item.type));

    if (this.formType === 'edit') {
      this.recipeService.read(this.recipeID).subscribe((data) => {
        this.recipe = data.rows[0];
        this.initForm(this.recipe);
      });
    } else {
      this.initForm(this.recipe);
    }
  }

  initForm(rows): void {
    const {
      id,
      cooktime,
      cookingmethod,
      recipecategory,
      recipecuisine,
      recipeingredient,
      datecreated,
      name,
      author,
      image,
      description,
      content_md
    } = rows || {};

    this.recipeForm = this.fb.group({
      id: [this.setFormBaseValue(id, '')],
      cooktime: [this.setFormBaseValue(cooktime, '')],
      cookingmethod: [this.setFormBaseValue(cookingmethod, '')],
      recipecategory: [this.setFormBaseValue(recipecategory, '')],
      recipecuisine: [this.setFormBaseValue(recipecuisine, '')],
      recipeingredient: [this.setFormBaseValue(recipeingredient, '')],
      datecreated: [this.setFormBaseValue(datecreated, '')],
      name: [this.setFormBaseValue(name, '')],
      author: [this.setFormBaseValue(author, '')],
      image: [this.setFormBaseValue(image, '')],
      content: [this.setFormBaseValue(content_md, '')],
      description: [this.setFormBaseValue(description, '')],
      setIngredient: [this.setFormBaseValue(recipeingredient, '')],
    });

    this.onValueChanges();
  }

  onValueChanges(): void {
    this.recipeForm.get('setIngredient').valueChanges.subscribe((value) => {
      this.getControl('recipeingredient').setValue(value.split(/[,]+/));
    });
  }

  getControl(controlName: string): AbstractControl {
    return this.recipeForm.controls[controlName];
  }

  onSubmit(): void {
    this.recipeForm.get('datecreated').setValue(moment().format());
    this.recipeForm.get('setIngredient').disable();

    if (this.formType === 'edit') {
      this.recipeService.update(this.recipeID, this.recipeForm.value).subscribe(async (data) => {
        await this.router.navigate(['/admin/recipes', data]);
      });
    } else {
      this.recipeService.create(this.recipeForm.value).subscribe(async (data) => {
        await this.router.navigate(['/admin/recipes']);
      });
    }
  }
}
