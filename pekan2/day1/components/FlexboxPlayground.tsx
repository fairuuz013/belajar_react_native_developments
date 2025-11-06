import React, { useState } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { flexboxPlaygroundStyles as styles } from "../styles/flexboxPlayground";

type FlexDirection = 'row' | 'column' | 'row-reverse';
type JustifyContent = 'flex-start' | 'center' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'stretch';

const FlexbosPlayground = () => {
    const [flexDirection, setFlexDirection] = useState<FlexDirection>('row')
    const [justifyContent, setJustifyContent] = useState<JustifyContent>('flex-start')
    const [alignItems, setAlignItems] = useState<AlignItems>("stretch")

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Flexbox playground</Text>
            {/* Control button */}
            <ScrollView style={styles.controlsContainer}>
                {/* Flex Direction Controls */}
                <View style={styles.controlGroup}>
                    <Text style={styles.controlTitle}>Flex Direction</Text>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                flexDirection === 'row' && styles.activeButton
                            ]}
                            onPress={() => setFlexDirection('row')}
                        >
                            <Text style={styles.buttonText}>Row</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                flexDirection === 'column' && styles.activeButton
                            ]}
                            onPress={() => setFlexDirection('column')}
                        >
                            <Text style={styles.buttonText}>Column</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                            style={[
                                styles.button,
                                flexDirection === 'row-reverse' && styles.activeButton
                            ]}
                            onPress={() => setFlexDirection('row-reverse')}
                        >
                            <Text style={[
                                styles.buttonText,
                                flexDirection === 'row-reverse' && styles.activeButtonText
                            ]}>
                                Row Reverse
                            </Text>

                        </TouchableOpacity>
                    </View>
                </View>

                {/* Justify Content Controls */}
                <View style={styles.controlGroup}>
                    <Text style={styles.controlTitle}>Justify Content</Text>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                justifyContent === 'flex-start' && styles.activeButton
                            ]}
                            onPress={() => setJustifyContent('flex-start')}
                        >
                            <Text style={[
                                styles.buttonText,
                                justifyContent === 'flex-start' && styles.activeButtonText
                            ]}>
                                Flex Start
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                justifyContent === 'center' && styles.activeButton
                            ]}
                            onPress={() => setJustifyContent('center')}
                        >
                            <Text style={[
                                styles.buttonText,
                                justifyContent === 'center' && styles.activeButtonText
                            ]}>
                                Center
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                justifyContent === 'space-between' && styles.activeButton
                            ]}
                            onPress={() => setJustifyContent('space-between')}
                        >
                            <Text style={[
                                styles.buttonText,
                                justifyContent === 'space-between' && styles.activeButtonText
                            ]}>
                                Space Between
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Align Items Controls */}
                <View style={styles.controlGroup}>
                    <Text style={styles.controlTitle}>Align Items</Text>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                alignItems === 'flex-start' && styles.activeButton
                            ]}
                            onPress={() => setAlignItems('flex-start')}
                        >
                            <Text style={[
                                styles.buttonText,
                                alignItems === 'flex-start' && styles.activeButtonText
                            ]}>
                                Flex Start
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                alignItems === 'center' && styles.activeButton
                            ]}
                            onPress={() => setAlignItems('center')}
                        >
                            <Text style={[
                                styles.buttonText,
                                alignItems === 'center' && styles.activeButtonText
                            ]}>
                                Center
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.button,
                                alignItems === 'stretch' && styles.activeButton
                            ]}
                            onPress={() => setAlignItems('stretch')}
                        >
                            <Text style={[
                                styles.buttonText,
                                alignItems === 'stretch' && styles.activeButtonText
                            ]}>
                                Stretch
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Flexbox Container */}
            <View style={styles.flexboxArea}>
                <View
                    style={[
                        styles.flexContainer,
                        {
                            flexDirection,
                            justifyContent,
                            alignItems,
                        },
                    ]}
                >
                    <View style={[styles.box, styles.redBox]} />
                    <View style={[styles.box, styles.blueBox]} />
                    <View style={[styles.box, styles.greenBox]} />
                </View>
            </View>
        </SafeAreaView >
    )
}

export default FlexbosPlayground
