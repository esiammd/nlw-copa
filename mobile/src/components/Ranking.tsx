import { useEffect, useState } from 'react';
import { FlatList, useToast } from 'native-base';

import { api } from '../services/api';

import { Loading } from './Loading';
import { RankingCard, RankingProps } from './RankingCard';
import { EmptyRakingList } from './EmptyRakingList';

interface Props {
  poolId: string;
}

export function Ranking({ poolId }: Props) {
  const [ranking, setRanking] = useState<RankingProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  async function fetchRanking() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pools/${poolId}/ranking`);
      // setRanking(response.data.ranking);
    } catch (error) {
      console.log(error);

      toast.show({
        title: 'Não foi possível listar o ranking.',
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRanking();
  }, []);

  if(isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <FlatList
      data={ranking}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <RankingCard data={item} />
      )}
      _contentContainerStyle={{ pb: 24 }}
      ListEmptyComponent={() => <EmptyRakingList />}
    />
  );
}