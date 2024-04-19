import { useColorScheme, View } from 'react-native';
import { FirstScreen } from './src/screens/FirstScreen';
import { UserProfileScreen } from './src/screens/UserProfile';
import { ChangeLanguageScreen } from './src/screens/ChangeLanguage';
import { StatusScreen } from './src/screens/Status';
import { AnimalsScreen } from './src/screens/ExcersiseAnimal';
import { WordPracticeScreen } from './src/screens/ExcersiseWordPractice';
import { ListeningScreen } from './src/screens/ExcersiseListening';
import { LoginScreen } from './src/screens/Auth';
import { AuthRegistrationScreen } from './src/screens/Registration';
import { Routing, Route } from 'react-native-navigation';

export default function App() {
  const colorSheme = useColorScheme()
    return (
      <View>
        <Routing colorsheme={colorSheme}>
          <Route name='First'><FirstScreen/></Route>
          <Route name='Auth'><LoginScreen/></Route>
          <Route name='Auth Registration'><AuthRegistrationScreen/></Route>
          <Route name='User Profile'><UserProfileScreen/></Route>
          <Route name='Change Language'><ChangeLanguageScreen/></Route>
          <Route name='Excersise Animal'><AnimalsScreen/></Route>
          <Route name='Excersise Listening'><ListeningScreen/></Route>
          <Route name='Excersise Words'><WordPracticeScreen/></Route>
          <Route name='Status'><StatusScreen/></Route>
        </Routing>
      </View>
    );  
}

