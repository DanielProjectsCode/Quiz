import React from "react";
import Input from "../../shared/components/FormElements/Input";
import "./AddQuiz.css";
import { useForm } from "../../shared/hooks/form-hook";
import {
    VALIDATOR_REQUIRE,
  } from "../../shared/utils/validators";
  import { useHttpClient } from "../../shared/hooks/http-hook";
  import { useHistory } from "react-router-dom";
  import Button from "../../shared/components/FormElements/Button";
  import ErrorModal from "../../shared/components/UIElements/ErrorModal";
  import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const AddQuiz = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
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
    const history = useHistory();

    const quizSubmitHandler = async (event) => {
      event.preventDefault();
      try {
        await sendRequest(
          "http://localhost:5000/api/quizzes",
          "POST",
          JSON.stringify({
            title: formState.inputs.title.value,
            questions: [{
            question: formState.inputs.question.value,
            optionA: formState.inputs.optionA.value,
            optionB: formState.inputs.optionB.value,
            answer: formState.inputs.answer.value,
            }]
          }),
          { "Content-Type": "application/json" }
        );
        history.push("/");
      } catch (err) {}
    };

  return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
      <form className="quiz-form">
      {isLoading && <LoadingSpinner asOverlay />}
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
        <Button type="submit">
          ADD Question
        </Button>
        <Button type="submit" className='add-quiz' onClick={quizSubmitHandler}>
          Finish Quiz
        </Button>
      </form>
    </React.Fragment>
  );
};

export default AddQuiz;
