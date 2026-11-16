import { View,
  Button,
  Text,
  Pressable ,
  StyleSheet,
  TextInput,
  ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.content}>
        <Text style={styles.formTitle}>Register</Text>
        <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput 
        placeholder="First Name" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput 
        placeholder="Last Name" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender</Text>
        <TextInput 
        placeholder="gender " 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput 
        placeholder="phone number " 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
        placeholder="email" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput 
        placeholder="password " 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>confirm Password</Text>
        <TextInput 
        placeholder="Confirm password" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>House Number</Text>
        <TextInput 
        placeholder="house number" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Street name</Text>
        <TextInput 
        placeholder="street name" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>City</Text>
        <TextInput 
        placeholder="city" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Province</Text>
        <TextInput 
        placeholder="province" 
        style={styles.input} 
        placeholderTextColor={'black'}
        onChangeText={(text) => console.log(text)}
        />
      </View>
        <Pressable style={styles.button} onPress={() => {console.log('button Pressed!')}}>
          <Text>Press Me</Text>
        </Pressable>
        <StatusBar style="light"/>
     </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064E3B',
    paddingHorizontal: 24,
  },

  scrollView: {
    flexGrow: 1,
    gap: 18,
    paddingVertical: 30,
  },

  formTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
  },

  inputContainer: {
    gap: 8,
    marginBottom: 10,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D1D5DB',
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 13,
    color: '#1F2937',
    fontSize: 16,
    borderRadius: 8,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#064E3B',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});