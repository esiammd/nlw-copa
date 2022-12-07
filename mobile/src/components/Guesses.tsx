import { useEffect, useState } from 'react';
import { FlatList, useToast } from 'native-base';

import { api } from '../services/api';

import { Loading } from './Loading';
import { Game, GameProps } from '../components/Game';
import { EmptyMyPoolList } from './EmptyMyPoolList';

interface Props {
  poolId: string;
  code: string;
}

export function Guesses({ poolId, code }: Props) {
  const [games, setGames] = useState<GameProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  async function fetchGames() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pools/${poolId}/games`);
      setGames(response.data.games);
    } catch (error) {
      console.log(error);

      toast.show({
        title: 'Não foi possível listar os jogos.',
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGuessConfirmation(gameId: string, firstTeamPoints: string, secondTeamPoints: string) {
    try {
      if(!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        return toast.show({
          title: 'Informe o placar do seu palpite.',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints),
      });
   
      toast.show({
        title: 'Palpite cadastrado com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      });

      fetchGames();
    } catch (error) {
      console.log(error);
      
      toast.show({
        title: 'Não foi possível confirmar seu palpite.',
        placement: 'top',
        bgColor: 'red.500'
      });
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

    if(isLoading) {
      return (
        <Loading />
      )
    }

  return (
    <FlatList
      data={games}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Game
          data={item}
          onGuessConfirm={(firstTeamPoints, secondTeamPoints) => {
            handleGuessConfirmation(item.id, firstTeamPoints, secondTeamPoints)
          }}
        />
      )}
      _contentContainerStyle={{ pb: 24 }}
      ListEmptyComponent={() => <EmptyMyPoolList code={code} />}
    />
  );
}