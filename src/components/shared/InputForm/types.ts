import { IconSvgElement } from '@hugeicons/react-native';
import type { Control } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

export type FormInputType = {
  name: string;
  control: Control<any>;
  icon?: IconSvgElement;
  placeholder?: string;
  secureTextEntry?: boolean;
  label: string;
} & TextInputProps;