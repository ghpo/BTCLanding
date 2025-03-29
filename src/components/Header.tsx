import React from 'react'
import { Bitcoin, Zap, ShieldCheck, Globe } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Bitcoin: The Future of Decentralized Finance
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Revolutionize your financial transactions with a transparent, 
            efficient, and borderless payment solution powered by Bitcoin 
            and Lightning Network.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#learn-more" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Learn More
            </a>
            <a 
              href="#use-cases" 
              className="border border-white/30 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Use Cases
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <Bitcoin 
            className="text-orange-400" 
            size={300} 
            strokeWidth={1} 
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </header>
  )
}

export default Header
