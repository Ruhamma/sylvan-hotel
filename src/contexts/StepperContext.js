import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: "", setUserData: null, isFormValid: false, setFormValid: null});

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [isFormValid, setFormValid] = useState(false); // Initialize form validity to false
  return (
    <StepperContext.Provider
      value={{ userData, setUserData, isFormValid, setFormValid }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
 const { userData, setUserData, isFormValid, setFormValid } =
   useContext(StepperContext);

 return { userData, setUserData, isFormValid, setFormValid };
}
