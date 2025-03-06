"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { databases } from "@/lib/appwriteConfig"

interface Emotion {
  id: number
  name: string
  image: string
  description: string
}

export default function FaceMuseum() {
  const [emotions, setEmotions] = useState<Emotion[]>([])
  const [selectedEmotion, setSelectedEmotion] = useState<number | null>(null)

  useEffect(() => {
    const fetchEmotions = async () => {
      try {
        const response = await databases.listDocuments("Emotions", "Emotions") // Database ID & Collection ID
        const emotionsData = response.documents.map((doc) => ({
          id: doc.id,
          name: doc.name,
          image: doc.image,
          description: doc.description,
        }))
        setEmotions(emotionsData)
      } catch (error) {
        console.error("Error fetching emotions:", error)
      }
    }

    fetchEmotions()
  }, [])

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
