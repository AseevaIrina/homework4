import React from 'react';
import {useFetch} from "./useFetch";

interface IData {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
  const {
    data,
    error,
    isLoading,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
        <p>{isLoading && 'Загрузка...'}</p>
        <p>{error && 'Произошла ошибка'}</p>
        {data && !isLoading && data.map((item: IData) => <div key={item.id}>{item.title}</div>) }
      </div>
  );
}

export default App;
