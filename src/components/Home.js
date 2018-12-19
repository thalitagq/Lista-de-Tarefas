
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
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Tarefa from './Tarefa';
import ListaTarefas from './ListaTarefas';

const styles = {
    root: {
      flexGrow: 1,
    },

  };
  
export default class Home extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
            open: false, 
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
      };
    
    handleChange = name => ({target: {value} }) =>{
        console.log(name);
        console.log(value);
        this.setState({ 
            novaTarefa: {
                ...this.state.novaTarefa,
                [name]: value
            }
        });
    }; 

    handleSave = (event) => {
       const data = this.state.novaTarefa;
       this.state.tarefas.push(data);
       this.setState({ open: false });
     
    };

    render(){
    
        return(
            <div style={styles.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h5" color="inherit" style={{flex: 1}}>
                            Tarefas
                        </Typography>
                        <IconButton aria-label="Delete"  onClick={this.handleClickOpen}>
                            <Add style={{width: 45, height: 45}}/>
                        </IconButton>
                    </Toolbar>               
                </AppBar>
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
              multiline
              rows="8"
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
              onChange={this.handleChange('prazo')}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            <TextField              
              margin="dense"
              label="Prioridade"
              value = {this.state.novaTarefa.prioridade}
              type="text"
              onChange={this.handleChange('prioridade')}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
           
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
              
        <ListaTarefas props={this.state.tarefas}/>   
            </div>
        );
    }
}