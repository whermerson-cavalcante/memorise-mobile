import React, { useState, useCallback, useRef, ElementType } from "react";
import { TextInputProps } from "react-native";

import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Container, Icon, Input as TextInput } from "./styles";
import { TextInput as TextInputNative } from "react-native";

interface Props extends TextInputProps {
  name: string;
  icon?: React.ComponentProps<typeof Feather>["name"];
}

export function Input({ name, icon, ...rest }: Props) {
  const inputRef = useRef<any>(null);

  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleIsFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          isFilled={isFilled}
          isFocused={isFocused}
        />
      )}
      <TextInput
        ref={inputRef}
        onFocus={handleIsFocused}
        onBlur={handleInputBlur}
        placeholderTextColor={theme.colors.placeholder_text}
        {...rest}
      />
    </Container>
  );
}
