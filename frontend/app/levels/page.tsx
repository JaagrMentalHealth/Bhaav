"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lock, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import AnimatedButton from "@/components/animated-button"
import confetti from "canvas-confetti"

const levels = [
  {
    id: 1,
    name: "Emotion Basics",
    description: "Learn the basic emotions",
    image: "/levels/level1.svg",
    unlocked: true,
    completed: true,
    stars: 3,
  },
  {
    id: 2,
    name: "Matching Game",
    description: "Match emotions with situations",
    image: "/levels/level2.svg",
    unlocked: true,
    completed: false,
    stars: 0,
  },
  {
    id: 3,
    name: "Emotion Stories",
    description: "Create stories with emotions",
    image: "/levels/level3.svg",
    unlocked: false,
    completed: false,
    stars: 0,
  },
  {
    id: 4,
    name: "Emotion Detective",
    description: "Find hidden emotions in scenes",
    image: "/levels/level4.svg",
    unlocked: false,
    completed: false,
    stars: 0,
  },
  {
    id: 5,
    name: "Emotion Charades",
    description: "Act out and guess emotions",
    image: "/levels/level5.svg",
    unlocked: false,
    completed: false,
    stars: 0,
  },
  {
    id: 6,
    name: "Emotion Master",
    description: "Final challenge with all emotions",
    image: "/levels/level6.svg",
    unlocked: false,
    completed: false,
    stars: 0,
  },
]

export default function Levels() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [userLevels, setUserLevels] = useState(levels)

  const handleLevelClick = (id: number) => {
    const level = userLevels.find((l) => l.id === id)
    if (level && level.unlocked) {
      setSelectedLevel(id)
    }
  }

  const handleCompleteLevel = () => {
    if (selectedLevel) {
      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      // Update level status
      setUserLevels((prev) =>
        prev.map((level) => {
          if (level.id === selectedLevel) {
            return { ...level, completed: true, stars: 3 }
          }
          if (level.id === selectedLevel + 1) {
            return { ...level, unlocked: true }
          }
          return level
        }),
      )

      // Close level modal after a delay
      setTimeout(() => {
        setSelectedLevel(null)
      }, 2000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Fun Levels</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Complete exciting challenges and earn rewards! Each level teaches you new emotional skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userLevels.map((level) => (
          <motion.div
            key={level.id}
            whileHover={level.unlocked ? { scale: 1.03 } : {}}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              level.unlocked ? "cursor-pointer" : "opacity-70"
            }`}
            onClick={() => handleLevelClick(level.id)}
          >
            <div className="relative h-40 bg-gradient-to-b from-primary/20 to-primary/5">
              <Image src={level.image || "/placeholder.svg"} alt={level.name} fill className="object-contain p-4" />
              {level.completed && (
                <div className="absolute top-2 right-2 bg-accent-green text-white rounded-full p-1">
                  <CheckCircle size={20} />
                </div>
              )}
              {!level.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Lock size={40} className="text-white" />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">{level.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{level.description}</p>

              <div className="flex justify-between items-center">
                <div className="flex">
                  {[...Array(3)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < level.stars ? "text-accent-yellow fill-accent-yellow" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Level {level.id}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Level Modal */}
      {selectedLevel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedLevel(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{userLevels.find((l) => l.id === selectedLevel)?.name}</h2>
            <p className="mb-6">{userLevels.find((l) => l.id === selectedLevel)?.description}</p>

            <div className="relative h-48 bg-gradient-to-b from-primary/20 to-primary/5 rounded-xl mb-6">
              <Image
                src={userLevels.find((l) => l.id === selectedLevel)?.image || "/placeholder.svg"}
                alt={userLevels.find((l) => l.id === selectedLevel)?.name || "Level"}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="flex justify-center">
              <AnimatedButton onClick={handleCompleteLevel}>Start Level</AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

