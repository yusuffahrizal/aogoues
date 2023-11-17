import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {IconLogoWhite, ImgRegisterBg} from '../../assets';
import {Gap} from '../../components';
import {COLOR, FONT, GStyles} from '../../themes';

const Register: React.FC = (): JSX.Element => {
  return (
    <ImageBackground
      source={ImgRegisterBg}
      resizeMode="stretch"
      style={styles.bg}>
      <SafeAreaView style={styles.bg}>
        <View style={GStyles.ph30}>
          <Gap height={153} />
          <IconLogoWhite />
          <Gap height={20} />
          <Text style={styles.title}>
            Let’s Join With Us to Around the World
          </Text>
          <Gap height={12} />
          <Text style={styles.subtitle}>
            Eu amet, egestas arcu elementum. Blandit non mauris risus interdum
            urna nulla. Etiam velit convallis posuere suspendisse.
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  title: {
    fontFamily: FONT.OTHER.ROBOTO_SLAB_REGULAR,
    fontWeight: '700',
    fontSize: 24,
    color: COLOR.BACKGROUND,
    width: 282,
  },
  subtitle: {
    fontFamily: FONT.REGULAR.BASE,
    fontSize: 12,
    color: COLOR.WHITE,
    width: 290,
  },
});
