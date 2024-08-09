import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const goalSaveHandler = enteredGoalText => {
        setGoals(prevGoals => [
            ...prevGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);

        closeModal();
    };

    const deleteGoal = id => {
        setGoals(prevGoals => {
            return prevGoals.filter(goal => goal.id !== id);
        });
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add new goal"
                    color={'#5e0acc'}
                    onPress={openModal}
                />

                <GoalInput
                    visible={modalVisible}
                    onGoalSaveHandler={goalSaveHandler}
                    onCancel={closeModal}
                />

                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={itemData => {
                            return (
                                <GoalItem
                                    goal={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoal}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: '#1e085a',
    },
    textInput: {
        borderWidth: 1,
        width: '70%',
        padding: 8,
        marginRight: 8,
        borderColor: '#cccccc',
    },
    goalsContainer: {
        flex: 8,
        paddingTop: 10,
    },
});
