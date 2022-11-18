export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateTodo?: Maybe<Todo>;
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput;
};

export type Query = {
  __typename?: 'Query';
  /** Get all todos */
  todos?: Maybe<Array<Maybe<Todo>>>;
  /** Get a user by id */
  user?: Maybe<User>;
  /** Get all users */
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  description?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
};

export type UpdateTodoInput = {
  description?: InputMaybe<Scalars['String']>;
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};
