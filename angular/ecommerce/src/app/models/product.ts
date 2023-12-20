import { Category } from "./category"

export interface Product {
    id?: Number,
    title: String,
    price: Number,
    description: String,
    category: Category,
    categoryId?: 0,
    images: String []
}