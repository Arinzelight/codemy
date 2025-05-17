import { Redirect } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";

export default function Index() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await SecureStore.getItemAsync("accessToken");
        setLoggedInUser(!!token);
      } catch (error) {
        console.error("Error accessing SecureStore:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) return null;

  return <Redirect href={loggedInUser ? "/" : "/onboarding"} />;
}
