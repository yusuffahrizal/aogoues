import React, {useEffect} from 'react';
import {GStyles} from '../../themes';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {IconLogoMain} from '../../assets';
import {Gap} from '../../components';
import {ROUTE} from '../../constants';

const Splash: React.FC = ({navigation}: any): JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(ROUTE.REGISTER);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={[GStyles.baseAreaView]}>
      <View style={styles.onboardContainer}>
        <IconLogoMain />
        <Gap height={40} />
        <ActivityIndicator style={styles.activityIndicatorPosition} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  onboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorPosition: {
    position: 'absolute',
    bottom: 40,
  },
});
