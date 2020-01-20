import Dev from '../models/Devs'
import axios from 'axios'

import parseStingAsArray from '../utils/parseStingAsArray'

import {findConnections, sendMessage} from '../websocket'

class DevController {

  async store(req, res){

    const {github_user, techs, latitude, longitude} = req.body;

    let dev = await Dev.findOne({github_user})

    if(!dev){

      const response = await axios.get(`https://api.github.com/users/${github_user}`)

    const {name = login, bio, avatar_url} = response.data

    const techsArray = await parseStingAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
    
    dev = await Dev.create({
      github_user,
      name,
      bio,
      avatar_url,
      techs: techsArray,
      location
    })

    const sendSocketMessageTo = findConnections(
      {latitude, longitude},
      techsArray,
      )

      sendMessage(sendSocketMessageTo, 'new-dev', dev)     
    }

    return res.json(dev)
  }

  async index(req, res){

    const devs = await Dev.find()
    return res.json(devs)
  }
}

export default new DevController