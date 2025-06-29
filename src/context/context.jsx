import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSent = async (prompt) => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3001/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "user", text: prompt },
        { role: "ai", text: data.response },
      ]);
    } catch (err) {
      console.error("Error calling Gemini API:", err);
    } finally {
      setLoading(false);
    }
  };

 
  const contextValue = {
    onSent,
    messages,
    loading,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
