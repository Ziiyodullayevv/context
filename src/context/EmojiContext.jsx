import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const EmojiContext = createContext();

export function EmojiContextProvider({ children }) {
  const [selectedEmoji, setSelectedEmoji] = useState('😂');

  const value = {
    selectedEmoji,
    setSelectedEmoji,
  };

  return (
    <EmojiContext.Provider value={value}>
      {children}
    </EmojiContext.Provider>
  );
}
