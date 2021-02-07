import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogPromptComponent } from './dialog-prompt/dialog-prompt.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  reason: string;

  constructor(private recipesService: RecipesService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  drop(reason): void {
    this.recipesService.dropTable(reason).subscribe((data) => {
      console.log(data);
    });
  }

  create(): void {
    this.recipesService.createTable().subscribe((data) => {
      console.log(data);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPromptComponent, {
      width: '250px',
      data: { reason: this.reason },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.drop(result);
      }
    });
  }
}
