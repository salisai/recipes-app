"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ImageUpload } from "@/components/dashboard/ImageUpload";
import { RecipeCard, Recipe } from "@/components/dashboard/RecipeCard";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const { user } = useUser();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleGenerate = async () => {
    if (!selectedImage) return;

    setIsGenerating(true);
    setRecipes([]);

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to generate recipes");
      }

      const data = await response.json();
      setRecipes(data.recipes);
      toast({
        title: "Success",
        description: "Here are some delicious ideas!",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl mb-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          RecallKit <span className="text-orange-500">Kitchen</span>
        </h1>
        <p className="text-neutral-600 max-w-2xl">
          Welcome back, {user?.firstName || "Chef"}! Ready to cook? Upload a photo of your ingredients below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
          <ImageUpload
            onImageSelected={setSelectedImage}
            selectedImage={selectedImage}
            onClear={() => {
              setSelectedImage(null);
              setRecipes([]);
            }}
          />

          <div className="mt-6 flex justify-end">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white min-w-[200px] text-lg rounded-full"
              disabled={!selectedImage || isGenerating}
              onClick={handleGenerate}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Recipes
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {recipes.length > 0 && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="text-orange-500" /> Suggested Recipes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
