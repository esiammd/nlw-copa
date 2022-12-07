import { useState } from "react";
import { Heading, VStack, Text, useToast } from "native-base";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { api } from "../services/api";

import Logo from "../assets/logo.svg";

export function New() {
    const [poolTitle, setPoolTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();

    async function handlePoolCreate() {
        if(!poolTitle.trim()) {
            return toast.show({
                title: "Informe um nome para o seu bolão.",
                placement: "top",
                bgColor: "red.500",
            });
        }

        try {
            setIsLoading(true);
            
            await api.post("/pools", {
                title: poolTitle.trim()
            });

            toast.show({
                title: "Bolão criado com sucesso!",
                placement: "top",
                bgColor: "green.500",
            });

            setPoolTitle("");
        } catch (error) {
            console.log(error);

            toast.show({
                title: "Não foi possível criar o bolão.",
                placement: "top",
                bgColor: "red.500",
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar novo bolão" />

            <VStack mt={8} mx={5} alignItems="center">
                <Logo />

                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                    Crie seu próprio bolão da copa {"\n"}
                    e compartilhe entre amigos!
                </Heading>

                <Input
                    placeholder="Qual nome do seu bolão?"
                    onChangeText={setPoolTitle}
                    value={poolTitle}
                />

                <Button
                    title="Criar meu bolão"
                    onPress={handlePoolCreate}
                    isLoading={isLoading}
                    mt={2}
                />

                <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
                    Após criar seu bolão, você receberá um
                    código único que poderá usar para convidar
                    outras pessoas.
                </Text> 
            </VStack>
        </VStack>
    )
}