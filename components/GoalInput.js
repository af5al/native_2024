import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({ onGoalSaveHandler, visible }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function goalSaveHandler() {
        onGoalSaveHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button
                    style={styles.buttonStyles}
                    title="add goal"
                    onPress={goalSaveHandler}
                />
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 0.5,
    },
    textInput: {
        borderWidth: 1,
        width: '70%',
        padding: 8,
        marginRight: 8,
        borderColor: '#cccccc',
    },
    buttonStyles: {},
});
