import { Avatar, Center, HStack, Text } from 'native-base';

export interface ParticipantProps {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
};

interface Props {
  participants: ParticipantProps[];
  count: number;
};

export function Participants({participants, count }: Props) {
  return (
    <HStack marginRight={count > 4 ? 0 : 3}>
      {
        participants && participants.map((participant) => (
          <Avatar
            key={participant.id}
            source={{ uri: participant.user.avatarUrl}}
            w={8}
            h={8}
            rounded="full"
            borderWidth={2}
            marginRight={count > 4 ? -3 : -2}
            borderColor="gray.800"
          >
           {participant.user?.name?.at(0).toUpperCase()}
          </Avatar>
        ))
      }

      {count > 4 &&
        <Center w={8} h={8} bgColor="gray.700" rounded="full" borderWidth={1} borderColor="gray.800">
          <Text color="gray.100" fontSize="xs" fontFamily="medium">
            {count ? `+${count-4}` : 0}
          </Text>
        </Center>
      }
    </HStack>
  );
}