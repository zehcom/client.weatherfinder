import React from 'react';
import {SummaryResult} from './interfaces';

interface WeatherSummaryProps {
  title?: string;
  summaries: Array<SummaryResult>;
  processing?: boolean;
}

const WeatherSummary: React.FC<WeatherSummaryProps> = (props: WeatherSummaryProps) => {
  function renderSummary(item: SummaryResult, index: number) {
    return (
      <div key={index}>
        {index+1}º - {item.city}:  <b>{item.total}</b>
      </div>
    );
  }

  if (props.processing) {
    return <div><h3>Carregando...</h3></div>;
  }

  return (
    <div>
      <h3>{props.title || 'Mais Buscados'}</h3>
      {props.summaries.map(renderSummary)}
      {props.summaries.length === 0 && <div>Nenhum resultado existente</div>}
    </div>
  );
}

export default WeatherSummary;