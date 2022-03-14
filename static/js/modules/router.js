import { renderData } from './renderData.js'
import { getData } from './getData.js'
import './vendor/routie.min.js'


export function handleRoutes() {
    routie(
      {
      '': () => {
          getData()
          .then(data => {
            renderData(data)
          })
      }
    })
  }