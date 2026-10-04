import { createContext, useState } from "react";

const UiContext = createContext();

export function Uiprovider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  return (
    <UiContext.Provider
      value={{ isMenuOpen, setActivePanel, activePanel, setIsMenuOpen }}
    >
      {children}
    </UiContext.Provider>
  );
}

export default UiContext;
