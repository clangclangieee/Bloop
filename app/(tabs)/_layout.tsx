import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#C64B8C',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerShadowVisible: false,
    headerTintColor: '#C64B8C',
    tabBarStyle: {
      backgroundColor: '#fff',
    },
  }}
>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bookmarks' : 'bookmarks-outline'} color={color} size={24}/>
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
