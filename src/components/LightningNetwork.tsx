import React from 'react'
import { Zap, Clock, Send } from 'lucide-react'

const LightningNetwork: React.FC = () => {
  const features = [
    {
      icon: <Zap className="text-yellow-400" size={48} />,
      title: "Instant Transactions",
      description: "Process payments in milliseconds with near-zero fees."
    },
    {
      icon: <Clock className="text-blue-400" size={48} />,
      title: "Low Cost",
      description: "Significantly reduced transaction costs compared to traditional methods."
    },
    {
      icon: <Send className="text-green-400" size={48} />,
      title: "Global Reach",
      description: "Send money anywhere in the world without intermediaries."
    }
  ]

  return (
    <section id="lightning-network" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Lightning Network: Speed Meets Efficiency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of near-instantaneous, low-cost transactions 
            that transform how digital payments are processed globally.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LightningNetwork
