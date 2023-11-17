import React, {useEffect, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLOR, GStyles} from '../../themes';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Gap,
  OnBoardCarouselItem,
  OnBoardCarouselItemProps,
} from '../../components';
import {IconLogoMain} from '../../assets';
import {ONBOARD_TEXT, ROUTE} from '../../constants';
import {useAppDispatch} from '../../utils';
import {globalAction} from '../../redux/actions';

const SLIDER_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

const Onboard: React.FC = ({navigation}: any): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(ROUTE.REGISTER);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigation]);

  useEffect(() => {
    dispatch(globalAction.onBoardSuccess());
  }, [dispatch]);

  return (
    <SafeAreaView style={[GStyles.baseAreaView, styles.centerPage]}>
      <Gap height={44} />
      <View style={styles.bgBase} />
      <View style={styles.centerPage}>
        <IconLogoMain />
        <View style={styles.mh170}>
          <Carousel
            layout="default"
            data={ONBOARD_TEXT}
            renderItem={(baseData: {
              index: number;
              dataIndex: number;
              item: OnBoardCarouselItemProps;
            }) => (
              <OnBoardCarouselItem
                title={baseData.item.title}
                body={baseData.item.body}
                index={baseData.index}
              />
            )}
            onSnapToItem={(index: number) => setActiveSlide(index)}
            vertical={false}
            itemWidth={ITEM_WIDTH}
            sliderWidth={ITEM_WIDTH}
            useScrollView={true}
            enableSnap={true}
            activeSlideOffset={activeSlide}
          />
        </View>
      </View>
      <Pagination
        dotsLength={ONBOARD_TEXT.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        vertical={false}
        containerStyle={styles.containerPaginationStyle}
      />
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  centerPage: {
    alignItems: 'center',
  },
  mh170: {
    height: SCREEN_HEIGHT - 50,
    zIndex: 1,
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
  containerPaginationStyle: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.38,
  },
  bgBase: {
    backgroundColor: COLOR.PRIMARY,
    width: 615,
    height: 446,
    borderRadius: 615,
    position: 'absolute',
    bottom: -250,
  },
});
