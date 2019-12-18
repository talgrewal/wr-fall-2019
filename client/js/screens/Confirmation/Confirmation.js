import React, {Component} from 'react';
import {Text, View, Image, Modal} from 'react-native';
import styles from './styles';
import checkmark from '../../assets/miscicons/Check.png';

import {TouchableHighlight} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
class Confirmation extends Component {
  state = {
    modalVisible: true,
    subscribedMessage: null,
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
        <TouchableHighlight
          onPress={(this.hideModal, this.props.navigation.goBack())}>
          <View style={styles.page}>
            {this.props.navigation.state.params.subscribeMessage === true ? (
              <View style={styles.container}>
                <Image source={checkmark} />
                <Text style={styles.title}>
                  {this.props.navigation.state.params.campaignTitle}
                </Text>
                <Text style={styles.text}>
                  You have successfully subscribed to this campaign!
                </Text>
              </View>
            ) : (
              <View style={styles.container}>
                <Image source={checkmark} />
                <Text style={styles.title}>
                  {this.props.navigation.state.params.campaignTitle}
                </Text>
                <Text style={styles.text}>
                  You have successfully Unsubscribed from this campaign!
                </Text>
              </View>
            )}
          </View>
        </TouchableHighlight>
      </Modal>
    );
  }
}

export default withNavigation(Confirmation);
