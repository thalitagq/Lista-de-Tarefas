import React from 'react';
import Home from './Home'
import Tarefa from './Tarefa';
import ListaTarefas from './ListaTarefas';
import Grid from '@material-ui/core/Grid';
import '../components/App.css';

export default class App extends React.Component{

    render(){
        return(
            <div>
                
                <Home />
           
            </div>           
        );
    }
}