import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ConversationList } from '@zegocloud/zimkit-rn';

const HomePage = () => {
  const navigation = useNavigation<any>(); // Use the React Navigation for page routing.

  const openChat = (props: any) => {
    navigation.navigate('MessageListPage', {
      ...props,
      appBarActions: [{ icon: 'goBack', onPressed: () => navigation.goBack() }],
    });
  };
  const startChat = () => {
    openChat({
      conversationID: '1003',
      conversationName: '1004',
      conversationType: 0,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ConversationList onPressed={openChat} />

      <Button title="One to One CHat" onPress={() => startChat()} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
