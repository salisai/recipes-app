import { Camera, Sparkles, Globe, Zap } from "lucide-react";

const features = [
    {
        icon: <Camera className="w-6 h-6 text-orange-500" />,
        title: "Instant Recognition",
        description: "Our advanced vision AI identifies ingredients from your photos with 99% accuracy."
    },
    {
        icon: <Sparkles className="w-6 h-6 text-orange-500" />,
        title: "AI Chef Magic",
        description: "Get creative recipe suggestions that use exactly what you have, minimizing food waste."
    },
    {
        icon: <Globe className="w-6 h-6 text-orange-500" />,
        title: "Global Cuisines",
        description: "Explore tastes from around the world. Turn your potatoes into Bombay Aloo or Gnocchi."
    },
    {
        icon: <Zap className="w-6 h-6 text-orange-500" />,
        title: "Step-by-Step",
        description: "Clear, easy-to-follow instructions generated instantly for every recipe."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Everything you need to <span className="text-orange-500">cook smarter</span>
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Stop worrying about what to cook. Let our AI handle the creativity while you enjoy the cooking.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-orange-50/50 hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
