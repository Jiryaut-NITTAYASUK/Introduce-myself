import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, ImageBackground } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const ListIndex = ({ uid, name, lastname, image, onSelectID }) => {
    let TouchableFixed = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableFixed = TouchableNativeFeedback
    }

    return (
        <View style={styles.touchObject}>
            <TouchableFixed onPress={onSelectID}>
                <View style={{ ...styles.touchRow, ...styles.touchHeader }}>
                    <ImageBackground
                        style={styles.bhImage}
                        blurRadius={2} source={{ uri: image }}
                    >
                        <View style={styles.titleTouchable}>
                            <Text style={styles.fontHeader} numberOfLines={1}>{uid} {name} {lastname}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableFixed>
        </View>
    );
};

const styles = StyleSheet.create({
    touchObject: {
        height: 300,
        width: "100%",
        marginBottom: 10,
    },
    touchRow: {
        flexDirection: "row",
    },
    fontHeader: {
        color: "white",
        fontSize: 20,
    },
    touchHeader: {
        height: "100%",
    },
    bhImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "baseline",
        overflow: 'hidden',
        borderRadius: 10,
    },
    titleTouchable: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
});

export default ListIndex;