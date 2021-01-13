import { Component, OnInit } from '@angular/core';
import { IRecipeModel } from '../../../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: IRecipeModel[] = [
    {
      name: 'Boil potatoes',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbigoven-res.cloudinary.com%2Fimage%2Fupload%2Fnorth-croatian-boiled-potatoes.jpg&f=1&nofb=1',
      recipeId: '1',
    },
    {
      name: 'How to Make Flax “Eggs”',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fchocolatecoveredkatie.com%2Fwp-content%2Fuploads%2F2019%2F05%2FVegan-Flax-Eggs.jpg&f=1&nofb=1',
      recipeId: '2',
    },
    {
      name: 'Healthy Banana Bread!',
      imageUrl:
        'https://cookieandkate.com/images/2020/05/healthy-banana-bread-recipe-5-550x824.jpg',
      recipeId: '3',
    },
    {
      name: '',
      imageUrl: '',
      recipeId: '',
    },
    {
      name: '',
      imageUrl: '',
      recipeId: '',
    },
    {
      name: '',
      imageUrl: '',
      recipeId: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
