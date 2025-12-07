import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for getting started",
        features: [
            "5 photo generations per month",
            "Basic recipe suggestions",
            "Save up to 10 recipes",
            "Ad-supported"
        ],
        cta: "Sign Up Free",
        popular: false
    },
    {
        name: "Pro Chef",
        price: "$9.99",
        description: "For the serious home cook",
        features: [
            "Unlimited photo generations",
            "Advanced dietary filters (Keto, Vegan, etc.)",
            "Meal prep planning",
            "Nutritional analysis",
            "Ad-free experience"
        ],
        cta: "Get Pro",
        popular: true
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-orange-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Choose the plan that fits your cooking habits. Cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative p-8 rounded-2xl bg-white border ${plan.popular ? 'border-orange-500 shadow-xl' : 'border-neutral-200 shadow-sm'} flex flex-col`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                                <span className="text-neutral-500">/month</span>
                            </div>
                            <p className="text-neutral-600 mb-8">{plan.description}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-600">
                                        <Check className="w-5 h-5 text-orange-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? "default" : "outline"}
                                className={`w-full h-12 text-lg rounded-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700'}`}
                                asChild
                            >
                                <Link href="/sign-up">{plan.cta}</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
