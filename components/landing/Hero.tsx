import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Sparkles size={16} />
                    <span>AI-Powered Kitchen Assistant</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    Turn Your Groceries into <br />
                    <span className="text-orange-500">Delicious Meals</span>
                </h1>

                <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    Snap a photo of your fridge or pantry, and let our AI suggest personalized recipes based on what you have. No waste, no stress.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 text-lg rounded-full" asChild>
                        <Link href="/sign-up">
                            Start Cooking Free <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full border-neutral-200 hover:bg-white/50" asChild>
                        <Link href="#how-it-works">
                            How it Works
                        </Link>
                    </Button>
                </div>

                {/* Hero Image Mockup */}
                <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
                    <div className="rounded-xl border border-neutral-200 bg-white/50 backdrop-blur-xl p-4 shadow-2xl">
                        <div className="aspect-video rounded-lg bg-neutral-100 overflow-hidden relative">
                            {/* Placeholder for the app screenshot - would be better with a real image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
                                <p className="text-orange-900/40 font-medium text-lg">App Interface Preview</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
