import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, ChefHat } from "lucide-react";

export interface Recipe {
    title: string;
    description: string;
    prepTime: string;
    servings: string;
    difficulty: string;
    ingredients: string[];
    steps: string[];
    macros?: {
        calories: string;
        protein: string;
        carbs: string;
        fats: string;
    }
}

interface RecipeCardProps {
    recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col">
            <CardHeader className="bg-orange-50/50 pb-4">
                <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl font-bold text-neutral-900 line-clamp-2">
                        {recipe.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-white text-orange-600 border-orange-100 shrink-0">
                        {recipe.difficulty}
                    </Badge>
                </div>
                <CardDescription className="line-clamp-2 mt-2">
                    {recipe.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex-1">
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-6">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} people</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <ChefHat className="w-4 h-4 text-orange-500" /> Ingredients
                        </h4>
                        <ul className="text-sm text-neutral-600 list-disc pl-5 space-y-1">
                            {recipe.ingredients.slice(0, 4).map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                            {recipe.ingredients.length > 4 && (
                                <li className="text-neutral-400 italic">...and {recipe.ingredients.length - 4} more</li>
                            )}
                        </ul>
                    </div>
                </div>
            </CardContent>
            {recipe.macros && (
                <CardFooter className="bg-neutral-50 p-4 text-xs text-neutral-500 justify-between">
                    <div>
                        <span className="font-semibold">{recipe.macros.calories}</span> Kcal
                    </div>
                    <div className="flex gap-3">
                        <span><span className="font-semibold">{recipe.macros.protein}</span> P</span>
                        <span><span className="font-semibold">{recipe.macros.carbs}</span> C</span>
                        <span><span className="font-semibold">{recipe.macros.fats}</span> F</span>
                    </div>
                </CardFooter>
            )}
        </Card>
    );
}
