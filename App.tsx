import { useColorScheme, View } from 'react-native';
import { OnBoardingScreen } from './src/screens/FirstScreen';
import { ProfileScreen } from './src/screens/UserProfile';
import { LanguageScreen } from './src/screens/ChangeLanguage';
import { HomeScreen } from './src/screens/Status';
import { AnimalsScreen } from './src/screens/ExcersiseAnimal';
import { WordPracticeScreen } from './src/screens/ExcersiseWordPractice';
import { ListeningScreen } from './src/screens/ExcersiseListening';
import { LoginScreen } from './src/screens/Auth';
import { RegistrationScreen } from './src/screens/Registration';
import { Routing, Route } from 'react-native-navigation';

export default function App() {
  const colorSheme = useColorScheme()
    return (
      <View>
        <Routing colorsheme={colorSheme}>
          <Route name='Onboarding'><OnBoardingScreen/></Route>
          <Route name='Login'><LoginScreen/></Route>
          <Route name='Registration'><RegistrationScreen/></Route>
          <Route name='Profile'><ProfileScreen/></Route>
          <Route name='Change Language'><LanguageScreen/></Route>
          <Route name='Animal'><AnimalsScreen/></Route>
          <Route name='Listening'><ListeningScreen/></Route>
          <Route name='Words'><WordPracticeScreen/></Route>
          <Route name='Home'><HomeScreen/></Route>
        </Routing>
      </View>
    );  
}

