import {
    Button,
    Modal,
    StyleSheet,
    TextInput,
    View,
    Image,
} from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({ onGoalSaveHandler, visible, onCancel }) => {
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
                <Image
                    style={styles.image}
                    source={require('../assets/goal.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="add goal"
                            onPress={goalSaveHandler}
                            color={'#5e0acc'}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={onCancel}
                            color={'#f31282'}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 8,
        marginRight: 8,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
        marginTop: 8,
    },
});
