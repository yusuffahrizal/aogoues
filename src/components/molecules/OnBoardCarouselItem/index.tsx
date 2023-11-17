import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, FONT} from '../../../themes';
import {Gap} from '../../atoms';
import {ImgHero1, ImgHero2, ImgHero3} from '../../../assets';

let ScreenWidth = Dimensions.get('window').width;

export type OnBoardCarouselItemProps = {
  title: string;
  body: string;
  index?: number;
};

const OnBoardCarouselItem: React.FC<OnBoardCarouselItemProps> = ({
  title,
  body,
  index = 0,
}): JSX.Element => {
  const heroImage = [ImgHero1, ImgHero2, ImgHero3];

  return (
    <View style={styles.wrapper}>
      <View>
        <Gap height={24} />
        <Text style={styles.title}>{title}</Text>
        <Gap height={12} />
        <Text style={styles.body}>{body}</Text>
      </View>
      <Image source={heroImage[index]} style={styles.heroImage} />
    </View>
  );
};

export default OnBoardCarouselItem;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: ScreenWidth,
    position: 'relative',
    flex: 1,
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
  heroImage: {
    position: 'absolute',
    bottom: 0,
    height: 412,
    width: 312,
  },
});
