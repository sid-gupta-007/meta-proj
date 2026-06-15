import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setIsLoading(true);
    try {
      await wait(2000);
      // Simulate random success/failure
      if (Math.random() < 0.5) {
        setResponse({ type: "success", message: `Thanks, ${data.firstName}!` });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (e) {
      setResponse({ type: "error", message: e.message });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
