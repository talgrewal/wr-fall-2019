import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import PrivacyPolicyExpander from '../../components/PrivacyPolicyExpander';
import styles from './styles';

const expandableMenuContent = [
  {
    title: 'What information do we collect about you?',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  },
  {
    title: 'How do we use your information?',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
  },
  {
    title: 'To whom do we disclose your information?',
    description:
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem',
  },
  {
    title: 'What do we do to keep your information secure?',
    description: 'Eum fugiat quo voluptas nulla pariatur',
  },
  {
    title: 'Cookies, Beacons, and Geo Tracking',
    description: 'lorem ipsum',
  },
];

class Privacy extends Component {
  render() {
    let menuItems = [];
    for (let i = 0; i < expandableMenuContent.length; i++) {
      menuItems.push(
        <PrivacyPolicyExpander
          key={i}
          title={expandableMenuContent[i].title}
          description={expandableMenuContent[i].description}
          last={i === expandableMenuContent.length - 1 ? true : false}
        />,
      );
    }
    return (
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.text}>
            We want you to be able to contribute to keeping people up to date
            and in the know on various campaigns within our community. In order
            for this we will need some details from you. for you to contiue
            using this app with peace of mind please review our privacy policy.
          </Text>
          <View style={styles.expandableMenuContainer}>{menuItems}</View>
        </View>
      </ScrollView>
    );
  }
}

export default Privacy;
