import React, { Component } from "react";
import styled, { ThemeProviderProps } from "styled-components";
import { RootState } from "../reducers/store";
import { Dispatch } from "redux";
import { fetchTodos } from "../reducers/todos/actions";
import { connect } from "react-redux";
import { Todo } from "../model/Todo";
import { __ALERTS, __COLORS, __GRAY_SCALE, MainTheme } from "../layout/Theme";
import { Spinner } from "../layout/UI/Spinners/Spinner";
import { getAlphaColor } from "../helpers/AlphaColor";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const Button = styled.div`
  border: 1px solid ${__COLORS.BLACK};
  padding: 1rem;
  border-radius: 5px;
  color: ${__COLORS.BLACK};
  margin-top: auto;
`;

type State = {};
type Props = {
  loading: boolean;
  todos: Todo[];
  fetchTodos: () => any;
};
const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: scroll;
  width: 100%;
  margin-bottom: 1em;
`;
const TodoContainer = styled.div<{ theme: ThemeProviderProps<any> }>`
  &:hover {
    box-shadow: ${MainTheme.boxShadow};
  }
  transition: 0.2s ease-in-out;
  padding: 0.2rem 1.5rem;
  border: 1px solid ${__GRAY_SCALE._200};
  border-radius: 4px;
  margin: 0.3rem 0;
  display: flex;
  align-items: center;
  color: ${__COLORS.PRIMARY};
`;

const Title = styled.p`
  margin: 0 1rem;
  color: ${__COLORS.BLACK};
`;

const Label = styled.div<{ completed: boolean }>`
  background: ${props =>
    props.completed
      ? getAlphaColor(0.15, __ALERTS.SUCCESS)
      : getAlphaColor(0.15, __ALERTS.WARNING)};
  color: ${props => (props.completed ? __ALERTS.SUCCESS : __ALERTS.WARNING)};
  padding: 4px 3px;
  border-radius: 4px;
  font-size: 12px;
  margin-left: auto;
  margin-right: 0.5em;
`;

type TodoProps = {
  todo: Todo;
};
const MyTodo = ({ todo }: TodoProps) => {
  return (
    <TodoContainer key={todo.id}>
      {todo.id} {"  "}
      <Title>{todo.title}</Title>
      <Label completed={todo.completed}>
        {todo.completed ? "done" : "todo"}
      </Label>
    </TodoContainer>
  );
};
class ReduxExample extends Component<Props, State> {
  state = {};

  render() {
    const { loading, todos } = this.props;
    return (
      <Container>
        <h2>Redux with Typescript is nice :)</h2>
        {todos.length === 0 &&
          !loading && (
            <p>
              For each redux element in our application, we create three
              different files (in order to have everything nicely decoupled (and
              thus easier to maintain):
              <ul>
                <li>
                  <code>actions.tsx</code>
                </li>
                <li>
                  <code>reducer.tsx</code>
                </li>
                <li>
                  <code>types.tsx</code>
                </li>
              </ul>
            </p>
          )}
        {loading && <Spinner color={__COLORS.PRIMARY} />}
        {todos.length > 0 && (
          <TodosContainer>
            {todos.map((todo: Todo) => {
              return <MyTodo todo={todo} />;
            })}
          </TodosContainer>
        )}
        <Button
          onClick={() => {
            this.props.fetchTodos();
          }}
        >
          Try me!
        </Button>
      </Container>
    );
  }
}

export default connect(
  (state: RootState) => ({
    todos: state.todos.todos,
    loading: state.todos.loading
  }),
  (dispatch: Dispatch) => {
    return {
      fetchTodos: () => {
        dispatch(fetchTodos());
      }
    };
  }
)(ReduxExample);
