import React from "react";
import './AddQuiz';

const AddQuiz = () => {
    return (
        <React.Fragment>
            <form className="quiz-form">
                <input id="title" element='input' type='text' label='Title' />
                <input id="title" element='input' type='text' label='Title' />
                <input id="title" element='input' type='text' label='Title' />
                <input id="title" element='input' type='text' label='Title' />
                <button type='submit'>
                    Add Question
                </button>
            </form>
        </React.Fragment>
    )
}

export default AddQuiz;