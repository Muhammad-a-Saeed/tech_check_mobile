import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const wp = (p: number) => width * (p / 100);
export const hp = (p: number) => height * (p / 100);
