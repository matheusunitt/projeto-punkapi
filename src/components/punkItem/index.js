import React from 'react'
import { Card, CardImage, CardContent } from '../cards'
import './punkItem.css'

const PunkItem = ({ isDetailsPage, name, image, tagline, first_brewed, ingredients, description, children }) => {
  return (
    <div className="punkContainer">
      <Card>
        <CardImage>
          <img src={image}></img>
        </CardImage>
        <CardContent>
          <p><b>Nome:</b> {name}</p>

          {isDetailsPage ? (
            <>
              <p><b>Ingredientes:</b> {ingredients}</p>
              <p><b>Fabricação:</b> {first_brewed}</p>
              <p><b>Descrição:</b> {description}</p>
            </>) : null}

          <p><b>Slogan:</b> {tagline}</p>
        </CardContent>
        {children}
      </Card>
    </div>
  )
}

export default PunkItem;