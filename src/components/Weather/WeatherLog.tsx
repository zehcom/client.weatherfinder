import React from 'react';
import {LogResult} from './interfaces';

interface WeatherLogProps {
  title?: string;
  logs: Array<LogResult>;
  processing?: boolean;
}

const WeatherLog: React.FC<WeatherLogProps> = (props: WeatherLogProps) => {
  function renderLog(item: LogResult, index: number) {
    return <div key={index}>{item.city}</div>;
  }

  if (props.processing) {
    return <div><h3>Carregando...</h3></div>;
  }

  return (
    <div className="search-result">
      <h3>{props.title || 'Ultimas Buscas'}</h3>
      {props.logs.map(renderLog)}
      {props.logs.length === 0 && <div>Nenhum resultado existente</div>}
    </div>
  );
}

export default WeatherLog;