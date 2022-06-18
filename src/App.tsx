import { useEffect, useState } from 'react';
import './global/styles.css';

import { Task } from './components/Task';
import { Empty } from './components/Empty';
import { Header } from './components/Header';
import { Input } from './components/Form/Input';
import { Button } from './components/Form/Button';
import styles from './App.module.css';

interface ITaskProps {
  key: string;
  title: string;
  isTaskDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITaskProps[]>([]);
  const [titleNewTask, setTitleNewTask] = useState('');
  const [taskDone, setTaskDone] = useState(0);


  function handleCreateATask() {
    event.preventDefault();
    
    const task:ITaskProps = {
      key: titleNewTask,
      title: titleNewTask,
      isTaskDone: false
    }

    setTasks([...tasks, task]);
    setTitleNewTask('');
  }

  function handleNewTaskText() {
    event.target.setCustomValidity('');
    setTitleNewTask(event?.target.value);
  }

  function handleNewTaskInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }
 
  function onDeleteTask(titleTask:string){
    const listTasks = tasks.filter(task => task.title !== titleTask);
    setTasks(listTasks);
  }

  function onDoneTask(titleTask:string) {
    const listTasks = tasks.filter(task => task.title !== titleTask);
    const taskToBeDone = tasks.find(task => task.title === titleTask);

    if(taskToBeDone !== undefined){
      taskToBeDone.isTaskDone = !taskToBeDone.isTaskDone;
      setTasks([...listTasks, taskToBeDone]);
    }
  }

  useEffect(() =>{
    const tasksDone = tasks.filter(task => task.isTaskDone === true);
    setTaskDone(tasksDone.length);
  }, [tasks])

  return (
    <div>
      <Header />
      <nav className={styles.wrapper}>
        <form onSubmit={handleCreateATask} className={styles.formAddTask}>
          <Input 
            titleTask={titleNewTask}
            handleNewTaskText={handleNewTaskText}
            handleNewTaskInvalid={handleNewTaskInvalid}
          />
          <Button />
        </form>
      </nav>
      <main className={styles.containerContent}>
        <section className={styles.tasksWrapper}>
           <div className={styles.headerWrapper}>
             <strong className={styles.progress}>Tarefas criadas</strong>
              <div className={styles.Counter}>
                <span>{tasks.length}</span>
              </div>
            </div>
            <div className={styles.headerWrapper}>
              <strong className={styles.done}>Concluídas</strong>
              <div className={styles.CounterDoneTasks}>
                <span>
                  {!tasks.length 
                    ? '0' 
                    :`${taskDone} de ${tasks.length}`
                  }
                </span>
              </div>
            </div>
        </section>
        {!tasks.length 
        ? <Empty />
        : tasks.map(task => {
          return(
            <Task 
              key={task.key} 
              titleTask={task.title}
              isTaskDone={task.isTaskDone}
              onDeleteTask={onDeleteTask}
              onDoneTask={onDoneTask}
            />
          )
        })
        }
      </main>
    </div>
  );

}

export default App;
