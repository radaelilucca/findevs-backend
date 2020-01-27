import Dev from '../models/Devs'
import jwt from 'jsonwebtoken'

class SessionController {
  async store(req, res){

    const {github_user, password} = req.body


    const dev = await Dev.findOne({github_user})
    

    //check github user
    if (!dev) {
      return res.status(404).json({Error: "Github User Not Found"})
    }

    //check password



    return res.json({dev})
  }
}

export default new SessionController()