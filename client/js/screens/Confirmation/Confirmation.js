import React, {Component} from 'react';
import {Text, View, Image, Modal} from 'react-native';
import styles from './styles';
import checkmark from '../../assets/miscicons/Check.png';
import {TouchableHighlight} from 'react-native-gesture-handler';
class Confirmation extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: true,
  };

  hideModal = () => {
    this.setState({modalVisible: false});
  };
  render() {
    const {title} = this.props;
    return (
      <Modal
        transparent="true"
        visible={this.state.modalVisible}
        animationType="fade">
        <TouchableHighlight onPress={this.hideModal}>
          <View style={styles.page}>
            <View style={styles.container}>
              <Image source={checkmark} />
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.text}>
                You have successfully subscribed to this campaign!
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    );
  }
}

export default Confirmation;
