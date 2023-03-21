import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';

class FormComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comment: '',
            topic: 'React'
        }
    }
    userNameHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }

    commentHandler = event => {
        this.setState({
            comment: event.target.value
        })
    }

    topicHandler = event => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = event => {
        alert(`UserName: ${this.state.userName}, Comment: ${this.state.comment}, Topic: ${this.state.topic}`)
        event.preventDefault()
    }

    topics = ['React', 'Angular', 'Vue']
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <TextField  type="text" value={this.state.userName} onChange={this.userNameHandler}
                        label="UserName" variant="outlined"
                        ></TextField >
                    </div>
                    <div>
                        <TextareaAutosize value={this.state.comment} onChange={this.commentHandler}  label="UserName" variant="outlined" />
                    </div>

                    <div>
                        <FormControl sx={{ m: 2, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                            <Select
                                value={this.state.topic} onChange={this.topicHandler}
                            >
                                {
                                    this.topics.map(t => <MenuItem value={t}>{t}</MenuItem>)
                                }

                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button type="submit" variant="contained" color="primary" >Submit </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormComponent