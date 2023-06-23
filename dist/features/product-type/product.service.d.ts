import { Model } from "mongoose";
import { AddProduct } from "./dto/product.dto";
import { Product, ProductDocument } from "src/core/models/product.schema";
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    displayProducts(): Promise<Product[]>;
    addProduct(addPayment: AddProduct): Promise<Product>;
    deleteProduct(id: string): Promise<ProductDocument>;
    UpdateProduct(id: string, modifiedProduct: Partial<Product>): Promise<ProductDocument>;
}
