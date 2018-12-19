import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CssBaseline, Paper } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

var idCont = 0;

var styles = {
    card: {
        width: '100%',
        maxWidth: 300,
        margin: 20
    
    },
  
    title: {
      fontSize: 14,
     
    },
   
  };

export default class Tareja extends React.Component{
    constructor(props){
        super(props);
        this.incrementarId = this.incrementarId.bind(this);
        this.state = {
            id: this.incrementarId(),
            nome: this.props.props.nome,
            descricao: this.props.props.descricao,
            prazo: this.props.props.prazo,
            prioridade: this.props.props.prioridade,
            concluida: " "            
        };
    }

    incrementarId(){
        idCont++;

        return idCont;
    }

    render(){
        console.log("EM TAREFA")
        console.log(this.state.nome);
        return(
          <div> 
           <Card style={styles.card}>
            <CardContent>
                 <Typography variant="subheading" style={{display: 'inline-block'}} gutterBottom >
                    <Typography variant="subheading" style={{display: 'inline-block',fontWeight: "bold"}} >Id: </Typography>
                     {" "+this.state.id}
                </Typography>
                <br />
                <Typography variant="subheading" style={{display: 'inline-block'}} gutterBottom >
                    <Typography variant="subheading" style={{display: 'inline-block',fontWeight: "bold"}} >Nome: </Typography>
                     {" "+this.state.nome}
                </Typography>
                <br />
                <Typography variant="subheading" style={{display: 'inline-block'}} gutterBottom>
                    <Typography variant="subheading" style={{display: 'inline-block',fontWeight: "bold"}} >Descrição: </Typography>
                     {" "+this.state.descricao}
                </Typography>
                <br />
                <Typography variant="subheading" style={{display: 'inline-block'}}  gutterBottom>
                    <Typography variant="subheading" style={{display: 'inline-block',fontWeight: "bold"}} >Prazo: </Typography>
                     {" "+this.state.prazo}
                </Typography>
                <br />
                <Typography variant="subheading" style={{display: 'inline-block'}} gutterBottom>
                    <Typography variant="subheading" style={{display: 'inline-block',fontWeight: "bold"}}  >Prioridade: </Typography>
                     {" "+this.state.prioridade}
                </Typography>
                <br />
                <Typography variant="subheading" style={{display: 'inline-block'}} gutterBottom>
                    <Typography variant="subheading" style={{display: 'inline-block',fontWeight: "bold"}}  >Concluída: </Typography>
                     {" "+this.state.concluida}
                </Typography>            
            </CardContent>
           
                <CardActions style={{justifyContent:"flex-start"}}>
                    <Button size="small" style={{marginRight: 80, marginLeft: 20}}>Visualizar</Button>
                
                <CardActions >
                    <IconButton aria-label="Delete" >
                        <Delete />
                    </IconButton>
                    <IconButton aria-label="Edit" >
                        <Edit />
                    </IconButton>
                </CardActions>
                </CardActions>
           
            </Card>
           
           
           </div>
        );
    };

   
   

}