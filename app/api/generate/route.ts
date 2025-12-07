import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await req.formData();
        const image = formData.get("image");

        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        // TODO: Send image to Gemini Vision API
        // For now, simulate delay and return mock data
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Record usage in DB
        try {
            await prisma.generation.create({
                data: {
                    userId: userId,
                }
            });
        } catch (dbError) {
            console.error("Failed to record generation:", dbError);
            // Continue even if DB write fails, or decide to fail request
        }

        const mockRecipes = [
            {
                title: "Mediterranean Vegetable Pasta",
                description: "A quick and healthy pasta dish utilizing the peppers, tomatoes, and zucchini found in your photo.",
                prepTime: "20 min",
                servings: "2",
                difficulty: "Easy",
                ingredients: [
                    "2 Bell Peppers (sliced)",
                    "1 Zucchini (diced)",
                    "200g Pasta",
                    "Olive Oil",
                    "Garlic",
                    "Parmesan Cheese"
                ],
                steps: [
                    "Boil pasta in salted water.",
                    "Sauté peppers and zucchini in olive oil until soft.",
                    "Mix pasta with vegetables and top with parmesan."
                ],
                macros: {
                    calories: "450",
                    protein: "12g",
                    carbs: "65g",
                    fats: "14g"
                }
            },
            {
                title: "Stuffed Bell Peppers",
                description: "Classic stuffed peppers with a hearty filling.",
                prepTime: "45 min",
                servings: "4",
                difficulty: "Medium",
                ingredients: [
                    "4 Bell Peppers",
                    "500g Ground Beef (or substitute)",
                    "1 Onion",
                    "1 cup Rice (cooked)",
                    "Tomato Sauce"
                ],
                steps: [
                    "Preheat oven to 375°F (190°C).",
                    "Cut tops off peppers and remove seeds.",
                    "Mix meat, rice, and sauce. Stuff peppers.",
                    "Bake for 35-40 minutes."
                ],
                macros: {
                    calories: "380",
                    protein: "25g",
                    carbs: "30g",
                    fats: "18g"
                }
            },
            {
                title: "Grilled Veggie Salad",
                description: "Perfect summer salad with charred vegetables.",
                prepTime: "15 min",
                servings: "2",
                difficulty: "Easy",
                ingredients: [
                    "Mixed Bell Peppers",
                    "Zucchini",
                    "Lettuce / Greens",
                    "Balsamic Vinaigrette"
                ],
                steps: [
                    "Slice vegetables into strips.",
                    "Grill for 3-4 minutes per side.",
                    "Toss with fresh greens and dressing."
                ],
                macros: {
                    calories: "220",
                    protein: "5g",
                    carbs: "15g",
                    fats: "16g"
                }
            }
        ];

        return NextResponse.json({ recipes: mockRecipes });
    } catch (error) {
        console.error("Generate error:", error);
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}
