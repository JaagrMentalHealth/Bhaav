"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const emotions = [
  { id: 1, name: "Happy", image: "/emotions/happy.svg", description: "A feeling of joy and pleasure" },
  { id: 2, name: "Sad", image: "/emotions/sad.svg", description: "A feeling of sorrow or unhappiness" },
  { id: 3, name: "Angry", image: "/emotions/angry.svg", description: "A strong feeling of displeasure or hostility" },
  { id: 4, name: "Surprised", image: "/emotions/surprised.svg", description: "A feeling of astonishment or wonder" },
  { id: 5, name: "Scared", image: "/emotions/scared.svg", description: "A feeling of fear or being frightened" },
  {
    id: 6,
    name: "Disgusted",
    image: "/emotions/disgusted.svg",
    description: "A feeling of strong dislike or disapproval",
  },
  {
    id: 7,
    name: "Confused",
    image: "/emotions/confused.svg",
    description: "A feeling of uncertainty or being puzzled",
  },
  {
    id: 8,
    name: "Excited",
    image: "/emotions/excited.svg",
    description: "A feeling of great enthusiasm and eagerness",
  },
  { id: 9, name: "Shy", image: "/emotions/shy.svg", description: "A feeling of being nervous or timid around others" },
  { id: 10, name: "Proud", image: "/emotions/proud.svg", description: "A feeling of satisfaction from achievements" },
  { id: 11, name: "Bored", image: "/emotions/bored.svg", description: "A feeling of weariness from lack of interest" },
  { id: 12, name: "Calm", image: "/emotions/calm.svg", description: "A feeling of peace and tranquility" },
]

export default function FaceMuseum() {
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null)

  const handleEmotionClick = (id: number) => {
    setSelectedEmotion(id === selectedEmotion ? null : id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Museum of Faces</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore different emotions and learn what they mean! Click on a face to learn more about that emotion.
        </p>
      </motion.div>

      {selectedEmotion && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6"
        >
          <div className="relative w-32 h-32">
            <Image
              src={emotions.find((e) => e.id === selectedEmotion)?.image || "/placeholder.svg"}
              alt={emotions.find((e) => e.id === selectedEmotion)?.name || "Emotion"}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{emotions.find((e) => e.id === selectedEmotion)?.name}</h2>
            <p>{emotions.find((e) => e.id === selectedEmotion)?.description}</p>
            <div className="mt-4">
              <button onClick={() => setSelectedEmotion(null)} className="text-primary hover:underline">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {emotions.map((emotion) => (
          <motion.div
            key={emotion.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-white rounded-2xl shadow-md p-4 cursor-pointer transition-colors ${
              selectedEmotion === emotion.id ? "ring-4 ring-primary" : ""
            }`}
            onClick={() => handleEmotionClick(emotion.id)}
          >
            <div className="relative w-full aspect-square mb-2">
              <Image src={emotion.image || "/placeholder.svg"} alt={emotion.name} fill className="object-contain" />
            </div>
            <h3 className="text-center font-bold">{emotion.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

