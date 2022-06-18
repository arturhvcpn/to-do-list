import styles from './styles.module.css';
import clipBoard from '../../assets/clipboard.svg';

export function Empty() {
  return (
    <section className={styles.containerEmpty}>
      <img src={clipBoard} alt="Ícone de uma prancheta indicando que não existe tarefas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </section>
  );
}