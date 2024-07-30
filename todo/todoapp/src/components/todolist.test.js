import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TODOList from "./TODOlist";
import React from "react";

const mockTodos = [
  { id: 1, title: "Todo 1", is_completed: false },
  { id: 2, title: "Todo 2", is_completed: true },
];

test("renders without crashing", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
});

test('displays "Task list empty." when there are no todos', () => {
  render(<TODOList todos={[]} setTodos={() => {}} />);
  expect(screen.getByText("Task list empty.")).toBeInTheDocument();
});

test("displays todos when provided", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  expect(screen.getByText("Todo 1")).toBeInTheDocument();
  expect(screen.getByText("Todo 2")).toBeInTheDocument();
});

test("each todo item displays its title", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  expect(screen.getByText("Todo 1")).toBeInTheDocument();
  expect(screen.getByText("Todo 2")).toBeInTheDocument();
});

test("each todo item displays edit and delete buttons", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  expect(screen.getAllByText("Edit").length).toBe(2);
  expect(screen.getAllByText("Delete").length).toBe(2);
});

test("checkbox shows the completed status of each todo", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  expect(screen.getByRole("checkbox", { name: "" }).checked).toBe(false);
  expect(screen.getAllByRole("checkbox")[1].checked).toBe(true);
});

test("edit button toggles the state", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  fireEvent.click(screen.getAllByText("Edit")[0]);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("editing an item displays an input field", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  fireEvent.click(screen.getAllByText("Edit")[0]);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("input field is focused when editing starts", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  fireEvent.click(screen.getAllByText("Edit")[0]);
  const input = screen.getByRole("textbox");
  expect(document.activeElement).toBe(input);
});

test("input field reflects the todo's title", () => {
  render(<TODOList todos={mockTodos} setTodos={() => {}} />);
  fireEvent.click(screen.getAllByText("Edit")[0]);
  expect(screen.getByRole("textbox").value).toBe("Todo 1");
});

test("changing the input updates the todo title in state", () => {
  const setTodosMock = jest.fn();
  render(<TODOList todos={mockTodos} setTodos={setTodosMock} />);
  fireEvent.click(screen.getAllByText("Edit")[0]);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Updated Todo 1" } });
  fireEvent.blur(input);
  expect(setTodosMock).toHaveBeenCalledWith(expect.any(Function));
});

test("checkbox click toggles the completed status of the todo", () => {
  const setTodosMock = jest.fn();
  render(<TODOList todos={mockTodos} setTodos={setTodosMock} />);
  const checkbox = screen.getByRole("checkbox", { name: "" });
  fireEvent.click(checkbox);
  expect(setTodosMock).toHaveBeenCalledWith(expect.any(Function));
});

test("delete button removes the todo from the list", () => {
  const setTodosMock = jest.fn();
  render(<TODOList todos={mockTodos} setTodos={setTodosMock} />);
  fireEvent.click(screen.getAllByText("Delete")[0]);
  expect(setTodosMock).toHaveBeenCalledWith(expect.any(Function));
});

test("submitting the edit form saves the changes", () => {
  const setTodosMock = jest.fn();
  render(<TODOList todos={mockTodos} setTodos={setTodosMock} />);
  fireEvent.click(screen.getAllByText("Edit")[0]);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Updated Todo 1" } });
  fireEvent.submit(input);
  expect(setTodosMock).toHaveBeenCalledWith(expect.any(Function));
});
