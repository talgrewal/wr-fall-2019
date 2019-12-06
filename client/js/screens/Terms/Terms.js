import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import styles from './styles';

const Terms = props => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Terms & Conditions</Text>
      <Text style={styles.description}>
        Limitation on liability in no event shall lex machina its officers,
        directors, employees, or agents, be liable to you for any indirect,
        incidental, special, punitive, exemplary, or consequential damages,
        including without limitation damages for loss of profits, goodwill, work
        stoppage, computer failure, loss of data or intangible losses, that
        result from the use of, or inability to use, the lex machina site. under
        no circumstances will lex machina be responsible for any damage, loss or
        injury resulting from hacking, tampering or other unauthorized access or
        use of the lex machina site, your account, or the information contained
        therein lex machina assumes no liability whatsoever resulting from any
      </Text>
      <Text style={styles.description}>
        (i) errors, mistakes, or inaccuracies of content,
      </Text>
      <Text style={styles.description}>
        (ii) personal injury or property damage, of any nature whatsoever,
        resulting from your access to and use of the lex machina site,
      </Text>
      <Text style={styles.description}>
        (iii) any unauthorized access to or use of our secure servers and/or any
        and all personal information and/or financial information stored
        therein,
      </Text>
      <Text style={styles.description}>
        (iv) any interruption or cessation of transmission to or from the lex
        machina site,
      </Text>
      <Text style={styles.description}>
        (v) any bugs, viruses, trojan horses, or the like, which may be
        transmitted to or through the lex machina site by any third party,
        and/or
      </Text>
      <Text style={styles.description}>
        (vi) any errors or omissions in any content or for any loss or damage of
        any kind incurred as a result of your use of any content, whether based
        on warranty, contract, tort, or any other legal theory, and whether or
        not the company is advised of the possibility of such damages. you
        specifically acknowledge that lex machina shall not be liable for
        content or the defamatory, offensive, or illegal conduct of any third
        party and that the risk of harm or damage from the foregoing rests
        entirely with you. the foregoing limitation of liability shall apply to
        the fullest extent permitted by law in the applicable jurisdiction.
      </Text>
    </ScrollView>
  );
};

export default Terms;
