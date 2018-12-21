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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';
import green from '@material-ui/core/colors/green';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import EditForm from './EditForm';
var idCont = 0;

var styles = {
    card: {
        width: '100%',
        maxWidth: 300,
        margin: 20,
        backgroundColor: "#a6d4fa"
    
    },
  
    title: {
      fontSize: 14,
     
    },
    root: {
        color: green[600],
        '&$checked': {
          color: green[500],
        },
      },
      checked: {},
   
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
            concluida: false,
            editMode: false            
        };
    }

    incrementarId(){
        idCont++;

        return idCont;
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render(){
        console.log(this.state.editMode)
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
                <FormControlLabel
                    control={
                        <Checkbox
                        checked={this.state.checkedG}
                        onChange={this.handleChange('concluida')}
                        value="concluida"
                        style={{
                            root: styles.root,
                            checked: styles.checked,                          
                        }}
                        />
                    }
                    label="Concluída"                  
                />           
            </CardContent>
           
            <CardActions >
                <Button size="medium" style={{flex:1}}>Visualizar</Button>
                
                <CardActions style={{justifyContent:"flex-end"}}>
                    <IconButton aria-label="Delete" onClick={this.props.del}>
                        <Delete />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={this.props.edit}>
                        <Edit />
                    </IconButton>
                </CardActions>
                </CardActions>       
            </Card>
            
            <EditForm props={this.state}/>            
           
           </div>
        );
    };

   
   

}