import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import GradientsList from '../components/GradientsList'
import Header from '../components/Header'
import Footer from '../components/Footer'

class App extends Component {
  state = {
    gradients: []
  }

  componentDidMount = () => {
    this.setState({...initialState})
  }
  
  render() {
      return (
        <div className="App">
          <Container>
            <Header />
            <GradientsList
              gradients={this.state.gradients}
            />
            <Footer />
          </Container>
        </div>
    )
  }
}

const initialState = {
  gradients: [
    ['FCE38A', 'F38181'],
    ['F54EA2', 'FF7676'],
    ['17EAD9', '6078EA'],
    ['622774', 'C53364'],
    ['7117EA', 'EA6060'],
    ['42E695', '3BB2B8'],
    ['F02FC2', '6094EA'],
    ['65799B', '5E2563'],
    ['184E68', '57CA85'],
    ['5B247A', '1BCEDF'],
    ['74276C', 'C53364', 'FD8263'],
    ['274B74', '8233C5', 'E963FD'],
    ['879AF2', 'D3208B', 'FDA000'],
    ['8929AD', '436AAC', '43B7B8'],
    ['276174', '33C58E', '63FD88'],
    ['574BCD', '2999AD', '41E975'],
    ['363553', '903775', 'E8458B'],
    ['5C2774', '335CC5', '637FFD'],
    ['EA5A6F', 'DE791E', 'FCCF3A'],
    ['F17B41', 'E05BA2', 'CD4BC9']
  ]
}

export default App
