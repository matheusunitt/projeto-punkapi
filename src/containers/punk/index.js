import React, { Component } from 'react';

import HttpService from '../../utils/HttpService';

import Loading from '../../components/loading';
import Header from '../../components/header';
import Button from '../../components/button';
import PunkItem from '../../components/punkItem';
import { CardAction } from '../../components/cards';

class Punk extends Component {
  state = {
    beers: [],
    isLoaded: true,
  }

  async getPunkList() {
    try {
      const data = await HttpService.get('beers');
      this.setState({ beers: data });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        ...this.state,
        isLoaded: false,
      });
    }
  }

  handleVerDetalhes(id) {
    this.props.history.push(`/detalhes/${id}`);
  }

  componentDidMount() {
    this.getPunkList();
  }

  render() {
    return (
      <>
        {this.state.isLoaded ? (<Loading />) : (
          <>
            <Header />
            <div className="wm-page">
              <div className="wm-container">
                {this.state.beers && this.state.beers.map((beer) => (
                  <PunkItem key={beer.id} name={beer.name} image={beer.image_url} tagline={beer.tagline} first_brewed={beer.first_brewed} description
                    ={beer.description} ingredients={beer.ingredients}>
                    <CardAction>
                      <Button variant="primary" onClick={() => this.handleVerDetalhes(beer.id)}>Detalhes do Produto</Button>
                    </CardAction>
                  </PunkItem>
                ))}
              </div>
            </div>
          </>
        )}
      </>
    )
  }
}

export default Punk;