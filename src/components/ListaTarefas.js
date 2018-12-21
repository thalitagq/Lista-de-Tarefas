import React from 'react';
import Home from './Home'
import Tarefa from './Tarefa';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditForm from './EditForm';
import img from '../img/img.jpg'


export default class ListaTarefas extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state = {           
            tarefas: this.props.props,             
        };
    }
    
    handleDelete = (index) =>{
        const copyTarefas = Object.assign([],this.state.tarefas);
        delete copyTarefas[index]
        this.setState({
            tarefas: copyTarefas
        }) 
        this.props.callback(copyTarefas)
    }

    handleEdit = (index) =>{
        console.log("EDIT")
        console.log(index)              
    }

    render(){

        if(this.state.tarefas.length>0){
            return(
            
                <Grid  container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        
                        {this.state.tarefas.map((p, index)=>{ 
                            return( 
                                <div> 
                                    <Tarefa props= {p} del={this.handleDelete.bind(this,index)} edit={() =>this.handleEdit(index)}/>                                                      
                                </div> 
                            )        
                            })}                   
                </Grid>        
                     
            )
        }
        else{
            return  null
        }
    }
}