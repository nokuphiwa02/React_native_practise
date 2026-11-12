import { View,Button, Text, Pressable , StyleSheet, TextInput, ScrollView } from "react-native";
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
    backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: 20,
  },
scrollView: { 
  gap:15,
  paddingVertical: 20,
},

  formTitle: {
   color: 'white',
   fontSize: 36,
   fontWeight: 'bold',
   marginVertical: 10,
  },
  inputContainer: {
    gap: 5,
  },
  label: {
    color: '#BDBDBD',
    marginTop: 20,
  },
  input: {
    borderColor: '#BDBDBD',
    padding: 5,
    paddingHorizontal: 10,
    color: '#BDBDBD',
    borderWidth: 0.8,
    marginTop: 20,
    borderRadius: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#BDBDBD',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});