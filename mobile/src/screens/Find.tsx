import { useState } from "react";
import { Heading, VStack, useToast } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { api } from "../services/api";

export function Find() {
    const [poolCode, setPoolCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    const { navigate } = useNavigation();

    async function handleJoinPool() {
        if(!poolCode.trim()) {
            return toast.show({
                title: "Informe o código do bolão.",
                placement: "top",
                bgColor: "red.500",
            });
        }

        try {
            setIsLoading(true);
            
            await api.post("/pools/join", {
                code: poolCode.trim()
            });

            toast.show({
                title: "Você entrou no bolão com sucesso!",
                placement: "top",
                bgColor: "green.500",
            });

            setPoolCode("");
            setIsLoading(false);
            
            navigate("pools");
        } catch (error) {
            console.log(error);
            setIsLoading(false);

            if(error.response?.data?.message === "Pool not found.") {
                return toast.show({
                    title: "Não foi possível encontrar o bolão.",
                    placement: "top",
                    bgColor: "red.500",
                });
            }

            if(error.response?.data?.message === "You already joined this pool.") {
                return toast.show({
                    title: "Você já está nesse bolão.",
                    placement: "top",
                    bgColor: "red.500",
                });
            }
        }
    }

    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar por código" showBackButton/>

            <VStack mx={5} alignItems="center">
                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                    Encontre um bolão através de {"\n"}
                    seu código único
                </Heading>

                <Input
                    placeholder="Qual o código do bolão?"
                    autoCapitalize='characters'
                    onChangeText={setPoolCode}
                    value={poolCode}
                />

                <Button
                    title="Buscar bolão"
                    onPress={handleJoinPool}
                    isLoading={isLoading}
                    mt={2}
                />
            </VStack>
        </VStack>
    )
}