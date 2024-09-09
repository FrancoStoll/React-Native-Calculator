import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGrey,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
    onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}>
      <Text
        style={[
          styles.buttonText,
          {
            textAlign: label === '0' ? 'left' : 'center',
            marginLeft: label === '0' ? 25 : 0,
            color: blackText ? 'black' : 'white',
          },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};
