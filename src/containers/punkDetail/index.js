import React, { Component } from 'react'
import Header from '../../components/header'
import PunkItem from '../../components/punkItem'
import { CardAction } from '../../components/cards'
import Loading from '../../components/loading'
import Button from '../../components/button'
import HttpService from '../../utils/HttpService'

class PunkDetail extends Component {
  state = {
    beer: {},
    isLoaded: true,
  }

  handleRetornar() {
    this.props.history.push('/')
  }

  async getBeerData() {
    try {
      const data = await HttpService.get(`beers/${this.props.match.params.beerId}`);
      this.setState({ beer: data });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({
        ...this.state,
        isLoaded: false
      })
    }
  }

  componentDidMount() {
    this.getBeerData();
  }

  render() {
    const { beer: { name, tagline, image_url, first_brewed, description, ingredients }, isLoaded } = this.state;
    return (
      <>
        {this.state.isLoaded ? (
          <Loading />
        ) : (
            <>
              <Header />
              <div className="wm-page">
                <div className="wm-container">
                  <PunkItem isDetailsPage={true}
                    name={name}
                    tagline={tagline}
                    image={image_url}
                    first_brewed={first_brewed}
                    description={description}
                    ingredients={ingredients}
                  >
                    <CardAction>
                      <Button onClick={() => this.handleRetornar()}>Voltar</Button>
                    </CardAction>
                  </PunkItem>
                </div>
              </div>
            </>
          )
        }
      </>
    );
  }
}

export default PunkDetail