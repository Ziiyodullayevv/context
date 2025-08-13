import { useContext } from 'react';
import './EmojiPicer.css';
import { EmojiContext } from '../context/EmojiContext';

export default function EmojiPicer() {
  const { setSelectedEmoji } = useContext(EmojiContext);

  const emojis = ['😊', '😂', '😍', '🤔', '👍', '❤️', '🎉', '🔥'];

  return (
    <div className='emoji-picer aaa'>
      {emojis.map((emoji) => (
        <button onClick={() => setSelectedEmoji(emoji)} className='btn'>
          {emoji}
        </button>
      ))}
    </div>
  );
}
