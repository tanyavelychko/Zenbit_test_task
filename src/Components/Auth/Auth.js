import React, { useState } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text, View } from 'native-base';
import { Modal, StyleSheet } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {storeData} from '../../asyncStorage';

const Auth = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const [localUsername, setUsername] = useState('');
  const [localPassword, setPassword] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = async () => {
    const userExists = users.some((user) => {
      return (user.username === localUsername) && (user.password === localPassword)
    });

    if (userExists) {
      await storeData('@authenticated', JSON.stringify({name: localUsername, password: localPassword}));
      dispatch({type: 'SET_USER', payload: {name: localUsername, password: localPassword}});
    } else {
      setModalVisible(true);
    }
  }

  return (
    <Container>
      <Content>
        <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input value={localUsername} onChangeText={(value) => setUsername(value)} />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input value={localPassword} onChangeText={(value) => setPassword(value)} />
        </Item>
        </Form>
        <View>
          <Button dark style={styles.button} onPress={handleLogin}><Text> Login </Text></Button>
        </View>
        
      </Content>
      <Modal
          visible={modalVisible}
          transparent={true}
        >
          <View style={styles.modalCentered}>
            <View style={styles.modal}>
              <Text>Wrong name or password</Text>
                <Button style={styles.buttonModal}
                  dark
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}> OK </Text>
                </Button>
            </View>
          </View>
        </Modal>      
    </Container>
  )
}

export default Auth;

const styles = StyleSheet.create({
  form: {
      marginVertical: 10,
      paddingHorizontal: 3
  },
  button: {
    width: '95%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  modalCentered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    alignSelf: 'center'
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  buttonText: {
    textAlign: 'center',
    alignSelf: 'center'
  },
  buttonModal: {
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
    paddingRight: 56
  }
});