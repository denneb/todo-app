import { MainLayout } from './components/layout/MainLayout';
import { TodoList } from './components/todo';
import { Footer, Header, InputText } from './components/ui';

function TodoApp() {
  return (
    <MainLayout>
      <main className='todo-container'>
        <Header />
        <InputText />
        <TodoList />
      </main>
      <Footer />
    </MainLayout>
  );
}

export default TodoApp;
