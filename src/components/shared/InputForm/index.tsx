import React, { useRef, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ViewOffSlashIcon, ViewIcon } from '@hugeicons/core-free-icons';

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
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <View>
            <View>
              <Text style={[styles.label, isFocused && styles.labelFocused]}>
                {String(label).toLocaleUpperCase()}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              {Icon && (
                <HugeiconsIcon
                  icon={Icon}
                  width={20}
                  height={20}
                  color={isFocused ? colors.orange[400] : colors.gray[400]}
                />
              )}
              <TextInput
                style={[
                  styles.input,
                  Icon && { paddingLeft: 6 },
                  error && styles.inputError,
                ]}
                placeholder={placeholder}
                secureTextEntry={showText}
                onBlur={onBlur}
                onChangeText={onChange}
                onFocus={handleFocus}
                onEndEditing={handleFocus}
                value={value}
                ref={ref}
                {...props}
              />
              {error && <Text style={styles.error}>{error.message}</Text>}
            </View>
          </View>
          {secureTextEntry && (
            <TouchableOpacity style={{ marginTop: 16 }} onPress={() => setShowText(text => !text)}>
              <HugeiconsIcon
                icon={showText ? ViewOffSlashIcon : ViewIcon}
                width={20}
                height={20}
                color={isFocused ? colors.orange[400] : colors.gray[400]}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    />
  );
}
