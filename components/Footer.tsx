import { ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-1.5 rounded-lg text-white">
                <ChefHat size={16} />
              </div>
              <span className="font-bold text-lg text-neutral-900">Culina AI</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Reducing food waste and elevating home cooking through advanced computer vision technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="hover:text-orange-500 cursor-pointer">Features</li>
              <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
              <li className="hover:text-orange-500 cursor-pointer">API</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="hover:text-orange-500 cursor-pointer">About</li>
              <li className="hover:text-orange-500 cursor-pointer">Blog</li>
              <li className="hover:text-orange-500 cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="hover:text-orange-500 cursor-pointer">Privacy</li>
              <li className="hover:text-orange-500 cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-400">
          © 2024 Culina AI Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer