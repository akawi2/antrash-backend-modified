import { ProductService } from "./product.service";
import { AddProduct } from "./dto/product.dto";
import { Product } from "src/core/models/product.schema";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    addProduct(addProduct: AddProduct): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
    modifiedProduct(id: string, changedProduct: AddProduct): Promise<Product>;
    displayProduct(): Promise<Product[]>;
}
