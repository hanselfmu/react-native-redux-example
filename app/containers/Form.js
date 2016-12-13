import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { initForm, submitForm } from '../actions';

import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    Modal
} from 'react-native';

import Header from '../components/common/Header';
import MultiSwitch from '../components/common/MultiSwitch';

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15
    },
    label: {
        marginTop: 10,
        marginBottom: 10,
        color: '#555',
        fontSize: 16
    },
    questionArea: {
        borderWidth: 1,
        borderColor: "#BBB",
        height: 200,
        padding: 10,
        marginBottom: 20
    },
    submitSection: {
        margin: 30,
        borderWidth: 1,
        borderRadius: 5
    },

    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    modalContent: {
        fontSize: 16,
        alignSelf: 'center'
    },

    ackButton: {
        margin: 20
    }
});

const options = [
    {
        text: '5元',
        value: 5
    },
    {
        text: '10元',
        value: 10
    },
    {
        text: '50元',
        value: 50
    }
]

const mapStateToProps = (state) => ({
    form: state.form || {}
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    initForm: (formName) => dispatch(initForm( { formName } )),
    submitForm: (formName, formData) => dispatch(submitForm(formName, formData))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Form extends Component {
    constructor(props) {
        super(props);

        props.initForm('question');     // 请教问题
    }

    render() {
        const props = this.props;
        const formStatus = props.form.advice;

        return (
            <View style={styles.container}>
                <Header title="请教问题"/>
                <Text style={styles.label}>请详细描述您的问题</Text>
                <TextInput
                    style={styles.questionArea}
                    placeholder={'Type here'}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    onChangeText={(text) => {this.setState({text})}}
                    onSubmitEditing={() => {this.setState({text: ''})}}
                    value={(this.state && this.state.text) || ''}
                />

                <Text style={styles.label}>回答酬劳</Text>
                <MultiSwitch
                    options={options}
                    style={{
                        margin: 20
                    }}
                />

                <View style={styles.submitSection} borderColor={formStatus === 'pending' ? '#006064' : '#00BCD4'}>
                    <Button title="发布" color={formStatus === 'pending' ? '#006064' : '#00BCD4'} onPress={() => {
                        props.submitForm('advice', {});
                    }} />
                </View>

                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={formStatus === 'success'}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalContent}>问题已发布，请耐心等待回答</Text>
                        <View style={styles.ackButton}>
                            <Button title="知道了" color="#00BCD4" onPress={() => {
                                props.initForm('advice');
                            }} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

