import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID xRLN82NSZpiJ-INhrqmJwluD6IbGa0_Pez11QtvzMBs",
      },
})
