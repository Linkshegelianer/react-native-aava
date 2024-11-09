import { TextInput, useColorScheme, StyleSheet, TextInputProps, ViewStyle } from "react-native";

export default function ThemedTextInput({ style, ...props }: { style?: ViewStyle } & TextInputProps) {    const theme = useColorScheme();

    return (
        <TextInput
            style={[
                styles.input,
                theme === 'dark' ? styles.darkInput : styles.lightInput,
                style,
            ]}
            placeholderTextColor={theme === 'dark' ? '#888' : '#555'}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    lightInput: {
        backgroundColor: '#f0f0f0',
        color: '#000',
    },
    darkInput: {
        backgroundColor: '#333',
        color: '#fff',
    },
});