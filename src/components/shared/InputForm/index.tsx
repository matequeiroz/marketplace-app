import React, { useRef, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import { HugeiconsIcon } from '@hugeicons/react-native';
import {
  ViewOffSlashIcon,
  ViewIcon,
  AlertCircleIcon,
} from '@hugeicons/core-free-icons';

import { styles } from './styles';
import { FormInputType } from './types';
import { colors } from '@/theme';

export function FormInput({
  name,
  control,
  icon: Icon,
  placeholder,
  secureTextEntry,
  label,
  ...props
}: FormInputType) {
  const [isFocused, setIsFocused] = useState(false);
  const [showText, setShowText] = useState(secureTextEntry);
  const ref = useRef<TextInput>(null);

  const handleFocus = () => {
    if (ref.current) {
      setIsFocused(ref.current.isFocused());
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error, invalid, isDirty },
      }) => {
        // Função para definir a cor do ícone
        const getColorFeedback = () => {
          if (isFocused && !error && isDirty && !invalid && value)
            return colors.semantic.success;
          if (!isFocused && !error && isDirty && !invalid && value)
            return colors.semantic.success;

          if (isFocused && error) return colors.semantic.danger;
          if (!isFocused && error) return colors.semantic.danger;

          if (isFocused && !value) return colors.orange[400];

          if (!isFocused && !isDirty && !value) return colors.gray[400];

          return colors.gray[400];
        };

        const isSuccess = !error && isDirty && !invalid && value;
        const isError = error;

        return (
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <View>
                <View>
                  <Text
                    style={[
                      styles.label,
                      isFocused && !error && styles.labelFocused,
                      isFocused && !error && isSuccess && styles.labelSuccess,
                      error && styles.labelError,
                    ]}
                  >
                    {String(label).toLocaleUpperCase()}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  {Icon && (
                    <HugeiconsIcon
                      icon={Icon}
                      width={20}
                      height={20}
                      color={getColorFeedback()}
                    />
                  )}
                  <TextInput
                    style={[
                      styles.input,
                      Icon && { paddingLeft: 6 },
                      isError && styles.inputError,
                      isSuccess && styles.inputSuccess
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.gray[300]}
                    secureTextEntry={showText}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onFocus={handleFocus}
                    onEndEditing={handleFocus}
                    value={value}
                    ref={ref}
                    {...props}
                  />
                </View>
              </View>
              {secureTextEntry && (
                <TouchableOpacity
                  style={{ marginTop: 16 }}
                  onPress={() => setShowText(text => !text)}
                >
                  <HugeiconsIcon
                    icon={showText ? ViewOffSlashIcon : ViewIcon}
                    width={20}
                    height={20}
                    color={getColorFeedback()}
                  />
                </TouchableOpacity>
              )}
            </View>
            {error && (
              <View style={styles.errorContainer}>
                <HugeiconsIcon
                  icon={AlertCircleIcon}
                  width={16}
                  height={16}
                  color={colors.semantic.danger}
                />
                <Text style={styles.errorText}>{error.message}</Text>
              </View>
            )}
          </View>
        );
      }}
    />
  );
}
