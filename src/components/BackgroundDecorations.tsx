import React from 'react';
import { Terminal, Gamepad2, Code2, Binary } from 'lucide-react';

const BackgroundDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Linux/Coding Elements */}
      <div className="absolute top-20 left-10 text-accent-red/30 animate-float-slow transform rotate-12">
        <Terminal className="w-16 h-16" />
      </div>
      <div className="absolute bottom-40 right-20 text-accent-red/30 animate-float">
        <Code2 className="w-20 h-20" />
      </div>
      
      {/* Python/Coding */}
      <div className="absolute top-1/3 right-10 text-accent-red/30 animate-float-delayed">
        <Binary className="w-16 h-16" />
      </div>

      {/* Gaming */}
      <div className="absolute bottom-20 left-20 text-accent-red/30 animate-bounce-slow">
        <Gamepad2 className="w-16 h-16" />
      </div>

      {/* ASCII Art */}
      <pre className="absolute bottom-40 left-1/3 text-accent-red/20 font-mono text-xs transform -rotate-12">
{`
   _____
  /     \\
 | () () |
  \\  ^  /
   |||||
`}
      </pre>

      {/* Matrix-like rain effect */}
      <div className="absolute top-0 left-1/4 text-accent-red/40 font-mono text-sm animate-matrix-rain">
        {'01100101 10101010'.split('').map((char, i) => (
          <div key={i} className="animate-fall" style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </div>
        ))}
      </div>

      {/* Pixel art sword */}
      <div className="absolute top-1/4 right-1/3 text-accent-red/20 font-mono transform rotate-45">
        <pre className="text-xs">
{`
  /\\
 |##|
 |##|
 |##|
 \\__/
`}
        </pre>
      </div>
    </div>
  );
};

export default BackgroundDecorations;