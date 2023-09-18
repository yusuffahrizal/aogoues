import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLOR, GStyles} from '../../themes';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Gap, TextOnBoard} from '../../components';
import {IconLogoMain, ImgHero1} from '../../assets';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const Splash: React.FC = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = React.useState<number>(0);

  const onBoardText = [
    {
      id: 0,
      title: 'Start Your Traveling Journey Safely & Fun',
      body: 'Commence your exciting journey with us, where the assurance of safety intertwines with the thrill of adventure, and limitless fun awaits.',
    },
    {
      id: 1,
      title: "Travel Easily And Don't Be Afraid To Get Lost",
      body: 'Commence your exciting journey with us, where the assurance of safety intertwines with the thrill of adventure, and limitless fun awaits.',
    },
    {
      id: 2,
      title: 'Start Your Traveling Journey Safely & Fun',
      body: 'Commence your exciting journey with us, where the assurance of safety intertwines with the thrill of adventure, and limitless fun awaits.',
    },
  ];

  interface OnBoardTextInterface {
    id: number;
    title: string;
    body: string;
  }

  return (
    <SafeAreaView style={[GStyles.baseAreaView, styles.centerPage]}>
      <Gap height={44} />
      <View style={styles.centerPage}>
        <IconLogoMain />
        <View style={styles.mh170}>
          <Carousel
            layout="default"
            data={onBoardText}
            renderItem={(baseData: {
              index: number;
              dataIndex: number;
              item: OnBoardTextInterface;
            }) => (
              <TextOnBoard
                title={baseData.item.title}
                body={baseData.item.body}
              />
            )}
            onSnapToItem={(index: number) => setActiveSlide(index)}
            vertical={false}
            itemWidth={ITEM_WIDTH}
            sliderWidth={ITEM_WIDTH}
            useScrollView={true}
            enableSnap={true}
          />
        </View>
        <Pagination
          dotsLength={onBoardText.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
          vertical={false}
        />
      </View>
      <Image source={ImgHero1} style={styles.heroImage} />
      <View style={styles.bgBase} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  centerPage: {
    alignItems: 'center',
  },
  mh170: {
    maxHeight: 170,
  },
  dotStyle: {
    width: 16,
    height: 6,
    borderRadius: 100,
    backgroundColor: COLOR.PRIMARY,
  },
  inactiveDotStyle: {
    width: 6,
    height: 6,
    backgroundColor: COLOR.PRIMARY_40,
  },
  heroImage: {
    position: 'absolute',
    height: 412,
    width: 312,
    bottom: 0,
    zIndex: 1,
  },
  bgBase: {
    backgroundColor: COLOR.PRIMARY,
    width: 615,
    height: 446,
    borderRadius: 615,
    position: 'absolute',
    bottom: -250,
    zIndex: 0,
  },
});
