import React from 'react';
import { Gamepad2, Tv, Book, Globe2 } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      category: 'Video Games',
      icon: <Gamepad2 className="h-12 w-12 text-accent-red" />,
      items: [
        { name: 'RPG Games', description: 'Final Fantasy, Persona, Dragon Quest' },
        { name: 'Action Games', description: 'Devil May Cry, Nier: Automata' },
        { name: 'Strategy Games', description: 'Fire Emblem, Disgaea' }
      ]
    },
    {
      category: 'Anime',
      icon: <Tv className="h-12 w-12 text-accent-red" />,
      items: [
        { name: 'Shonen', description: 'One Piece, Jujutsu Kaisen, Demon Slayer' },
        { name: 'Seinen', description: 'Monster, Vinland Saga' },
        { name: 'Slice of Life', description: 'Your Lie in April, A Silent Voice' }
      ]
    },
    {
      category: 'Manga',
      icon: <Book className="h-12 w-12 text-accent-red" />,
      items: [
        { name: 'Action', description: 'Berserk, Vagabond, Kingdom' },
        { name: 'Mystery', description: '20th Century Boys, Death Note' },
        { name: 'Sports', description: 'Slam Dunk, Haikyuu!!' }
      ]
    },
    {
      category: 'Japanese Culture',
      icon: <Globe2 className="h-12 w-12 text-accent-red" />,
      items: [
        { name: 'Traditional Arts', description: 'Calligraphy, Tea Ceremony' },
        { name: 'Modern Culture', description: 'J-Pop, Street Fashion' },
        { name: 'Cuisine', description: 'Ramen, Sushi, Traditional Dishes' }
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
                    <h4 className="text-lg font-medium text-accent-red mb-2">
                      {item.name}
                    </h4>
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