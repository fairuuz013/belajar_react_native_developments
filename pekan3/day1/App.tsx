import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ErrorBoundary from "../components/ErrorBoundary";


export default function RootNavigator() {
  const [key, setKey] = useState(1);

  return (
    <ErrorBoundary onReset={() => setKey(prev => prev + 1)}>
      <NavigationContainer key={key}>
        <RootNavigator />
      </NavigationContainer>
    </ErrorBoundary>
  );
}
