import React from 'react';
import { Gamepad2, Tv, Book, Globe2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Interests = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });

  const interests = [
    {
      category: 'Video Games',
      icon: <Gamepad2 className="h-12 w-12 text-accent-red" />,
      items: [
        { description: 'Red dead redemption, Dark Souls, Elden Ring' },
        { description: 'Clash of Clans, Age of Empires' }
      ]
    },
    {
      category: 'Anime',
      icon: <Tv className="h-12 w-12 text-accent-red" />,
      items: [
        { description: 'One Piece, HxH, Jujutsu Kaisen, Gintama' },
        { description: 'Monster, Vinland Saga, Attack on Titan'  },
      ]
    },
    {
      category: 'Manga',
      icon: <Book className="h-12 w-12 text-accent-red" />,
      items: [
        { name: 'Action', description: 'Berserk, Vagabond, Kingdom' },
      ]
    },
    {
      category: 'Japanese Culture',
      icon: <Globe2 className="h-12 w-12 text-accent-red" />,
      items: [
        { description: 'J-Pop, Kendo, Katana' },
        {  description: 'Ramen, Sushi, Traditional Dishes' }
      ]
    }
  ];

  return (
    <section id="interests" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-white mb-12 transform transition-all duration-1000 ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Personal Interests
        </h2>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8"
        >
          {interests.map((interest, index) => (
            <div
              key={index}
              className={`bg-dark-700 rounded-lg p-6 transform hover:scale-105 transition-all duration-500 ${
                gridVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                {interest.icon}
                <h3 className="text-2xl font-semibold text-white">
                  {interest.category}
                </h3>
              </div>

              <div className="space-y-4">
                {interest.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-dark-800 p-4 rounded-lg hover:bg-dark-600 transition-colors duration-300"
                  >
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;