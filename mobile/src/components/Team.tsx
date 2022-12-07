import { HStack, Icon } from 'native-base';
import CountryFlag from "react-native-country-flag";
import { Ionicons } from "@expo/vector-icons";

import { Input } from './Input';

interface Props {
  position: 'left' | 'right';
  code: string;
  value: string;
  editable: boolean;
  onChangeText: (value: string) => void;
}

export function Team({ position, code, onChangeText, ...rest }: Props) {
  return (
    <HStack alignItems="center">
      {position === 'left' && (
        code ? <CountryFlag isoCode={code} size={25} style={{ marginRight: 12 }} />
        : <Icon as={Ionicons} name="shield-outline" color="gray.300" size={10} style={{ marginRight: 12 }} />
      )}

      <Input
        w={12}
        h={9}
        maxLength={2}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        onChangeText={onChangeText}
        {...rest}
      />

      {position === 'right' && (
        code ? <CountryFlag isoCode={code} size={25} style={{ marginLeft: 12 }} />
        : <Icon as={Ionicons} name="shield" color="gray.300" size={10} style={{ marginLeft: 12 }} />
      )}
    </HStack>
  );
}