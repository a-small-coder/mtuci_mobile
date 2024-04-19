import { Image, StyleSheet, View } from "react-native"
import { theme } from "../theme/constants";
import { HText } from "../components/Text/HText";

export const LoadingScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/mainIcon.png')}/>
            <HText text={'Language App'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        backgroundColor: theme.colors.deepBlue
    },
  });