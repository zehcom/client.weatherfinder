import React, { useState } from 'react';

interface WeatherFormProps {
  title?: string;
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = (props: WeatherFormProps) => {
  const [city, setCity] = useState<string>('');

  function handleChangeCity(event: any) {
    setCity(event.currentTarget.value);
  }

  function handleSearch() {
    props.onSearch(city);
    setCity('');
  }

  return (
    <div>
      <h3>Buscar Cidade</h3>
      <div>
        <input className="search-bar" value={city} onChange={handleChangeCity} type="text" placeholder="Ex. Campo Grande"/>
        <button className="search-button" onClick={handleSearch} disabled={city.length < 3}>Pesquisar</button>
      </div>
    </div>
  );
}

export default WeatherForm;