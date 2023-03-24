import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import axios from "axios";

const AnalyticsItem = (props) => {
    const { name, image } = props;

    const [value, setValue] = useState("0");

    const bbc_name = name.split(" ")[0].toLowerCase();

    const getValue = async () => {
        try {
            const result = await axios.get(
                `https://io.adafruit.com/api/v2/nvmhai0205/feeds/bbc-${bbc_name}`
            );
            setValue(result.data.last_value);
        } catch (error) {}
    };

    useEffect(() => {
        const isMounted = true;
        const intervalid = setInterval(() => {
            getValue();
        }, 1000);
        return () => {
            clearInterval(intervalid);
            isMounted = false;
        };
    }, []);

    const renderIcon = () => {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginTop: 10,
                }}
            >
                <Image
                    source={image}
                    style={{
                        width: 35,
                        height: 35,
                        resizeMode: 'contain',
                        aspectRatio: 1,
                    }}
                />
                <Text
                    style={{
                        fontSize: 16,
                        height: 30,
                        fontWeight: "bold",
                        color: "#4C51C6",
                        marginLeft: 20,
                        marginTop: 10,
                    }}
                >
                    {value} {(bbc_name === "temperature") ? <Icon name="temperature-celsius" size={16} color="#4C51C6"/> : (bbc_name === "ph") ? "" : "%"}
                </Text>
            </View>
        );
    };

    return (
        <View style={style.container}>
            <Text style={style.name}>{name}</Text>
            <View>{renderIcon()}</View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: "#E9F4FF",
        width: "35%",
        height: 100,
        marginHorizontal: "7.5%",
        marginVertical: 20,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    name: {
        color: "#4C51C6",
        fontWeight: "700",
        fontSize: 14,
    },
});

export default AnalyticsItem;
