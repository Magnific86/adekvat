import {
  createContext,
  FC,
  useState,
  useContext,
  ReactNode,
} from "react";

interface ContextState {
  openDrawer: boolean;
  handleToggleDrawer: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const MyContext = createContext<ContextState>(null);

const AppProvider = MyContext.Provider;

export const MainProvider: FC<ChildrenProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setOpenDrawer(openDrawer ? false : true);
  };

  return (
    <AppProvider
      value={{
        openDrawer,
        handleToggleDrawer,
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
