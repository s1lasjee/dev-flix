import React from 'react';

import { Button as ButtonPaper } from 'react-native-paper';
import styles from './styles';

interface IProps {
  onPress?: (() => void) | undefined;
  icon?: string;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
}

const Button: React.FC<IProps> = ({ children, onPress, icon, mode }) => {
  return (
    <ButtonPaper
      accessibilityStates
      style={styles.container}
      color='#ffff'
      contentStyle={mode === 'outlined' ? styles.outline : styles.button}
      onPress={onPress}
      mode={mode}
      icon={icon}
      compact
    >
      {children}
    </ButtonPaper>
  );
};

export default Button;
