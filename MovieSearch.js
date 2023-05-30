import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);

  const searchMovie = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=b4618253&t=${movieTitle}`
      );
      setMovieData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o título do filme"
        value={movieTitle}
        onChangeText={setMovieTitle}
      />
      <Button title="Pesquisar" onPress={searchMovie} />
      {movieData && (
        <View>
          <Text>Título: {movieData.Title}</Text>
          <Text>Ano de lançamento: {movieData.Year}</Text>
          <Text>Sinopse: {movieData.Plot}</Text>
          {/* Exiba outras informações do filme conforme necessário */}
        </View>
      )}
    </View>
  );
};

export default MovieSearch;
