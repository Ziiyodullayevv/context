import EmojiDisplay from './components/EmojiDisplay';
import EmojiPicer from './components/EmojiPicer';
import './App.css';

export default function App() {
  return (
    <div className='wrapper'>
      <EmojiDisplay />
      <EmojiPicer />
    </div>
  );
}
