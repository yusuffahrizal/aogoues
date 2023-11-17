import {View} from 'react-native';
import React from 'react';

type GapProps = {
  width?: number;
  height?: number;
};

const Gap: React.FC<GapProps> = ({width, height}): JSX.Element => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
