import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  visibleProducts: Product[] = [];

  @Input() set products(value: Product[]) {
    this.visibleProducts = [...(value ?? [])];
  }

  deleteProduct(productId: number) {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== productId);
  }
}
