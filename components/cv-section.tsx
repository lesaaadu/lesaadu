"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CVSection() {
  const cvData = {
    personalInfo: {
      name: "Al Amin Hossain Saad",
      birthDate: "27th July 2002",
      phone: "+88 01600264869",
      address: "House No. 659, Manikdi Bazar, Dhaka Cantonment, Dhaka 1206, Bangladesh",
      email: "ualamin512@gmail.com",
    },
    skills: {
      computer: [
        "Adobe Photoshop",
        "C, C++, Java, Python",
        "HTML, CSS, JavaScript, React",
        "MySQL, Mongo DB",
        "MS Word, Excel, PowerPoint",
        "WordPress, Blogspot (Blogger)",
        "Google Colab, VS Code, Jupyter",
      ],
      languages: [
        "Bengali (Native Language)",
        "English (Fluency in writing, reading, speaking, listening)",
        "Mandarin Chinese (Conversational level)",
      ],
      interests: ["Photography", "Travelling", "Reading"],
    },
    summary:
      "As a tech enthusiast with a passion for learning and innovation, I aim to solve real-life problems through technology. I am currently working on my undergraduate thesis focusing on AI and ML-based waste management through incineration, developing efficient classification models to support waste reduction and energy generation. I've also contributed to projects like AI-based skin disease detection. Beyond AI and ML, I'm deeply interested in cryptography and cybersecurity research. I have full-stack web development experience and strong graphic design skills using tools like Adobe Photoshop and Illustrator. I thrive in challenging environments that demand critical thinking, creativity, and meaningful contribution.",
    education: [
      {
        period: "2021 - Present",
        degree: "B.Sc. in Computer Science and Engineering",
        institution: "Brac University",
      },
      {
        period: "2017 - 2019",
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Adamjee Cantonment College, Dhaka",
      },
      {
        period: "2015 - 2017",
        degree: "Secondary School Certificate",
        institution: "Dhaka Cantonment Board Bidya Niketon",
      },
    ],
    experience: [
      {
        period: "June 2024 – December 2024",
        position: "Instructor",
        organization: "Project Amra",
        website: "http://facebook.com/projectamra",
      },
      {
        period: "March 2020 – Present",
        position: "Founder and Organizing Secretary",
        organization: "Uddogh Foundation",
        website: "https://www.facebook.com/uddogh.org.bd",
      },
      {
        period: "January 2022 – 2023",
        position: "Captain",
        organization: "BRACU Summer 21 Football Team",
        website: "https://www.instagram.com/bracu_summer21_football_team",
      },
    ],
achievements: [
  "1st Runner-up, RoboWar (8kg) at Techfest–IIT Bombay Bangladesh Zonal, hosted by IRC IUBAT, powered by Astonafa & Reliant, held on 22–23 December 2022",
  "Achieved Bronze Standard of The Duke of Edinburgh's International Award on 16th March 2023 of Bangladesh",
  "Talk show session titled 'The Call of Economy' by BRAC University Business and Economics Forum (BuBeF) on 4th April 2022",
  "Completed Self-Defense & Taekwondo Training and Seminar under Bangladesh Taekwondo Federation for Cantonment School students, held from 10th December 2013 to 2nd January 2014",
  "Champion, Intra Football Tournament - BRACU Football Club (2021 & 2022): Contributed to team victories in consecutive intra-university tournaments",
  "Winner, RS60 Cricket Tournament: Part of the championship-winning team",
  "Player, Ajampur Football Club (2022–2023): Represented the club in local and regional tournaments"
],

  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{cvData.personalInfo.name}</CardTitle>
            <CardDescription>Born: {cvData.personalInfo.birthDate}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <strong>Phone:</strong> {cvData.personalInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {cvData.personalInfo.email}
            </p>
            <p>
              <strong>Address:</strong> {cvData.personalInfo.address}
            </p>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{cvData.summary}</p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Computer Skills</h4>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.computer.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {cvData.skills.interests.map((interest, index) => (
                  <Badge key={index} variant="default">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="mt-1 sm:mt-0">
                    {edu.period}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{exp.position}</h4>
                    <p className="text-muted-foreground">{exp.organization}</p>
                  </div>
                  <Badge variant="outline" className="mt-1 sm:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                {exp.website && (
                  <Button variant="link" size="sm" className="p-0 h-auto" asChild>
                    <a href={exp.website} target="_blank" rel="noopener noreferrer">
                      View Organization
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements & Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {cvData.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{achievement}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
