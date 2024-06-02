import React from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
      </View>
      <Image source={require('./assets/profile-icon.png')} style={styles.profileImage} />
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <Image source={require('./assets/Filter.png')} style={styles.filterImage} />
    </View>
  );
};

const Categories = () => {
  return (
    <View style={styles.categories}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoryCards}>
        <View style={styles.categoryCard}>
          <Image source={require('./assets/exercise-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Exercise</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('./assets/studying-icon.png')} style={styles.categoryImage} />
          <Text style={styles.categoryTitle}>Study</Text>
          <Text style={styles.categoryTasks}>12 Tasks</Text>
        </View>
      </View>
    </View>
  );
};

const OngoingTasks = () => {
  return (
    <View style={styles.ongoingTasks}>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <View style={styles.taskCard}><Text>Mobile App Development</Text></View>
      <View style={styles.taskCard}><Text>Web Development</Text></View>
      <View style={styles.taskCard}><Text>Push Ups</Text></View>
    </View>
  );
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <OngoingTasks />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: 'gray',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginRight: 10,
  },
  filterImage: {
    width: 30,
    height: 30,
  },
  categories: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  categoryTasks: {
    fontSize: 14,
    color: 'gray',
  },
  ongoingTasks: {
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});
