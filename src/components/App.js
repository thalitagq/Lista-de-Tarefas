import React from 'react';
import Home from './Home'
import Tarefa from './Tarefa';
import Grid from '@material-ui/core/Grid';
export default class App extends React.Component{

    render(){
        return(
            <div>
                <h1>Lista</h1>
                <Home/>
                <Grid   container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                        <Tarefa/>
                
                </Grid>
               
            </div>           
        );
    }
}