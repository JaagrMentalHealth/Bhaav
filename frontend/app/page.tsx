"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Smile, Trophy, Book, Star } from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Learn Emotions Through Play!</h1>
              <p className="text-lg mb-6">Join our fun adventure to understand feelings and make new friends!</p>
              <div className="flex flex-wrap gap-4">
                <AnimatedButton>Start Playing</AnimatedButton>
                <AnimatedButton className="btn-secondary bg-accent-green hover:bg-accent-green">Watch Demo</AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/hero-image.jpg"
                  alt="Happy children playing together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <FeatureCard
                title="Face Museum"
                description="Explore different emotions and learn what they mean!"
                icon={<Smile className="text-primary" />}
                href="/face-museum"
                bgColor="bg-card-pink"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <FeatureCard
                title="Fun Levels"
                description="Complete exciting challenges and earn rewards!"
                icon={<Trophy className="text-accent-blue" />}
                href="/levels"
                bgColor="bg-card-blue"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <FeatureCard
                title="Story Time"
                description="Create your own emotional stories and adventures!"
                icon={<Book className="text-accent-green" />}
                href="/storyboard"
                bgColor="bg-card-green"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <FeatureCard
                title="Cool Badges"
                description="Collect awesome badges as you learn and grow!"
                icon={<Star className="text-secondary" />}
                href="/badges"
                bgColor="bg-card-yellow"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

