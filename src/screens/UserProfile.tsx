import { Image, StyleSheet, Text, useColorScheme, View } from "react-native"
import { theme } from "../theme/constants";
import { HText } from "../components/Text/HText";
import { CommonText } from "../components/Text/CommonText";
import { CommonText } from "../components/Text/CommonText";
import { BaseButton } from "../components/Buttons/CommonBtn";
import api, {apiRoutes} from '../api';
import {navigate} from 'react-native-navigation';
import { useState } from "react";

export const UserProfileScreen = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const name = user.name

    useEffect(() => {
        api.get(apiRoutes.getUser)
        .then(
            (newuser) => setUser(newuser)
        )
        .error(
            (eror: string) => setError(eror)
        )
    }, [])

    const clickHandler = () => {
        console.log('hello')
    }

    const changeColorSheme = useColorScheme

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.logo}>👨‍💻</Text>
                <CommonText text={`Your profile, ${name}`}/>
            </View>

            <View style={styles.buttonContainer}>
                <BaseButton text="Switch to Dark" onClick={changeColorSheme}/>
                <BaseButton text="Change mother language" onClick={() => navigate('Change Language')}/>
                <BaseButton text="Change your image" onClick={clickHandler}/>
                <BaseButton text="Logout" onClick={clickHandler} disabled={true}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    header: {
        height: 230,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 24,
        backgroundColor: theme.colors.deepBlue
    },
    logo: {
        width: 134,
        height: 134,
        borderRadius: 67,
        backgroundColor: theme.colors.green,
        fontSize: 80,
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 15,
    },
    buttonContainer: {
        flex: 1,
        height: '100%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 16,
        paddingVertical: 24,
    }
  });