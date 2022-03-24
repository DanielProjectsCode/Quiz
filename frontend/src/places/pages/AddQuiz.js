import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./AddQuiz";
import { useForm } from "../../shared/hooks/form-hook";
import {
    VALIDATOR_REQUIRE,
  } from "../../shared/utils/validators";

const AddQuiz = () => {
    const [formState, inputHandler] = useForm(
      {
        title: "",
        questions: [
          {
            question: {
              value: "",
              isValid: false,
            },
            optionA: {
              value: "",
              isValid: false,
            },
            optionB: {
              value: "",
              isValid: false,
            },
            answer: {
              value: "",
              isValid: false,
            },
          },
        ],
      },
      false
    );



  return (
    <React.Fragment>
      <form className="quiz-form">
      <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="question"
          element="input"
          type="text"
          label="Question"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid question."
          onInput={inputHandler}
        />
        <Input
          id="optionA"
          element="textarea"
          label="optionA"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid option (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="optionB"
          element="textarea"
          label="optionB"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid option (at least 5 characters)."
          onInput={inputHandler}
        />
        <Input
          id="answer"
          element="textarea"
          label="answer"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid oanswer (at least 5 characters)."
          onInput={inputHandler}
        />
      </form>
    </React.Fragment>
  );
};

export default AddQuiz;
