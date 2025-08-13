import EmojiDisplay from './components/EmojiDisplay';
import EmojiPicer from './components/EmojiPicer';
import './App.css';
import { EmojiContextProvider } from './context/EmojiContext';

export default function App() {
  return (
    <EmojiContextProvider>
      <div className='wrapper'>
        <EmojiDisplay />
        <EmojiPicer />
      </div>
    </EmojiContextProvider>
  );
}
