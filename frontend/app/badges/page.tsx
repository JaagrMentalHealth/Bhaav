"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, Lock, Star } from "lucide-react"
import confetti from "canvas-confetti"

const badges = [
  {
    id: 1,
    name: "Emotion Explorer",
    description: "Visited the Face Museum",
    image: "/badges/explorer.svg",
    unlocked: true,
  },
  {
    id: 2,
    name: "Story Maker",
    description: "Completed your first story",
    image: "/badges/story.svg",
    unlocked: true,
  },
  {
    id: 3,
    name: "Level Master",
    description: "Completed Level 1 with 3 stars",
    image: "/badges/level.svg",
    unlocked: true,
  },
  {
    id: 4,
    name: "Emotion Detective",
    description: "Found all hidden emotions",
    image: "/badges/detective.svg",
    unlocked: false,
  },
  {
    id: 5,
    name: "Friend Maker",
    description: "Helped a character make friends",
    image: "/badges/friend.svg",
    unlocked: false,
  },
  {
    id: 6,
    name: "Emotion Master",
    description: "Learned all basic emotions",
    image: "/badges/master.svg",
    unlocked: false,
  },
  {
    id: 7,
    name: "Problem Solver",
    description: "Resolved an emotional conflict",
    image: "/badges/solver.svg",
    unlocked: false,
  },
  {
    id: 8,
    name: "Empathy Star",
    description: "Showed understanding of others' feelings",
    image: "/badges/empathy.svg",
    unlocked: false,
  },
  {
    id: 9,
    name: "Emotion Champion",
    description: "Completed all levels and stories",
    image: "/badges/champion.svg",
    unlocked: false,
  },
]

export default function Badges() {
  const [userBadges, setUserBadges] = useState(badges)
  const [selectedBadge, setSelectedBadge] = useState<number | null>(null)
  const [showNewBadge, setShowNewBadge] = useState(false)

  // For demo purposes - unlock a new badge
  const unlockRandomBadge = () => {
    const lockedBadges = userBadges.filter((badge) => !badge.unlocked)
    if (lockedBadges.length > 0) {
      const randomBadge = lockedBadges[Math.floor(Math.random() * lockedBadges.length)]

      setUserBadges((prev) => prev.map((badge) => (badge.id === randomBadge.id ? { ...badge, unlocked: true } : badge)))

      setSelectedBadge(randomBadge.id)
      setShowNewBadge(true)

      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  const handleBadgeClick = (id: number) => {
    const badge = userBadges.find((b) => b.id === id)
    if (badge && badge.unlocked) {
      setSelectedBadge(id)
      setShowNewBadge(false)
    }
  }

  // Progress stats
  const unlockedCount = userBadges.filter((badge) => badge.unlocked).length
  const progressPercentage = Math.round((unlockedCount / userBadges.length) * 100)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Trophy Room</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Collect awesome badges as you learn and grow! Each badge represents an achievement in your emotional learning
          journey.
        </p>
      </motion.div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Your Progress</span>
          <span className="text-sm font-medium">{progressPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-primary h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs">
            {unlockedCount} of {userBadges.length} badges
          </span>
          <div className="flex items-center">
            <Star size={14} className="text-accent-yellow fill-accent-yellow mr-1" />
            <span className="text-xs">Level 1</span>
          </div>
        </div>
      </div>

      {/* For demo purposes - button to unlock a random badge */}
      <div className="text-center mb-8">
        <button
          onClick={unlockRandomBadge}
          className="bg-accent-green hover:bg-accent-green/90 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105 shadow-md"
        >
          Earn a New Badge (Demo)
        </button>
      </div>

      {/* Badge Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {userBadges.map((badge) => (
          <motion.div
            key={badge.id}
            whileHover={badge.unlocked ? { scale: 1.05 } : {}}
            whileTap={badge.unlocked ? { scale: 0.95 } : {}}
            className={`relative bg-white rounded-2xl shadow-md p-4 ${
              badge.unlocked ? "cursor-pointer" : "opacity-70"
            } ${selectedBadge === badge.id ? "ring-4 ring-primary" : ""}`}
            onClick={() => handleBadgeClick(badge.id)}
          >
            <div className="relative w-full aspect-square mb-3">
              <Image
                src={badge.image || "/placeholder.svg"}
                alt={badge.name}
                fill
                className={`object-contain ${!badge.unlocked ? "grayscale" : ""}`}
              />
              {!badge.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock size={24} className="text-gray-400" />
                </div>
              )}
            </div>
            <h3 className="text-center font-bold text-sm mb-1">{badge.name}</h3>
            <p className="text-center text-xs text-gray-600">{badge.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Badge Detail Modal */}
      {selectedBadge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => {
            setSelectedBadge(null)
            setShowNewBadge(false)
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {showNewBadge && (
              <div className="text-center mb-4">
                <span className="inline-block bg-accent-yellow text-white text-sm font-bold px-3 py-1 rounded-full">
                  New Badge Unlocked!
                </span>
              </div>
            )}

            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={userBadges.find((b) => b.id === selectedBadge)?.image || "/placeholder.svg"}
                  alt={userBadges.find((b) => b.id === selectedBadge)?.name || "Badge"}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold mb-2 text-center">
                {userBadges.find((b) => b.id === selectedBadge)?.name}
              </h2>

              <p className="text-center mb-4">{userBadges.find((b) => b.id === selectedBadge)?.description}</p>

              <div className="flex items-center justify-center text-accent-yellow mb-4">
                <Trophy className="mr-2" />
                <span>Earned on {new Date().toLocaleDateString()}</span>
              </div>

              <button
                onClick={() => {
                  setSelectedBadge(null)
                  setShowNewBadge(false)
                }}
                className="text-primary hover:underline"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

