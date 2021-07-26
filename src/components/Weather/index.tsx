import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {LogResult, SummaryResult, WeatherSearch} from './interfaces';
import WeatherForm from './WeatherForm';
import WeatherSearchResult from './WeatherSearchResult';
import WeatherSummary from './WeatherSummary';
import WeatherLog from './WeatherLog';
import config from '../../config';

const Home: React.FC<any> = () => {
    const [weatherResult, setWeatherResult] = useState<WeatherSearch | null>(null);
    const [summaries, setSummaries] = useState<Array<SummaryResult>>([]);
    const [logs, setLogs] = useState<Array<LogResult>>([]);
    const [weatherProcessing, setWeatherProcessing] = useState<boolean>(false);
    const [summaryProcessing, setSummaryProcessing] = useState<boolean>(false);
    const [logProcessing, setLogProcessing] = useState<boolean>(false);

    useEffect(() => {
        loadSummaries();
        loadLogs();
    }, []);

    function loadSummaries() {
        setSummaryProcessing(true);
        
        Axios.get(`${config.apiURL}/weathers/summary`)
        .then(result => {
            setSummaries(result.data as Array<SummaryResult>);
        })
        .catch(() => {
            window.alert('Erro ao carregar Sumário');
        })
        .finally(() => setSummaryProcessing(false));
    }

    function loadLogs() {
        setLogProcessing(true);

        Axios.get(`${config.apiURL}/weathers/last-search`)
        .then(result => {
            setLogs(result.data as Array<LogResult>);
        })
        .catch(() => {
            window.alert('Erro ao carregar ultimos resultados');
        })
        .finally(() => setLogProcessing(false));
    }

    function handleSearch(city: string) {
        setWeatherProcessing(true);
        setWeatherResult(null);

        Axios.get(`${config.apiURL}/weathers/search?city=${city}`)
        .then(result => {
            setWeatherResult(result.data as WeatherSearch);
            loadSummaries();
            loadLogs();
        })
        .catch(() => {
            window.alert('Erro ao Buscar Cidade');
        })
        .finally(() => setWeatherProcessing(false));
    }

    return (
        <div className="global">
            <div className="card-left-menu">
                <WeatherForm onSearch={handleSearch}/>
                <WeatherSearchResult search={weatherResult} processing={weatherProcessing}/>
            </div>
            
            <div className="card-right-menu">
                <WeatherSummary summaries={summaries} processing={summaryProcessing} />
                <WeatherLog logs={logs} processing={logProcessing}/>
            </div>
           
        </div>
    );
}

export default Home;