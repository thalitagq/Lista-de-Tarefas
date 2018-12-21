import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default class EditForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            id: this.props.props.id,
            nome: this.props.props.nome,
            descricao: this.props.props.descricao,
            prazo: this.props.props.prazo,
            prioridade: this.props.props.prioridade,
            concluida: this.props.props.concluida,
            editMode: this.props.props.editMode
            
        };
    }

    handleChange = name => ({target: {value} }) =>{

        this.setState({ 
            novaTarefa: {
                ...this.state.novaTarefa,
                [name]: value
            }
        });
    }; 

    handleChangePrioridade = name => ({target: {value} }) =>{

        this.setState({ 
            novaTarefa: {
                ...this.state.novaTarefa,
                [name]: value
            }
        });
    }

    

    render(){
        console.log("EDIT FORM")
        console.log(this.state)
        if(this.state.editMode){
        this.setState({open: true})
        return(
         
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
                    value = {this.state.nome}
                    type="text"
                    error={this.state.nome === ""}
                    helperText={this.state.nome === "" ? 'Insira um nome' : ' '}
                    onChange={this.handleChange('nome')}
                    InputLabelProps={{
                        shrink: true,

                    }}     
                    fullWidth
                />
                <TextField             
                    margin="dense"
                    label="Descrição"
                    value = {this.state.descricao}
                    type="text"
                    error={this.state.descricao === ""}
                    helperText={this.state.descricao.length < 5 ? 'Insira uma descrição com no mínimo 5 caracteres' : ' '}
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
                    value = {this.state.prazo}
                    type="datetime-local"
                    error={this.state.prazo === ""}
                    helperText={this.state.prazo === "" ? 'Escolha o prazo' : ' '}
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
                        value={this.state.prioridade}
                        onChange={this.handleChangePrioridade('prioridade')}
                        error={this.state.prioridade === ""}
                        helperText={this.state.prioridade === "" ? 'Escolha a prioridade' : ' '}
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
           
        );}

        else{
            return null
        }
    };

   
   

}