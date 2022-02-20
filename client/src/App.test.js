import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from './components/home/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Activity from './components/home/activity/Activity';

describe('Componente LandingPage', () => {
  it('Existe un boton de explorar! (explore!)', async () => { 
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText(/explore/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Componente Navbar', () => {
  it('Tiene un boton de inicio para ir al Landing Page', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText(/inicio/i)).toBeInTheDocument()
  })
});

describe('Componente formulario Activity', () => {
  it('Tiene un campo para ingresar el nombre', async () =>{
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Activity />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByRole('nameAct')).toBeInTheDocument()
  });
})