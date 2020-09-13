import { Special } from '../special/special'

export interface Ingredient {
    uuid: String,
    amount: Number,
    measurement: String,
    name: String
    special?: Special[] 
}
