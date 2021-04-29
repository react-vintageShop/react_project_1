import React from 'react';
import PropTypes from 'prop-types';
import HeaderLayout from '../layout/HeaderLayout';
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";


//페이지들의 공통적인 부분을 처리하는 곳
//appjs는 indexjs의 부모인셈. 즉, index의 return이 들어옴
const App = ({ Component }) => {
    console.log(Component);
    return (
        <div>
            <ThemeProvider
                theme={{
                    palette: {
                        $darkcolor: "#000"
                        , $whitecolor: "#fff"
                        , $lightcolor: "#f4f4f4"
                        , $primarycolor: "#b2b2b2"
                        , $secondarycolor: "#666"
                        , $hovercolor: "#555"
                        , $emphasiscolor: "#f3885f"
                        , $successcolor: "#3ba961"
                        , $dangercolor: "#d23430"
                        , $warningcolor: "#f0ae4d"
                        , $infocolor: "#219bcf"
                    }
                }}
            >
                <DefaultLayout
                    $darkcolor="#000"
                    $whitecolor="#fff"
                    $lightcolor="#f4f4f4"
                    $primarycolor="#b2b2b2"
                    $secondarycolor="#666"
                    $hovercolor="#555"
                    $emphasiscolor="#f3885f"
                    $successcolor="#3ba961"
                    $dangercolor="#d23430"
                    $warningcolor="#f0ae4d"
                    $infocolor="#219bcf"
                />
                <Head>
                    <meta charSet="utf-8" />
                    <title>폴로딩고(POLODINGO)</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap" rel="stylesheet" />
                </Head>
                <HeaderLayout />
                <Component />
            </ThemeProvider>
        </div>
    )
}



const DefaultLayout = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Jost', sans-serif;
}

body {

  font-family: 'Nunito', sans-serif;
  font-size: 0.8rem;
  line-height: 1.6;
  background-color: #fff;
}

a {
  text-decoration: none;
  color: ${props => props.$darkcolor};

  &:hover {
    color:  ${props => props.$secondarycolor};
  }
}

ul {
  list-style: none;
}

.btn {
  display: inline-block;
  font-size: 0.8rem;
  padding: 12px;
  color: ${props => props.$whitecolor};
  background-color: ${props => props.$darkcolor};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: none;
  outline: none;

  &:hover {
    background-color: ${props => props.$primarycolor};
    color: ${props => props.$lightcolor};
  }
}

.loading {
  width: 300px;
  text-align: center;
  margin: auto;
}

.error {
  color:${props => props.$dangercolor};
  font-size: 1rem;
}

.success {
  color: ${props => props.$successcolor}
  font-size: 1rem;
}

.select {
  width: 40px;
  padding: 5px;
  outline: none;
  border-color: ${props => props.$primarycolor};
  cursor: pointer;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}`;



App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;