import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function index() {
  const [loggedInUser, setLoggedInUser] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {}, []);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
