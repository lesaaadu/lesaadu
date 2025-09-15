"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { GallerySection } from "@/components/gallery-section"
import { CVSection } from "@/components/cv-section"
import { PhotographySection } from "@/components/photography-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const adventureItems = [
  
 
 
  {
    id: "1",
    title: "Thanchi",
    description: "Exploring the beautiful landscapes of Thanchi",
    image: "/images/thanchiselfie.JPG",
    detailedDescription:
      "Our 4-day adventure in Thanchi was an unforgettable journey through some of the most remote and stunning parts of the Bandarban hills. From navigating challenging trails to discovering hidden waterfalls, every step was filled with awe and thrill. We explored Nafakhum, Remakri Falls, Langlok Jhorna, Kumari Jhorna, and the mesmerizing Beauty Jhorna — each spot offering its own unique charm. Trekking through the difficult terrains tested our endurance but also rewarded us with pristine natural beauty, serene river paths, and a deep sense of accomplishment. It was more than just a hike — it was a true expedition into the heart of nature’s wilderness.",
    highlights: [
      "Explored 5+ hidden waterfalls including Nafakhum and Beauty Jhorna",
      "Completed one of the most remote and challenging trails in Thanchi",
      "Camped under the stars and experienced tribal hospitality",
      "Built strong teamwork and mental resilience through tough conditions",
    ],
  },
  {
    id: "2",
    title: "Kuakata",
    description: "Discovering Kuakata, the Sea Maiden, where the horizon meets the ocean in perfect harmony",
    image: "/images/kuakata.JPG",
    detailedDescription:
      "Our 2-day adventure to Kuakata was a mix of vast seas, quiet islands, and open skies. We started by exploring the wide Kuakata sea beach — where the sun rises and sets over the ocean. Then we took a boat around 40 km into the Bay of Bengal to reach a remote place called Chor Nijoy. The isolated sandbar felt like another world, surrounded by endless water and silence. At sunset, we began our return journey, this time passing through narrow forest canals near the Sundarbans. Although we traveled for hours by boat and launch, we interestingly never saw a typical river — no riverbanks, ghats, or flowing currents. Just endless flat water stretching to the horizon. As night fell, we climbed onto the roof of the launch and rode back to Barishal under the stars, wind on our faces, waves below. That final stretch — open sky above, water all around — made the whole journey unforgettable.",
    highlights: [
      "Explored the calm and scenic Kuakata sea beach",
      "Traveled 40 km deep into the sea to reach Chor Nijoy",
      "Returned through quiet forest canals near the Sundarbans",
      "Didn't see any traditional rivers — only sea and open water",
      "Rode on the launch roof all the way back to Barishal under the night sky",
    ],
  },
]

const projectItems = [
  {
    id: "1",
    title: "AI Waste Classification System",
    description: "Machine learning project for automated waste sorting and classification",
    image: "/images/Waste-Management.jpg",
    link: "https://github.com/lesaaadu",
    detailedDescription:
      "This project focuses on developing an AI-powered waste classification system that can automatically identify and sort different types of waste materials. Using computer vision and deep learning techniques, the system can distinguish between recyclable, organic, and hazardous waste with high accuracy. The project aims to improve waste management efficiency and promote sustainable practices in urban environments.",
    highlights: [
      "Achieved 95% accuracy in waste classification",
      "Implemented using TensorFlow and OpenCV",
      "Designed for real-time processing capabilities",
      "Integrated with IoT sensors for smart bins",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Node.js"],
  },
  {
    id: "2",
    title: "CurrentEdge – News Blog Website",
    description: "A Blogspot-based platform to publish and update real-time global news",
    image: "/images/currentedge.png", // Replace with your actual screenshot/image path
    link: "https://www.currentedge.online/",
    detailedDescription:
      "CurrentEdge is a responsive and user-friendly news blog built on Google's Blogspot platform. Designed to share timely updates and news from around the world, it features organized categories, search functionality, and a clean reading experience. The site is optimized for both desktop and mobile users, with easy content management via Blogger's backend. Ideal for journalism, personal commentary, or community news publishing.",
    highlights: [
      "Built using Google's Blogspot (Blogger) platform",
      "Organized by categories for better content navigation",
      "Mobile-friendly layout with clean, readable design",
      "Custom domain integration with SEO optimization",
      "Easy post management through Blogger dashboard",
    ],
    technologies: ["Blogspot (Blogger)", "Custom XML Template", "HTML", "CSS", "SEO Tools", "Google Domains"],
  },
]

const achievementItems = [
  // Placeholder for achievement items
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "adventures" | "projects" | "contact">("home")
  const [showCV, setShowCV] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        {activeTab === "home" && (
          <>
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8 text-balance px-2 sm:px-4">
                I am Hossain Saad
              </h1>

              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-border shadow-lg animate-bounce-slow">
                  <Image
                    src="/images/profile pic.JPG"
                    alt="Hossain Saad"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center px-2 sm:px-4 md:px-6 mb-8">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed sm:leading-relaxed md:leading-loose text-pretty">
                I'm a final-year Computer Science and Engineering student at BRAC University and founder of the Uddogh
                Foundation. I'm also a passionate front-end developer currently interning in machine learning. My thesis
                on AI-based waste classification and energy prediction aims to create smarter, sustainable
                waste-to-energy solutions. Beyond tech, I find inspiration in travelling, biking, and exploring new
                places. I'm committed to learning and building technology that makes a difference.
              </p>
            </div>

            <div className="text-center mb-8">
              <Button
                onClick={() => setShowCV(!showCV)}
                variant="default"
                size="lg"
                className="px-8 py-3 text-lg font-semibold"
              >
                {showCV ? "My CV" : "View CV"}
              </Button>
            </div>

            {showCV && <CVSection />}
          </>
        )}

        {activeTab === "adventures" && <GallerySection title="My Adventures" items={adventureItems} />}

        {activeTab === "projects" && <GallerySection title="My Projects" items={projectItems} />}

        {activeTab === "contact" && <PhotographySection />}
      </main>
    </div>
  )
}
