// Photo by <a href="https://unsplash.com/@andyadcon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">De an Sun</a> on <a href="https://unsplash.com/photos/brown-acoustic-guitar-on-brown-wooden-floor-b57RqS-nQ1c?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@micahmphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Micah McKerlich</a> on <a href="https://unsplash.com/photos/a-group-of-people-playing-a-game-of-volleyball-WNMfEYSlyUY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@myke_simon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Myke Simon</a> on <a href="https://unsplash.com/photos/photography-of-cinema-atsUqIm3wxo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@tombriskey?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tom Briskey</a> on <a href="https://unsplash.com/photos/basketball-hoop-with-basketball-hoop-AddAnDkkovM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// Photo by <a href="https://unsplash.com/@risennnnn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Risen Wang</a> on <a href="https://unsplash.com/photos/gym-equipment-inside-room-20jX9b35r_M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import softwareDeveloperIcon from '../assets/icons/softwareDeveloper.svg'
import dataIcon from '../assets/icons/data.svg'
import uiuxIcon from '../assets/icons/UIUX.svg'
import webDevIcon from '../assets/icons/webDevelopment.svg'
import aiIcon from '../assets/icons/ai.svg'
import michiganStateImage from '../assets/images/michiganState.jpg'
import guitarImage from '../assets/images/guitar.jpg'
import basketballImage from '../assets/images/basketball.jpg'
import volleyballImage from '../assets/images/sandVolleyball.jpg'
import golfImage from '../assets/images/minimeGolf.jpg'
import moviesImage from '../assets/images/movies.jpg'
import me from '../assets/images/me.jpg'
import workoutImage from '../assets/images/workout.jpg'
import resume from '../assets/PhillipDesRochersResume2025.pdf'

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const totalImages = 8; // Total number of images to load

  useEffect(() => {
    const images = [
      me,
      michiganStateImage,
      guitarImage,
      basketballImage,
      volleyballImage,
      golfImage,
      moviesImage,
      workoutImage
    ];

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => prev + 1);
          resolve();
        };
        img.onerror = reject;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(images.map(loadImage));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false); // Still show content even if some images fail to load
      }
    };

    loadAllImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-orange-200">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-orange-800 text-lg">Loading images... {Math.round((loadedImages / totalImages) * 100)}%</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-orange-200">
      <div className="max-container px-4 py-8 mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 text-orange-800 text-center">My Motivation</h1>

        <section className="mb-24">
          <p className="text-xl leading-relaxed">
            I am a passionate Software Developer dedicated to continuous improvement in all aspects of my life. With a
            diverse programming skill set, I am constantly expanding my knowledge of development methods and techniques,
            embracing new challenges every day.
          </p>
          <div className="flex justify-center mt-8">
            <img 
              src={me} 
              alt="Myself" 
              className="w-96 h-96 object-cover shadow-lg border-4 border-orange-800 rounded-lg"
            />
          </div>
          <div className="flex justify-center mt-8">
            <p className='text-5xl text-gray-600'>Here is my&nbsp;</p>
            <a 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-5xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-800">My Journey</h2>
          <div className="space-y-4 text-gray-800">
            <p>
              From an early age, I was drawn to the world of problem-solving, starting with puzzles and naturally
              progressing to video games. While I enjoy popular titles, strategy games hold a special place in my heart.
              This love for problem-solving and technology led me to take my first computer science class in high
              school.
            </p>
            <p>
              My passion for coding grew, and I excelled in my AP Computer Science class during my senior year, even
              representing my school in a competition as one of the top three students in the class.
            </p>
            <p>
              After middle school, I began working as a golf caddie at a country club. In my sophomore year of high
              school, I learned about the Evans Scholarship opportunity. Through dedication and hard work over the next
              two summers, I earned this prestigious scholarship, which allowed me to attend Michigan State University
              on a full ride.
            </p>
            <p>
              At Michigan State, I pursued my computer science degree with confidence, building upon the foundation I
              had established in high school. I graduated in 2024 and am now eagerly seeking my first computer
              science-related job, ready to apply my skills and continue learning in a professional setting.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-800">Technological Interests</h2>
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            {[
              { 
                name: "Software", 
                icon: softwareDeveloperIcon,
                description: "I enjoy creating efficient and scalable software solutions that solve real-world problems efficiently."
              },
              { 
                name: "Data", 
                icon: dataIcon,
                description: "I'm fascinated by data analysis and how it can drive informed decision-making and make companies more efficient."
              },
              { 
                name: "UI/UX", 
                icon: uiuxIcon,
                description: "I love designing intuitive user interfaces that provide seamless user experiences and look aesthetically pleasing."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="w-64 h-64 rounded-full bg-white border-2 border-orange-600 flex flex-col items-center justify-center shadow-md relative overflow-hidden hover:scale-110 transition-transform duration-300 group"
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-24 h-24 object-contain mb-2"
                />
                <span className="text-orange-900 font-medium text-center text-lg">{item.name}</span>
                <div className="absolute inset-0 bg-orange-800 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="text-white text-center text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-12">
            {[
              { 
                name: "Web Development", 
                icon: webDevIcon,
                description: "I enjoy building responsive and interactive web applications that engage users."
              },
              { 
                name: "AI", 
                icon: aiIcon,
                description: "I'm excited about the potential of artificial intelligence and machine learning to transform industries."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="w-64 h-64 rounded-full bg-white border-2 border-orange-600 flex flex-col items-center justify-center shadow-md relative overflow-hidden hover:scale-110 transition-transform duration-300 group"
              >
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-24 h-24 object-contain mb-2"
                />
                <span className="text-orange-900 font-medium text-center text-lg">{item.name}</span>
                <div className="absolute inset-0 bg-orange-800 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="text-white text-center text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-800">Hobbies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Watching Michigan State Basketball",
                image: michiganStateImage,
                description:
                  "I'm a passionate Spartans fan and never miss a game. Basketball season is my favorite time of the year. GO GREEN!!!",
              },
              {
                title: "Learning Guitar",
                image: guitarImage,
                description: "I've been teaching myself to play guitar, focusing on both acoustic and electric styles.",
              },
              {
                title: "Playing Basketball",
                image: basketballImage,
                description: "I enjoy playing pickup games and recreational leagues whenever I can.",
              },
              {
                title: "Playing Beach Volleyball",
                image: volleyballImage,
                description: "During the summer months, beach volleyball is my go-to outdoor activity.",
              },
              {
                title: "Learning to Play Golf",
                image: golfImage,
                description:
                  "After years of caddying, I'm now learning to play golf myself and improving my skills on the course.",
              },
              {
                title: "Watching Movies",
                image: moviesImage,
                description: "I'm an avid film enthusiast and track my watching history on Letterboxd. Also Christopher Nolan is my favorite director. If you haven't seen The Prestige you should",
              },
              {
                title: "Working Out",
                image: workoutImage,
                description: "I'm committed to fitness and hit the gym 4-6 days a week, focusing on strength training and overall health.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-orange-400 bg-white shadow-md hover:shadow-lg transition-all ${index === 6 ? 'md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
              >
                <div className="h-48 bg-orange-50 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 bg-white">
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
