import Head from 'next/head'
import React from 'react'
import TodoList from '../../components/TodoList'
import { DAO } from '../../core/DAO'
import { TodoDAO } from '../../core/TodoDAO'
import { Todo } from '../../core/Todo'

import 'bootstrap/dist/css/bootstrap.min.css'
export interface TodoListProps{
    todos:Todo[]
}


function Todos({todos}:TodoListProps) {
  return (

    <>
    <Head>
        <title>TodoLists</title>
    </Head>
    <main className="container">
        <h1>Todos</h1>
        <TodoList todos={todos}></TodoList>
    </main>
    </>
  )
}


export async function getServerSideProps(context:any) {

    const dao:DAO = new TodoDAO()
    const todos = await dao.findAll()
    return {
      props: {
        todos
      },
    };
  }



export default Todos