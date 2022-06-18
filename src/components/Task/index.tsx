import { Check, Trash } from 'phosphor-react';
import styles from './styles.module.css';

interface ITaskProps {
  titleTask: string;
  isTaskDone: boolean;
  onDeleteTask(titleTask:string):void;
  onDoneTask(titleTask:string):void;  
}

export function Task({ titleTask, isTaskDone, onDeleteTask, onDoneTask }: ITaskProps) {

  function handleTaskIsDone(){
    onDoneTask(titleTask)
  }

  function handleDeleteTask(){
    onDeleteTask(titleTask)
  }
  
  return (
    <div className={styles.container}>
      <section className={styles.containerTask}>
        <input type="checkbox" name="task" id="task" 
          onChange={handleTaskIsDone} 
          checked={isTaskDone} 
        />
        {isTaskDone 
          ? <article className={styles.titleTaskDone} >{titleTask}</article>
          : <article className={styles.titleTask}>{titleTask}</article>
        }
        <Trash size={24} onClick={handleDeleteTask}/>
      </section>
    </div>
  );
}