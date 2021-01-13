import React, { Component } from 'react';
import axios from 'axios';

export default class ExercisesList extends Component {

    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({ exercises: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise() {
        
    }

    render() {
        return(
            <div>
                <p>You are on the exercises list component!</p>
            </div>
            )
    }
}