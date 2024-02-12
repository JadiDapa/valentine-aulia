import { createContext, ReactNode, useState } from "react";

type ViewContextProps = {
  view: "envelope" | "first" | "second" | "third" | null;
  setView: (newView: "envelope" | "first" | "second" | "third") => void;
};

export const ViewContext = createContext<ViewContextProps>({
  view: "envelope",
  setView: () => {},
});

export const ViewContextProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<"envelope" | "first" | "second" | "third">(
    "first"
  );

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
