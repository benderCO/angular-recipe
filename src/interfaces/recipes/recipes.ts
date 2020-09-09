import { Direction } from '../direction/direction';
import { Images } from '../images/images';
import { Ingredient } from '../ingredient//ingredient';

export interface Recipes {
    uuid: String
    title: String
    description: String
    images: Images
    servings: Number
    prepTime: Number
    cookTime: Number
    postDate: Date
    editDate: Date
    ingredients: [
      Ingredient
    ]
    directions: [
      Direction
    ]
}
