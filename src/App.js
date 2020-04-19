import React from 'react';
//Consigo fazer o código abaixo por causa do arquivo index.js
//Que se encontra no Components

import {Cards, Chart, CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './API'
import {Typography} from '@material-ui/core'

import coronaImage from './images/image.png'
import StayAtHome from  './images/Stay.png'
import GitHubIcon from './images/github-icon.png'
import LinkedinIcon from './images/linkedin-icon.png'





class App extends React.Component {
  state={
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({data:fetchedData})

  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);

    this.setState({data:fetchedData, country:country})

  }



  render(){
      return (
        <>
          <img className={styles.stay}src={StayAtHome} width={5} height={5} alt="Em Casa Instagram"/>
          <div className={styles.container}>
            <img className={styles.image} src={coronaImage} alt="COVID-19" />
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Cards data={this.state.data} /> 
            <Chart data={this.state.data} country={this.state.country} /> 
            <div className={styles.footer}>
              <div className={styles.icons}>
                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/Alyssonprr7"}><img alt="Icone Github"  className={styles.github} src= {GitHubIcon} /></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/alysson-rocha-0716a9199/"}><img alt="Ícone Linkedin" className={styles.linkedin}src ={LinkedinIcon} /> </a>                
              </div>            
            </div>
            <Typography>©ALYSSON ROCHA</Typography>
          </div>
        </>
      );
    }
}

export default App;
