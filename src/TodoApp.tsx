import { MainLayout } from './components/layout/MainLayout';
import { TodoList } from './components/todo';
import { Footer, Header, InputText } from './components/ui';
import { TodoProvider } from './context/todo';

function TodoApp() {
  return (
    <MainLayout>
      <main className='todo-container'>
        <Header />
        <InputText />
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </main>
      <Footer />
    </MainLayout>
  );
}

export default TodoApp;
