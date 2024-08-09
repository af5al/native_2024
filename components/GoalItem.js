import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const GoalItem = ({ goal, id, onDeleteItem }) => {
    return (
        <View style={styles.listItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={onDeleteItem.bind(this, id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.listItemText}>{goal}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#cdc8c7',
        marginBottom: 10,
        borderRadius: 6,
    },
    listItemText: { padding: 8 },
    pressedItem: { opacity: 0.5 },
});
