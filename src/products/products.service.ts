import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model.js';
@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private findProduct(prodId: string): [Product, number] {
    const productIndex = this.products.findIndex(prod => prod.id === prodId);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('Product now found');
    }
    return [product, productIndex];
  }
  insertProduct(title: string, description: string, price: number): string {
    const prodId: string = Math.random().toString();
    const newProd = new Product(prodId, title, description, price);
    this.products.push(newProd);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
  getSingleProduct(prodId: string) {
    const product = this.findProduct(prodId)[0];
    return { ...product };
  }

  updateProduct(
    prodId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const [product, index] = this.findProduct(prodId);
    const updatedProduct = { ...product };
    if (title) {
      updatedProduct.title = title;
    }
    if (price) {
      updatedProduct.price = price;
    }
    if (description) {
      updatedProduct.description = description;
    }
    this.products[index] = updatedProduct;
  }
}
