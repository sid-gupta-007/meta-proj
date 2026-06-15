import React, { createContext, useContext, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
} from "@chakra-ui/react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({ isOpen: false, type: "", message: "" });

  const onOpen = (type, message) => setAlertState({ isOpen: true, type, message });
  const onClose = () => setAlertState((s) => ({ ...s, isOpen: false }));

  return (
    <AlertContext.Provider value={{ onOpen }}>
      {children}
      {alertState.isOpen && (
        <Box position="fixed" top={4} right={4} zIndex={9999} maxW="sm">
          <Alert status={alertState.type} borderRadius="md">
            <AlertIcon />
            <Box flex="1">
              <AlertTitle>{alertState.type === "success" ? "Success!" : "Error"}</AlertTitle>
              <AlertDescription>{alertState.message}</AlertDescription>
            </Box>
            <CloseButton onClick={onClose} />
          </Alert>
        </Box>
      )}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
