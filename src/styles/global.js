import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  h1,
  h2,
  h3,
  h4 {
    color: #232529;
    font-weight: 600;
  }
  body {
    background: ${({ theme }) => theme.background};
    margin: 0 ;
    font-family: 'Poppins', sans-serif;
    font-size: 0.938rem;
    transition: all 0.25s linear;
  }
  ul {
   list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .container {
    max-width: 768px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  .grid {
    display: grid;
    gap: 1.5rem;
  }
  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: #e2e4e9;
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c6cad2;
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #9fa3ad;
  }  

  .services__modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    font-size: 1.5rem;
    color: #5785e0;
    cursor: pointer;
  }
  .services__modal-icon {
    color: #5785e0;
    margin-right: 0.25rem;
  }

/*==================== BUTTONS ====================*/
.button {
  display: inline-block;
  background: ${({ theme }) => theme.bgSecondary};
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  outline: none;
  border: none;
  
}
.button:hover {
  background: ${({ theme }) => theme.bgSecondary};
}
.button__icon {
  font-size: 1.25rem;
  margin-left: 0.5rem;
  transition: 0.3s;
}

.button--white {
  background-color: #fff;
  color: #5785e0;
  margin: 10px 0;
  border: 1px solid transparent;
  transition: 0.3s;
}

.button--white:hover {
  border: 1px solid #fff;
  color: #fff;
}
.button--flex {
  display: inline-flex;
  align-items: center;
}
.button--small {
  padding: 0.75rem 1rem;
}
.button--link {
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: #5785e0;
}
.button--link:hover {
  background-color: transparent;
  color: #4370cb;
}

@media screen and (min-width: 768px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
  body {
    margin: 0;
  }
  .main {
    padding: 0 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .main {
    padding: 0;
  }
}

  @media screen and (max-width: 500px) {
    [id] {
      scroll-margin-top: 2ex;
    }
  }
`
