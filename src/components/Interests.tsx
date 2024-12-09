import React from 'react';
import { Gamepad2, Tv, Book, Globe2 } from 'lucide-react';

const Interests = () => {
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
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Personal Interests
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-dark-700 rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
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