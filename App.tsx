import { useColorScheme, View } from 'react-native';
import { OnBoardingScreen } from './src/screens/Onboarding';
import { ProfileScreen } from './src/screens/Profile';
import { LanguageScreen } from './src/screens/Language';
import { HomeScreen } from './src/screens/Home';
import { AnimalsScreen } from './src/screens/Animals';
import { WordPracticeScreen } from './src/screens/WordPractice';
import { ListeningScreen } from './src/screens/Listening';
import { LoginScreen } from './src/screens/Login';
import { RegistrationScreen } from './src/screens/Register';
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

