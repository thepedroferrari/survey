import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

export enum Answer_Type_Enum {
  Boolean = 'Boolean',
  Number = 'Number',
  Text = 'Text'
}

/** Boolean expression to compare columns of type "answer_type_enum". All fields are combined with logical 'AND'. */
export type Answer_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Answer_Type_Enum>;
  _in?: InputMaybe<Array<Answer_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Answer_Type_Enum>;
  _nin?: InputMaybe<Array<Answer_Type_Enum>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "question" */
  delete_question?: Maybe<Question_Mutation_Response>;
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>;
  /** insert data into the table: "question" */
  insert_question?: Maybe<Question_Mutation_Response>;
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>;
  /** update data of the table: "question" */
  update_question?: Maybe<Question_Mutation_Response>;
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>;
  /** update multiples rows of table: "question" */
  update_question_many?: Maybe<Array<Maybe<Question_Mutation_Response>>>;
  /** update data of the table: "survey" */
  update_survey?: Maybe<Survey_Mutation_Response>;
  /** update single row of the table: "survey" */
  update_survey_by_pk?: Maybe<Survey>;
  /** update multiples rows of table: "survey" */
  update_survey_many?: Maybe<Array<Maybe<Survey_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_QuestionArgs = {
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Question_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_QuestionArgs = {
  objects: Array<Question_Insert_Input>;
  on_conflict?: InputMaybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Question_OneArgs = {
  object: Question_Insert_Input;
  on_conflict?: InputMaybe<Question_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionArgs = {
  _inc?: InputMaybe<Question_Inc_Input>;
  _set?: InputMaybe<Question_Set_Input>;
  where: Question_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Question_By_PkArgs = {
  _inc?: InputMaybe<Question_Inc_Input>;
  _set?: InputMaybe<Question_Set_Input>;
  pk_columns: Question_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Question_ManyArgs = {
  updates: Array<Question_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SurveyArgs = {
  _set?: InputMaybe<Survey_Set_Input>;
  where: Survey_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_By_PkArgs = {
  _set?: InputMaybe<Survey_Set_Input>;
  pk_columns: Survey_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Survey_ManyArgs = {
  updates: Array<Survey_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table: "survey" */
  survey: Array<Survey>;
  /** fetch data from the table: "survey" using primary key columns */
  survey_by_pk?: Maybe<Survey>;
};


export type Query_RootQuestionArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Query_RootQuestion_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSurveyArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Query_RootSurvey_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** A Question belonging to a Survey */
export type Question = {
  __typename?: 'question';
  answer_type: Answer_Type_Enum;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  modified_at: Scalars['timestamptz']['output'];
  prompt: Scalars['String']['output'];
  /** An object relationship */
  survey: Survey;
  survey_id: Scalars['uuid']['output'];
  survey_rank: Scalars['Int']['output'];
};

/** order by aggregate values of table "question" */
export type Question_Aggregate_Order_By = {
  avg?: InputMaybe<Question_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Question_Max_Order_By>;
  min?: InputMaybe<Question_Min_Order_By>;
  stddev?: InputMaybe<Question_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Question_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Question_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Question_Sum_Order_By>;
  var_pop?: InputMaybe<Question_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Question_Var_Samp_Order_By>;
  variance?: InputMaybe<Question_Variance_Order_By>;
};

/** order by avg() on columns of table "question" */
export type Question_Avg_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "question". All fields are combined with a logical 'AND'. */
export type Question_Bool_Exp = {
  _and?: InputMaybe<Array<Question_Bool_Exp>>;
  _not?: InputMaybe<Question_Bool_Exp>;
  _or?: InputMaybe<Array<Question_Bool_Exp>>;
  answer_type?: InputMaybe<Answer_Type_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  survey?: InputMaybe<Survey_Bool_Exp>;
  survey_id?: InputMaybe<Uuid_Comparison_Exp>;
  survey_rank?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "question" */
export enum Question_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionPkey = 'question_pkey',
  /** unique or primary key constraint on columns "survey_rank", "survey_id" */
  QuestionSurveyIdSurveyRankKey = 'question_survey_id_survey_rank_key'
}

/** input type for incrementing numeric columns in table "question" */
export type Question_Inc_Input = {
  survey_rank?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "question" */
export type Question_Insert_Input = {
  answer_type?: InputMaybe<Answer_Type_Enum>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  survey_rank?: InputMaybe<Scalars['Int']['input']>;
};

/** order by max() on columns of table "question" */
export type Question_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  survey_id?: InputMaybe<Order_By>;
  survey_rank?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "question" */
export type Question_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  survey_id?: InputMaybe<Order_By>;
  survey_rank?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "question" */
export type Question_Mutation_Response = {
  __typename?: 'question_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Question>;
};

/** on_conflict condition type for table "question" */
export type Question_On_Conflict = {
  constraint: Question_Constraint;
  update_columns?: Array<Question_Update_Column>;
  where?: InputMaybe<Question_Bool_Exp>;
};

/** Ordering options when selecting data from "question". */
export type Question_Order_By = {
  answer_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  survey?: InputMaybe<Survey_Order_By>;
  survey_id?: InputMaybe<Order_By>;
  survey_rank?: InputMaybe<Order_By>;
};

/** primary key columns input for table: question */
export type Question_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "question" */
export enum Question_Select_Column {
  /** column name */
  AnswerType = 'answer_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  SurveyId = 'survey_id',
  /** column name */
  SurveyRank = 'survey_rank'
}

/** input type for updating data in table "question" */
export type Question_Set_Input = {
  answer_type?: InputMaybe<Answer_Type_Enum>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  survey_rank?: InputMaybe<Scalars['Int']['input']>;
};

/** order by stddev() on columns of table "question" */
export type Question_Stddev_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "question" */
export type Question_Stddev_Pop_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "question" */
export type Question_Stddev_Samp_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "question" */
export type Question_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Question_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Question_Stream_Cursor_Value_Input = {
  answer_type?: InputMaybe<Answer_Type_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  prompt?: InputMaybe<Scalars['String']['input']>;
  survey_id?: InputMaybe<Scalars['uuid']['input']>;
  survey_rank?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "question" */
export type Question_Sum_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** update columns of table "question" */
export enum Question_Update_Column {
  /** column name */
  AnswerType = 'answer_type',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  SurveyRank = 'survey_rank'
}

export type Question_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Question_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Question_Set_Input>;
  /** filter the rows which have to be updated */
  where: Question_Bool_Exp;
};

/** order by var_pop() on columns of table "question" */
export type Question_Var_Pop_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "question" */
export type Question_Var_Samp_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "question" */
export type Question_Variance_Order_By = {
  survey_rank?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "question" */
  question: Array<Question>;
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>;
  /** fetch data from the table in a streaming manner: "question" */
  question_stream: Array<Question>;
  /** fetch data from the table: "survey" */
  survey: Array<Survey>;
  /** fetch data from the table: "survey" using primary key columns */
  survey_by_pk?: Maybe<Survey>;
  /** fetch data from the table in a streaming manner: "survey" */
  survey_stream: Array<Survey>;
};


export type Subscription_RootQuestionArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootQuestion_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootQuestion_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Question_Stream_Cursor_Input>>;
  where?: InputMaybe<Question_Bool_Exp>;
};


export type Subscription_RootSurveyArgs = {
  distinct_on?: InputMaybe<Array<Survey_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Survey_Order_By>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};


export type Subscription_RootSurvey_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSurvey_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Survey_Stream_Cursor_Input>>;
  where?: InputMaybe<Survey_Bool_Exp>;
};

/** columns and relationships of "survey" */
export type Survey = {
  __typename?: 'survey';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  modified_at: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  questions: Array<Question>;
};


/** columns and relationships of "survey" */
export type SurveyQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Question_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Question_Order_By>>;
  where?: InputMaybe<Question_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "survey". All fields are combined with a logical 'AND'. */
export type Survey_Bool_Exp = {
  _and?: InputMaybe<Array<Survey_Bool_Exp>>;
  _not?: InputMaybe<Survey_Bool_Exp>;
  _or?: InputMaybe<Array<Survey_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  questions?: InputMaybe<Question_Bool_Exp>;
};

/** response of any mutation on the table "survey" */
export type Survey_Mutation_Response = {
  __typename?: 'survey_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Survey>;
};

/** Ordering options when selecting data from "survey". */
export type Survey_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questions_aggregate?: InputMaybe<Question_Aggregate_Order_By>;
};

/** primary key columns input for table: survey */
export type Survey_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "survey" */
export enum Survey_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ModifiedAt = 'modified_at',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "survey" */
export type Survey_Set_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "survey" */
export type Survey_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Survey_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Survey_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  modified_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Survey_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Survey_Set_Input>;
  /** filter the rows which have to be updated */
  where: Survey_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};
