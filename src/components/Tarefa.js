import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CssBaseline } from '@material-ui/core';
var idCont = 0;

var styles = {
    card: {
        width: 300,
        height: 300,
        backgroundColor:"",
        margin: 20
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

export default class Tareja extends React.Component{
    constructor(props){
        super(props);
        this.incrementarId = this.incrementarId.bind(this);
        this.state = {
            id: this.incrementarId(),
            nome: "",
            descricao: "",
            prazo: "",
            prioridade: "",
            concluida: ""            
        };
    }

    incrementarId(){
        idCont++;
        return idCont;
    }

    render(){
    
        console.log(idCont);
        return(
            <Card style={styles.card}>
            <CardContent>
              <Typography style={styles.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                benevolent
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
           
        );
    };

   
   

}