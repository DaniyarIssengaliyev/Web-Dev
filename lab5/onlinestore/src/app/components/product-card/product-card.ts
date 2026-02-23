import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
@Component({
  selector: 'product-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();
  justLiked = false;

  likeProduct() {
    this.product.likes += 1;
    this.justLiked = true;
    setTimeout(() => {
      this.justLiked = false;
    }, 180);
  }

  onDelete() {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }
    this.deleteProduct.emit(this.product.id);
  }

  shareWhatsApp() {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
  get stars(): boolean[]{
    const full = Math.round(this.product.rating);
    return Array.from({ length: 5 }, (_, i) => i < full);
  }

  selectedImage!: string;
  ngOnInit(){
    if (this.product?.image) {
      this.selectedImage = this.product.image;
    return;
    }
    if (this.product?.images?.length) {
      this.selectedImage = this.product.images[0];
    }
  }

  selectImage(img: string){
    this.selectedImage = img;
  }

  get allImages(): string[] {
  const main = this.product?.image ? [this.product.image] : [];
  const others = this.product?.images ?? [];
  return Array.from(new Set([...main, ...others]));
}
}
