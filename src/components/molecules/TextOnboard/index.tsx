import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, FONT} from '../../../themes';
import {Gap} from '../../atoms';

interface TextOnBoardInterface {
  title: string;
  body: string;
}

let ScreenWidth = Dimensions.get('window').width;

const TextOnBoard: React.FC<TextOnBoardInterface> = ({
  title,
  body,
}): JSX.Element => {
  return (
    <View style={styles.wrapper}>
      <Gap height={24} />
      <Text style={styles.title}>{title}</Text>
      <Gap height={12} />
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default TextOnBoard;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: ScreenWidth,
  },
  title: {
    color: COLOR.TEXT.TITLE,
    fontSize: 24,
    fontFamily: FONT.OTHER.ROBOTO_SLAB_REGULAR,
    width: 280,
    fontWeight: '700',
    textAlign: 'center',
  },
  body: {
    color: COLOR.TEXT.BODY,
    fontSize: 12,
    fontFamily: FONT.REGULAR.BASE,
    width: 306,
    textAlign: 'center',
  },
});
