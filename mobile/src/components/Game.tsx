import { useEffect, useState } from 'react';
import { Button, HStack, Text, useTheme, VStack } from 'native-base';
import { X, Check } from 'phosphor-react-native';
import { getName } from 'country-list';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';

import { Team } from './Team';

interface GuessProps {
  id: string;
  gameId: string;
  createdAt: string;
  participantId: string;
  firstTeamPoints: number;
  secondTeamPoints: number;
}

export interface GameProps {
  id: string;
  date: Date;
  firstTeamCountryCode: string;
  secondTeamCountryCode: string;
  guess: null | GuessProps;
};

interface Props {
  data: GameProps;
  onGuessConfirm: (firstTeamPoints: string, secondTeamPoints: string) => void;
};

  export function Game({ data, onGuessConfirm }: Props) {
  const { colors, sizes } = useTheme();
  
  const when = dayjs(data.date).locale(ptBR).format("DD [de] MMMM [de] YYYY [às] HH:mm[h]");
  
  const isValidDate = (new Date(data.date) > new Date())
  const isValidGame = (data.firstTeamCountryCode !== "") && (data.secondTeamCountryCode !== "")

  const firstTeamName = data.firstTeamCountryCode ? getName(data.firstTeamCountryCode) : "To confirm"
  const secondTeamName = data.secondTeamCountryCode ? getName(data.secondTeamCountryCode) : "To confirm"

  const [firstTeamPoints, setFirstTeamPoints] = useState("");
  const [secondTeamPoints, setSecondTeamPoints] = useState("");

  useEffect(() => {
    setFirstTeamPoints(data.guess ? String(data.guess?.firstTeamPoints) : "")
    setSecondTeamPoints(data.guess ? String(data.guess?.secondTeamPoints) : "")
  }, [])

  return (
    <VStack
      w="full"
      bgColor="gray.800"
      rounded="sm"
      alignItems="center"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      mb={3}
      p={4}
    >
      <Text color="gray.100" fontFamily="heading" fontSize="sm">
        {firstTeamName} vs. {secondTeamName}
      </Text>

      <Text color="gray.200" fontSize="xs">
        {when}
      </Text>

      <HStack mt={4} w="full" justifyContent="space-between" alignItems="center">
        <Team
          position="right"
          code={data.firstTeamCountryCode}
          value={firstTeamPoints}
          onChangeText={setFirstTeamPoints}
          editable={!data.guess && isValidDate && isValidGame}
        />

        <X color={colors.gray[300]} size={sizes[6]} />

        <Team
          position="left"
          code={data.secondTeamCountryCode}
          value={secondTeamPoints}
          onChangeText={setSecondTeamPoints}
          editable={!data.guess && isValidDate && isValidGame}
        />
      </HStack>

      {
        !data.guess &&
        <Button
          size="xs"
          w="full"
          bgColor={(isValidDate && isValidGame) ? "green.500" : "gray.600"}
          mt={4}
          onPress={() => onGuessConfirm(firstTeamPoints, secondTeamPoints)}
          _pressed={{
            backgroundColor: "green.800"
          }}
          disabled={!isValidDate || !isValidGame}
        >
          <HStack alignItems="center">
            <Text
              color={(isValidDate && isValidGame) ? "white" : "gray.300"}
              fontSize="xs"
              fontFamily="heading"
              mr={3}
            >
              {isValidDate ? (isValidGame ? "CONFIRMAR PALPITE" : "EM BREVE") : "TEMPO ESGOTADO"}
            </Text>

            { (isValidDate && isValidGame) && <Check color={colors.white} size={sizes[4]} /> }
          </HStack>
        </Button>
      }
    </VStack>
  );
}