
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import ListaTarefas from './ListaTarefas';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Close from '@material-ui/icons/Close';

const styles = {
    root: {
      flexGrow: 1,
      backgroundImage: 'url(require("../img/img.jpg"))'
    },

  };

export default class Home extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
            open: false, 
            openError:false,
            nomeErro: "",
            descricaoErro: "",
            prazoErro: "",
            prioridadeErro: "",
            tarefas: [],
            novaTarefa: {
                nome:"",
                descricao:"",
                prazo: "",
                prioridade:"",
            },           
        };
    }
    
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false });
        this.setState({ open: false, 
            novaTarefa:{
                nome:"",
                descricao:"",
                prazo: "",
                prioridade:"",
        } 
        });   
      };
    
      handleCloseError = () => {
        this.setState({ openError: false });
    };
    handleChange = name => ({target: {value} }) =>{

        this.setState({ 
            novaTarefa: {
                ...this.state.novaTarefa,
                [name]: value
            }
        });
    }; 

    validate = () =>{
        let isError = false;
        const errors = {};
        if(this.state.novaTarefa.nome.length<1){
            isError = true;
            errors.nomeErro = "Nome inválido"
            console.log("nome invalido")
        }
        if(this.state.novaTarefa.descricao.length<5){
            isError = true;
            errors.nomeErro = "Descrção precisa conter no mínimo 5 caracteres"
        }
        if(this.state.novaTarefa.prazo.length<12){
            isError = true;
            errors.nomeErro = "Prazo inválido"
        }
        if(this.state.novaTarefa.prioridade.length<1){
            isError = true;
            errors.nomeErro = "Escolha uma prioridade"
        }

        if(isError){
            this.setState({
                ...this.state,
                ...errors

            });
        }
        
        return isError;

    }

    handleSave = (event) => {
        console.log("SAVE")
        const error = this.validate();
        if(!error){
            const data = this.state.novaTarefa;
            this.state.tarefas.push(data);
            this.setState({ open: false, 
                            novaTarefa:{
                                nome:"",
                                descricao:"",
                                prazo: "",
                                prioridade:"",
                        } 
            });   
        }
        else{
            this.setState({
                openError: true,
                    ...this.state.novaTarefa,
            })
        }       
    };

    myCallback = (dataFromChild) => {
        this.setState({
            tarefas: dataFromChild
        })
    }

    handleChangePrioridade = name => ({target: {value} }) =>{

        this.setState({ 
            novaTarefa: {
                ...this.state.novaTarefa,
                [name]: value
            }
        });
    }; 

    render(){
    
        return(
            <div style={styles.root}>
                <AppBar position="static" color="default" style={{backgroundColor: "#00b0ff", height:80, justifyContent:"center"}}>
                    <Toolbar>
                        <Typography variant="h4" color="inherit" style={{flex: 1}}>
                            Lista de Tarefas
                        </Typography>
                        <IconButton aria-label="Delete"  onClick={this.handleClickOpen}>
                            <Add style={{width: 45, height: 45}}/>
                        </IconButton>
                    </Toolbar>               
                </AppBar>
               
                <Dialog   open={this.state.openError} onClose={this.handleClose} aria-labelledby="simple-dialog-title" >
                    <DialogTitle id="simple-dialog-title">Preencha todos os campos</DialogTitle>
                    <IconButton  size="small" aria-label="Close" onClick={this.handleCloseError}>
                        <Close size="small"/>
                    </IconButton>
                </Dialog>
                
                <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                           
                        >
                <DialogTitle id="form-dialog-title">Nova Tarefa</DialogTitle>
                <DialogContent>
               
                    <TextField      
                        margin="dense"
                        label="Nome da tarefa"
                        value = {this.state.novaTarefa.nome}
                        type="text"
                        error={this.state.novaTarefa.nome === ""}
                        helperText={this.state.novaTarefa.nome === "" ? 'Insira um nome' : ' '}
                        onChange={this.handleChange('nome')}
                        InputLabelProps={{
                            shrink: true,
                
                        }}     
                        fullWidth
                    />
                    <TextField             
                        margin="dense"
                        label="Descrição"
                        value = {this.state.novaTarefa.descricao}
                        type="text"
                        error={this.state.novaTarefa.descricao === ""}
                        helperText={this.state.novaTarefa.descricao.length < 5 ? 'Insira uma descrição com no mínimo 5 caracteres' : ' '}
                        multiline
                        rows="6"
                        onChange={this.handleChange('descricao')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    <TextField              
                        margin="dense"
                        label="Prazo"
                        value = {this.state.novaTarefa.prazo}
                        type="datetime-local"
                        error={this.state.novaTarefa.prazo === ""}
                        helperText={this.state.novaTarefa.prazo === "" ? 'Escolha o prazo' : ' '}
                        onChange={this.handleChange('prazo')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                    
                    <FormControl >
                        <InputLabel htmlFor="age-native-simple">Prioridade</InputLabel>
                        <Select
                            native
                            value={this.state.novaTarefa.prioridade}
                            onChange={this.handleChangePrioridade('prioridade')}
                            error={this.state.novaTarefa.prioridade === ""}
                            helperText={this.state.novaTarefa.prioridade === "" ? 'Escolha a prioridade' : ' '}
                            inputProps={{
                                name: 'age',
                                id: 'age-simple',
                            }}
                        >
                            <option value="" />
                            <option value={"Baixa"}>Baixa</option>
                            <option value={"Média"}>Média</option>
                            <option value={"Alta"}>Alta</option>
                            <option value={"Muito Alta"}>Muito Alta</option>
                        </Select>
                    </FormControl>          
                </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
              
        <ListaTarefas props={this.state.tarefas}  callback={this.myCallback}/>   
            </div>
        );
    }
}