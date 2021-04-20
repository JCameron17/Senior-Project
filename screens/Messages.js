import React from 'react';
import {StyleSheet, Component, Text, TouchableWithoutFeedback, View, Image, SafeAreaView, Button, ScrollView, FlatList} from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/MessageStyles';


const Separator = () => (
  <View style={styles.separator} />
);

const MessageID = [
  {
    id: '1',
    userName: 'Christy Alex (Financial Expert)',
    userImg: require('../assets/profile.png'),
    messageTime: '4 mins ago',
    messageText:
      'Yes, let\'s discuss',
  },
  {
    id: '2',
    userName: 'Jasmine Cameron',
    userImg: require('../assets/profile.png'),
    messageTime: '2 hours ago',
    messageText:
      'Okay spunds great!',
  },
  {
    id: '3',
    userName: 'Daijon Bereola-Carson',
    userImg: require('../assets/profile.png'),
    messageTime: '1 hours ago',
    messageText:
      'I want to learn how to save my money, all I know is how to spend it',
  },
  {
    id: '4',
    userName: 'Jenaba Sow',
    userImg: require('../assets/profile.png'),
    messageTime: '1 day ago',
    messageText:
      'Absolutely, I\'m ready to make some money!',
  },
  {
    id: '5',
    userName: 'Anthony Gordon',
    userImg: require('../assets/profile.png'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, let\'s discuss some investing tips!',
  },
];


const Messages = ({navigation}) => {
    return (
      <Container style={styles.container}>
        <FlatList 
          data={MessageID}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <UserInfo>
                <UserImgWrapper>
                  <UserImg source={item.userImg} />
                </UserImgWrapper>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>
    );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});