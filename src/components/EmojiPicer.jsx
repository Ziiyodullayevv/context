import './EmojiPicer.css';

export default function EmojiPicer() {
  const emojis = ['😊', '😂', '😍', '🤔', '👍', '❤️', '🎉', '🔥'];

  return (
    <div className='emoji-picer aaa'>
      {emojis.map((emoji) => (
        <button className='btn'>{emoji}</button>
      ))}
    </div>
  );
}
