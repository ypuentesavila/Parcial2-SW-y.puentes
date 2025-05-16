import { Ingredient } from '../ingredient/Ingredient';
import { Recipe } from './Recipe';

export const recipeData = [
  new Recipe(
    1,
    'Ensalada César',
    2,
    [
      'Lavar y trocear la lechuga.',
      'Cocinar el pollo a la plancha y cortarlo en tiras.',
      'Mezclar lechuga, pollo, crutones y parmesano.',
      'Agregar el aderezo César y servir.',
    ],
    15,
    'fácil',
    'almuerzo',
    'https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/755f697272cbcdc6e5df2adb44b1b705.jpg',
    ['rápido', 'saludable', 'ensalada'],
    [
      new Ingredient('lechuga romana', '1', 'unidad'),
      new Ingredient('pechuga de pollo', '200', 'gramos'),
      new Ingredient('Queso parmesano', '50', 'gramos'),
      new Ingredient('crutones', '1', 'taza'),
      new Ingredient('aderezo César', '4', 'cucharadas'),
    ]
  ),
  new Recipe(
    2,
    'Tostadas Francesas',
    2,
    [
      'Batir huevos con leche y canela.',
      'Sumergir el pan en la mezcla.',
      'Cocinar en una sartén con mantequilla hasta dorar.',
      'Servir con miel o frutas si se desea.',
    ],
    10,
    'fácil',
    'desayuno',
    'https://cdn.elcocinerocasero.com/imagen/receta/1200/2023-02-24-20-41-28/tostadas-francesas.jpeg',
    ['dulce', 'rápido', 'económico'],
    [
      new Ingredient('pan tajado', '4', 'rebanadas'),
      new Ingredient('huevo', '2', 'unidades'),
      new Ingredient('leche', '100', 'ml'),
      new Ingredient('canela', '1', 'cucharadita'),
      new Ingredient('mantequilla', '1', 'cucharada'),
    ]
  ),
];
