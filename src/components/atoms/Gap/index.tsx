import {View} from 'react-native';
import React from 'react';

interface GapInterface {
  width?: number;
  height?: number;
}

const Gap: React.FC<GapInterface> = ({width, height}): JSX.Element => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
