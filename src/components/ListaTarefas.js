import React from 'react';
import Home from './Home'
import Tarefa from './Tarefa';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



export default class ListaTarefas extends React.Component{
    
    constructor(props){
        super(props);
       
        this.state = {           
            tarefas: this.props.props                
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

    handleSave = (event) => {
        const data = this.state.novaTarefa;
        this.state.tarefas.push(data);
        this.setState({ open: false,  
                     });   
     };

    render(){
        const t = {
            nome: "aha",
            descricao: "",
            prazo: "",
            prioridade: "",

        }

        if(this.state.tarefas.length>0){
            return(
        
            <Grid  container
                    direction="row"
                    justify="center"
                    alignItems="center">
                    {this.state.tarefas.map((p, index)=>{ 
                        return( 
                            <Tarefa props= {p} del={this.handleDelete.bind(this,index)} save={this.handleSave.bind(this)}/>
                        )        
                        })}                   
            </Grid>        
                        
            )
        }
        else{
        console.log("no else")
            // return <Tarefa props= {t} del = {this.handleDelete}/>;
            return   <Grid  container
                            direction="row"
                            justify="center"
                            alignItems="center">
                    <Typography variant="h4" style={{display: 'center', marginTop:150}} gutterBottom>Lista de tarefas vazia</Typography>                  
                    </Grid> 
        }
    }
}