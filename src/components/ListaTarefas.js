import React from 'react';
import Home from './Home'
import Tarefa from './Tarefa';
import Grid from '@material-ui/core/Grid';

export default class ListaTarefas extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state = {           
            tarefas: this.setTarefas()                 
        };
    }

    setTarefas(){
        return this.props.props
    }

    render(){
        const t = {
            nome:"aaaa",
            descricao:"bbbb",
            prazo: "cccc",
            prioridade:"dddd",
        }
        
        if (this.state.tarefas.length>0){
            console.log("no if")
            return(
                <div>
                  
                    {this.state.tarefas.map(p =>                                           
                        <Tarefa props= {p}/>
        
                     )}
                            
                </div>           
            );
        }
        else{
        console.log("no else")
            return  null;
        }
    }
}