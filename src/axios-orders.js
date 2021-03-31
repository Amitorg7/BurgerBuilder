import axios from "axios";

const instance= axios.create({
    baseURL:'https://my-burger-390ba.firebaseio.com/'
})

export default instance;