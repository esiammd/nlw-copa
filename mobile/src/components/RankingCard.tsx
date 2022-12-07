import { Heading, HStack, VStack, Avatar, Box, Text } from 'native-base';

export interface RankingProps {
  id: string;
  name: string;
  avatarUrl: string;
  points: number;
  position: number;
  isYou: boolean;
}

interface Props {
  data?: RankingProps;
}

export function RankingCard({ data }: Props) {

  return (
    <HStack
      w="full"
      h={20}
      bgColor="gray.800"
      borderBottomWidth={3}
      borderBottomColor="yellow.500"
      justifyContent="space-between"
      alignItems="center"
      rounded="sm"
      mb={3}
      p={4}
    >
      <HStack alignItems="center">
        <Avatar 
          w={12}
          h={12}
          rounded="full"
          borderWidth={2}
          borderColor="gray.800"
          source={{uri: data.avatarUrl}}
        />

        <VStack ml={2}>
          <Heading color="white" fontSize="md" fontFamily="heading">
            {data.name} {data.isYou && <Text color="gray.300" fontSize="xs">(você)</Text>}
          </Heading>

          <Text color="gray.200" fontSize="xs">
            {data.points} ponto(s)
          </Text>
        </VStack>
      </HStack>

      <Box
        w={10}
        h={6}
        rounded="xl"
        alignItems="center"
        justifyContent="center"
        bgColor={data.position > 3 ? "gray.600" : "yellow.500"}
      >
        <Text
          textAlign="center"
          fontSize="sm"
          fontFamily="heading"
          color={data.position > 3 ? "gray.300" : "gray.1050"}
        >
          {data.position}º
        </Text>
      </Box>
    </HStack>
  );
}