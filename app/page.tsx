import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";

export default async function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Social Proof / Trust Banner would go here */}

      <div id="how-it-works" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">1</div>
              <h3 className="text-xl font-semibold mb-2">Snap a Photo</h3>
              <p className="text-neutral-600">Take a picture of your fridge, pantry, or ingredients.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">2</div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-neutral-600">Our vision AI identifies ingredients instantly.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-600">3</div>
              <h3 className="text-xl font-semibold mb-2">Cook Deliciously</h3>
              <p className="text-neutral-600">Get personalized recipes and step-by-step guides.</p>
            </div>
          </div>
        </div>
      </div>

      <Features />
      <Pricing />
    </main>
  );
}
