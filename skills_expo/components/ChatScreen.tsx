import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

type ChatScreenRouteProp = RouteProp<{ ChatScreen: { user: any } }, "ChatScreen">;

const ChatScreen = () => {
  const route = useRoute<ChatScreenRouteProp>();
  const { user } = route.params;

  const [messages, setMessages] = useState([
    { id: "1", text: `Hey! This is ${user.name} ✌️`, sender: "them" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { id: Date.now().toString(), text: input, sender: "you" },
    ]);
    setInput("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={item.sender === "you" ? styles.you : styles.them}>
            {item.text}
          </Text>
        )}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      />

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  chatHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  you: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: "75%",
  },
  them: {
    alignSelf: "flex-start",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: "75%",
  },
});

export default ChatScreen;
