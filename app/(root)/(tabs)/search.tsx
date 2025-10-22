import { StyleSheet, Text, View } from "react-native";

export default function Search() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search a place in Abuja</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    text: { fontSize: 18, fontWeight: "600" },
});
