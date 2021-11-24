import React from 'react';
import {View, StyleSheet} from 'react-native';

const Box = ({size, color, rounded}) => {
  return (
    <View
      style={[
        styles.box,
        rounded ? styles.rounded : null,
        sizes[[size]],
        {
          backgroundColor: color ?? 'black',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    height: 64,
    width: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  mideum: styles.medium,
  large: styles.large,
};

Box.defaultProps = {
  size: 'medium',
  rounded: 'true',
};

export default Box;
