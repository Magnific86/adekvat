import { createContext, FC, useState, useContext, ReactNode } from "react";

interface ContextState {
  openDrawer: boolean;
  handleToggleDrawer: () => void;
  currTopic: string;
  setCurrTopic: (state: string) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const MyContext = createContext<ContextState>(null);

const AppProvider = MyContext.Provider;

export const MainProvider: FC<ChildrenProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currTopic, setCurrTopic] = useState("");

  const handleToggleDrawer = () => {
    setOpenDrawer(openDrawer ? false : true);
  };

  return (
    <AppProvider
      value={{
        openDrawer,
        handleToggleDrawer,
        currTopic,
        setCurrTopic,
      }}
    >
      {children}
    </AppProvider>
  );
};

export const useAppContext = () => {
  const data = useContext(MyContext);

  if (!data) {
    throw new Error("You cannot use MyContext outside AppProvider!");
  }
  return data;
};
