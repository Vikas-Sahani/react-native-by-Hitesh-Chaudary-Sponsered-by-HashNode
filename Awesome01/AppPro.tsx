import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

// in react-native, every opening tag should also have closing tag respectively

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        // <View style={styles.container}>
        //     <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello World</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;



// import React from "react";
// import { View, Text } from "react-native";

// function AppPro() {
//     return (<View>
//         <Text>Helo</Text>
//     </View>);
// }

// export default AppPro;