import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";

import Logo from "../assets/logo.svg";

export function SignIn() {
  const { singIn, isUserLoading } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
        <Logo width={212} height={40} />

        <Button
          type="SECONDARY"
          title="Entrar com google"
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
          mt={12}
          onPress={singIn}
          isLoading={isUserLoading}
          _loading={{ _spinner: { color: "white" } }}
        />

        <Text
          color="gray.200"
          textAlign="center"
          mt={4}
        >
          Não utilizamos nenhuma informação além {"\n"}
          do seu email para criação de sua conta.
        </Text>
    </Center>
  );
}