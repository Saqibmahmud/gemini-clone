import { createContext, ReactNode, useState } from "react";
import run from "../Config/Gemini";




// Create the context with an appropriate type
interface ContextValue {
    Prevprompt: string[];
    setPrevPrompt: React.Dispatch<React.SetStateAction<string[]>>;
    onSend: (prompt: string) => Promise<void>;
    loading: boolean;
    setloading: React.Dispatch<React.SetStateAction<boolean>>;
    showResult: boolean;
    setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
    recentPrompt: string;
    setrecentPrompt: React.Dispatch<React.SetStateAction<string>>;
    input: string;
    setinput: React.Dispatch<React.SetStateAction<string>>;
    resultData: string;
    setResultData: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextValue | null>(null);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
    const[input,setinput]=useState("") ;
    const [recentPrompt,setrecentPrompt]=useState("");
    const [Prevprompt, setPrevPrompt] = useState<string[]>([]);

    const[showResult,setShowResult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultData,setResultData]=useState("");
    
    const onSend = async(prompt:string)=>{
        setResultData("");
        setloading(true);
        setShowResult(true);
        setrecentPrompt(input);
      const response= await  run(input);
      setResultData(response);
      setloading(false);
      setinput("");


    }


  const contextValue: ContextValue = {
    Prevprompt,
    setPrevPrompt,
    onSend,
    resultData,
    setResultData,
    loading,
    setloading,
    showResult,
    setShowResult,
    recentPrompt,
    setrecentPrompt,
    input,
    setinput

  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
