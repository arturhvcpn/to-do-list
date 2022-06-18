import styles from './styles.module.css';

interface IInputProps{
  titleTask:string;
  handleNewTaskText(): void;
  handleNewTaskInvalid(): void;
}

export function Input({ titleTask, handleNewTaskText, handleNewTaskInvalid }: IInputProps){
  return(
    <>
      <input 
        className={styles.inputTask} 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={titleTask}
        onChange={handleNewTaskText}
        onInput={handleNewTaskInvalid}
        required
      />
    </>
  );
}