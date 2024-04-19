import { StyleSheet, Text } from "react-native"
import { theme } from "../../theme/constants"
import { MyTextProps } from "../../types/types";

const styles = StyleSheet.create({
    CommonText: {
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        letterSpacing: 0.01,
        color: theme.colors.white,
        margin: 0,
    },
  });


export const CommonText = ({text}: MyTextProps) => {

    return (
        <Text
            style={styles.CommonText}
        >
            {text}
        </Text>
    )
}