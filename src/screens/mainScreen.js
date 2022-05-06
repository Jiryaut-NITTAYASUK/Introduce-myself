import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import Colors from "../constant/color"

import { useNavigation } from '@react-navigation/native';

const mainScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.viewScreen}>
            <View style={styles.touchObject}>
                <TouchableOpacity onPress={() => (navigation.navigate("Member"))}>
                    <View style={{ ...styles.touchRow, ...styles.touchHeader }}>
                        <ImageBackground
                            style={styles.bhImage}
                            source={require("../image/myProfile.jpg")}
                        >
                            <View style={styles.titleTouchable}>
                                <Text style={styles.fontHeader} numberOfLines={1}>Mini App Created by</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.touchObject}>
                <TouchableOpacity disabled>
                    <View style={{ ...styles.touchRow, ...styles.touchHeader }}>
                        <ImageBackground
                            style={styles.bhImage}
                            blurRadius={99} source={require("../image/myProfile2.jpg")}
                        >
                            <View style={styles.titleTouchable}>
                                <Text style={styles.fontHeader} numberOfLines={1}>TBA</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.touchObject}>
                <TouchableOpacity disabled>
                    <View style={{ ...styles.touchRow, ...styles.touchHeader }}>
                        <ImageBackground
                            style={styles.bhImage}
                            blurRadius={99} source={require("../image/myProfile2.jpg")}
                        >
                            <View style={styles.titleTouchable}>
                                <Text style={styles.fontHeader} numberOfLines={1}>TBA</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewScreen: {
        flex: 1,
        backgroundColor: Colors.accentColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    touchObject: {
        height: 190,
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
        justifyContent: "flex-end",
        overflow: 'hidden',
        borderRadius: 10,
    },
    titleTouchable: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
});

export default mainScreen;