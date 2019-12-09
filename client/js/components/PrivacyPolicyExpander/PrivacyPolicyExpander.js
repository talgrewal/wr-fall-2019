import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class PrivacyPolicyExpander extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isCollapsed: true,
  };
  onPress() {
    this.setState({isCollapsed: !this.state.isCollapsed});
  }
  render() {
    const {isCollapsed} = this.state;
    const {title, description} = this.props;
    let icon = isCollapsed ? '-' : '+';
    return (
      <>
        <TouchableOpacity onPress={() => this.onPress()}>
          <View style={styles.expandableButton}>
            <Text style={styles.expandableTitle}>{title}</Text>
            <Text style={styles.expandableTitleIcon}>{icon}</Text>
          </View>
        </TouchableOpacity>
        {!isCollapsed ? (
          <View style={styles.hiddenDescriptionBackgroundBorder}>
            <Text style={styles.hiddenDescription}>{description}</Text>
          </View>
        ) : (
          <View style={styles.whiteLine}></View>
        )}
      </>
    );
  }
}

PrivacyPolicyExpander.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
