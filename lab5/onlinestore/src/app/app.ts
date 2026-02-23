import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './models/category';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { CategoryList } from './components/category-list/category-list';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CategoryList, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private productService = inject(ProductService);

  categories: Category[] = this.productService.getCategories();
  products: Product[] = [];
  selectedCategoryId: number | null = null;

  onCategorySelected(categoryId: number | null) {
    this.selectedCategoryId = categoryId;
    this.products = categoryId === null ? [] : this.productService.getProductsByCategory(categoryId);
  }
}
