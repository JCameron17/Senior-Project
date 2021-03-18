import React from 'react';
import { StyleSheet,Component, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props)
{
    return(
        <View style ={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfoSection}>
                         <View style= {{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image size={50} source={require('../assets/greentea.jpeg')} />
                            <View style= {{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Tony Grey</Title>
                                <Caption style={styles.caption}>@lmktonyg</Caption>
                            </View>
                         </View>
                    </View>
                    <Drawer.Section stlye ={styles.drawerSection}>
                        <DrawerItem
                            icon = {({color,size}) =>
                                <Icon
                                name = "home-outline"
                                color = {color}
                                size = {size}
                                />
                            }
                            label = "Home"
                            onPress={() =>{}}
                        />
                        <DrawerItem
                            icon = {({color,size}) =>
                                <Icon
                                name = "account-outline"
                                color = {color}
                                size = {size}
                                />
                            }
                            label = "Profile"
                            onPress={() =>{}}
                        />
                        <DrawerItem
                            icon = {({color,size}) =>
                                <Icon
                                name = "notifications-outline"
                                color = {color}
                                size = {size}
                                />
                            }
                            label = "Notifications"
                            onPress={() =>{}}
                        />
                        <DrawerItem
                            icon = {({color,size}) =>
                                <Icon
                                name = "cog-outline"
                                color = {color}
                                size = {size}
                                />
                            }
                            label = "Settings"
                            onPress={() =>{}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style= {styles.bottomDrawerSection}>
                <DrawerItem
                    icon = {({color,size}) =>
                        <Icon
                        name = "exit-to-app"
                        color = {color}
                        size = {size}
                        />
                    }
                    label = "SignOut"
                    onPress={() =>{}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create(
{
    drawerContent: 
    {
      flex: 1,
    },
    userInfoSection: 
    {
      paddingLeft: 20,
    },
    title: 
    {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: 
    {
      fontSize: 14,
      lineHeight: 14,
    },
    row: 
    {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: 
    {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: 
    {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: 
    {
      marginTop: 15,
    },
    bottomDrawerSection: 
    {
        marginBottom: 15,
        borderTopColor: 'white',
        borderTopWidth: 1
    },
    preference: 
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
