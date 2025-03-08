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
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Decorative shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="absolute -bottom-32 right-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>

          {/* Playful shapes */}
          <motion.div
            className="absolute top-20 right-[10%] h-16 w-16 rounded-full bg-yellow-300 opacity-70"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-[15%] h-12 w-12 rounded-full bg-pink-400 opacity-70"
            animate={{
              y: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/3 left-[5%] h-8 w-8 rounded-full bg-green-400 opacity-70"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div
              className="md:w-1/2 z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded-full">
                <span className="text-primary font-medium">Fun for kids ages 4-10</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  Learn Emotions
                </span>
                <br />
                Through Play!
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Join our magical adventure to understand feelings, make new friends, and develop emotional intelligence
                through interactive games and stories!
              </p>
              <div className="flex flex-wrap gap-4">
                <AnimatedButton >Start Playing</AnimatedButton>
                <AnimatedButton >Watch Demo</AnimatedButton>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`Happy child ${i}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">2,000+</span> happy kids learning
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-8 border-dashed border-primary/30 animate-spin-slow"></div>

                {/* Main image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-background shadow-2xl">
                  <Image
                    src="/hero.jpg?height=500&width=500"
                    alt="Happy children playing together"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating emotion bubbles */}
                <motion.div
                  className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-background p-2 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="h-full w-full rounded-full bg-yellow-100 flex items-center justify-center">
                    <Smile className="h-10 w-10 text-yellow-500" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 -left-6 h-16 w-16 rounded-full bg-background p-2 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                    <Star className="h-8 w-8 text-blue-500" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/50"></div>

        {/* Wavy divider */}
        <div className="absolute top-0 left-0 right-0 h-20 -z-10 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-20 text-background fill-current"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Magic</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our app is filled with exciting features designed to make emotional learning fun and engaging for
                children of all ages.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                title: "Face Museum",
                description: "Explore different emotions and learn what they mean through interactive exhibits!",
                icon: <Smile className="text-primary" size={28} />,
                href: "/face-museum",
                color: "bg-primary/10 text-primary",
              },
              {
                title: "Fun Levels",
                description: "Complete exciting challenges and earn rewards as you master emotional intelligence!",
                icon: <Trophy className="text-secondary" size={28} />,
                href: "/levels",
                color: "bg-secondary/10 text-secondary",
              },
              {
                title: "Story Time",
                description: "Create your own emotional stories and adventures with our interactive storyboard!",
                icon: <Book className="text-accent" size={28} />,
                href: "/storyboard",
                color: "bg-accent/10 text-accent",
              },
              {
                title: "Cool Badges",
                description: "Collect awesome badges as you learn and grow your emotional vocabulary!",
                icon: <Star className="text-yellow-500" size={28} />,
                href: "/badges",
                color: "bg-yellow-100 text-yellow-700",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  href={feature.href}
                  iconClassName={feature.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

