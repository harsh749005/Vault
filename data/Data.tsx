import { AnimationObject } from 'lottie-react-native';
import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import WelcomeSvg from '../assets/images/vault.svg';
import StoreSvg from '../assets/images/store.svg';
import Security from '../assets/images/security.svg';

export interface OnboardingData {
  id: number;
  animation?: AnimationObject; // for Lottie JSON
  SvgImage?: ComponentType<SvgProps>; // for SVG component
  text: string;
  textColor: string;
  backgroundColor: string;
  description:string
}
const data: OnboardingData[] = [
  {
    id: 1,
    SvgImage: WelcomeSvg,
    text: 'Welcome to Vault',
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce',
    description:"It stores,syncs and fills your passwords and personal data across the devices."
  },
  {
    id: 2,
    SvgImage: StoreSvg,
    text: 'Nerver forget again',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
    description:"You only need to remember one master password to access every website you use."
  },
  {
    id: 3,
    SvgImage: Security,
    text: 'Trusted and secure',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
    description:"Your vault is protected"
  },
];
export default data;

