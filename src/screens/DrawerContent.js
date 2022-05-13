import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Users from '../model/users';
import parentMenu from '../model/parentMenu';
import childMenu from '../model/childMenu';
import Menu from '../model/menu';
import {AuthContext} from '../components/context';
let check = false;

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const [idParent, setIdParent] = React.useState(-1);
  const [idChild, setIdChild] = React.useState(-1);

  const {signOut, toggleTheme} = React.useContext(AuthContext);
  const themeSunMoon = () => {
    if (check == false) check = true;
    else check = false;
    toggleTheme();
  };

  const clickParent = id => {
    setIdParent(id);
    setIdChild(-1);
  };

  const clickChild = (id,bar) => {
    setIdChild(id);
    props.navigation.navigate(bar + "");
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>MENU</Text>
        </View>
        <View style={styles.drawerContent}>
          {/* <View style={styles.menuContent}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View> 

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View> */}

          <Drawer.Section style={styles.drawerSection}>
            {Menu.filter(fa => fa.Barnum == 0).map(f => (
              
              <View>
                {idParent == f.Padnum ? (
                  <DrawerItem
                    style={{backgroundColor: '#5FC6EB', borderLeftWidth: 4 }}
                    icon={({color, size}) => (
                      <Icon name="chevron-down" color={color} size={size} />
                    )}
                    label={f.Bar.toString()}
                    onPress={() => {
                      clickParent(f.Padnum);
                    }}
                  />
                ) : (
                  <DrawerItem
                    icon={({color, size}) => (
                      <Icon name="chevron-right" color={color} size={size} />
                    )}
                    label={f.Bar.toString()}
                    onPress={() => {
                      clickParent(f.Padnum);
                    }}
                  />
                )}

                {Menu.filter(fc => fc.Barnum != 0 && fc.Padnum == idParent && fc.Padnum == f.Padnum && fc.Bar != "-").map(c => (
                    <View style={styles.drawerChild}>
                      <Animatable.View animation="bounceIn">
                        {idChild == c.Barnum ? (
                          <DrawerItem
                            style={{
                              backgroundColor: '#5FC6EB',
                              borderLeftWidth: 2,
                            }}
                            icon={({color, size}) => (
                              <Icon
                                name="chevron-right"
                                color={color}
                                size={size}
                              />
                            )}
                            label={c.Bar.toString().substring(4,c.Bar.length)}
                            onPress={() => {
                              clickChild(c.Barnum,c.Bar);
                            }}
                          />
                        ) : (
                          <DrawerItem
                          icon={({color, size}) => (
                            <Icon
                              name="chevron-right"
                              color={color}
                              size={size}
                            />
                          )}
                          label={c.Bar.toString().substring(4,c.Bar.length)}
                          onPress={() => {
                            clickChild(c.Barnum,c.Bar);
                          }}
                        />
                        )}
                      </Animatable.View>
                    </View>
                ))}
              </View>
            ))}
            {/* {parentMenu.map(p => (
              <View>
                {idParent == p.id ? (
                  <DrawerItem
                    style={{backgroundColor: '#5FC6EB', borderLeftWidth: 4 }}
                    icon={({color, size}) => (
                      <Icon name="chevron-down" color={color} size={size} />
                    )}
                    label={p.name}
                    onPress={() => {
                      clickParent(p.id);
                    }}
                  />
                ) : (
                  <DrawerItem
                    icon={({color, size}) => (
                      <Icon name="chevron-right" color={color} size={size} />
                    )}
                    label={p.name}
                    onPress={() => {
                      clickParent(p.id);
                    }}
                  />
                )}
                {childMenu
                  .filter(f => f.parentId == idParent && f.parentId == p.id)
                  .map(c => (
                    <View style={styles.drawerChild}>
                      <Animatable.View animation="bounceIn">
                        {idChild == c.id ? (
                          <DrawerItem
                            style={{
                              backgroundColor: '#5FC6EB',
                              borderLeftWidth: 2,
                            }}
                            icon={({color, size}) => (
                              <Icon
                                name="chevron-right"
                                color={color}
                                size={size}
                              />
                            )}
                            label={c.name}
                            onPress={() => {
                              clickChild(c.id);
                            }}
                          />
                        ) : (
                          <DrawerItem
                          icon={({color, size}) => (
                            <Icon
                              name="chevron-right"
                              color={color}
                              size={size}
                            />
                          )}
                          label={c.name}
                          onPress={() => {
                            clickChild(c.id);
                          }}
                        />
                        )}
                      </Animatable.View>
                    </View>
                  ))}
              </View>
            ))} */}
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bluetooth" color={color} size={size} />
              )}
              label="Bluetooth"
              onPress={() => {
                props.navigation.navigate('BluetoothScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="web" color={color} size={size} />
              )}
              label="Web Vĩnh Hy"
              onPress={() => {
                props.navigation.navigate('WebScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <View style={styles.row}>
          <View style={styles.section}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="exit-to-app" color={color} size={size} />
              )}
              label="Sign Out"
              onPress={() => {
                signOut();
              }}
            />
          </View>
          <View style={styles.section}>
            {check ? (
              <Icon name="moon-waning-crescent" size={20} color="#FFFFFF" />
            ) : (
              <Icon name="white-balance-sunny" size={20} />
            )}

            <TouchableRipple
              onPress={() => {
                themeSunMoon();
              }}>
              <View pointerEvents="none">
                <Switch value={paperTheme.dark} />
              </View>
            </TouchableRipple>
          </View>
        </View>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    alignItems: 'center',
    backgroundColor: '#009387',
  },
  drawerContent: {
    flex: 1,
  },
  drawerChild: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
