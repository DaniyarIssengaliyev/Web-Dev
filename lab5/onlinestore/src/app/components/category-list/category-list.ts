import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  @Input() categories: Category[] = [];
  @Input() selectedCategoryId: number | null = null;

  @Output() categorySelected = new EventEmitter<number>();

  selectCategory(categoryId: number) {
    this.categorySelected.emit(categoryId);
  }
}
