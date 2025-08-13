import { useContext } from 'react';
import './EmojiDisplay.css';
import { EmojiContext } from '../context/EmojiContext';

export default function EmojiDisplay() {
  const { selectedEmoji } = useContext(EmojiContext);
  return (
    <div className='emoji-display'>
      <h1 className='title'>Siz Tanlagan Emoji</h1>
      <div className='emoji'>{selectedEmoji}</div>
    </div>
  );
}
