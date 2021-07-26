import React from 'react';
import {WeatherSearch} from '../interfaces';

interface WeatherSearchResultProps {
  search: WeatherSearch | null;
  title?: string;
  processing?: boolean;
}
const WeatherSearchResult: React.FC<WeatherSearchResultProps> = (props: WeatherSearchResultProps) => {
  if (props.processing) {
    return <div><h2>Carregando...</h2></div>;
  }

  if (!props.search) {
    return null;
  }

  return (
    <div className="search-result">
      <h3>{props.title || 'Resultado da Busca'}</h3>
      <div>Cidade: <b>{props.search.city}</b></div>
      <div>País: <b>{props.search.country}</b></div>
      <div>Temperatura: <b>{props.search.temperature}°C</b></div>
      <div>Humidade: <b>{props.search.humidity}%</b></div>
      <div>Clima: <img src={`https://openweathermap.org/img/wn/${props.search.icon}.png`} alt="Icone do Clima"/> <b>{props.search.description}</b></div>
    </div>
  );
}

export default WeatherSearchResult;