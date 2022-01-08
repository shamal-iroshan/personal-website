import {SAVE_CONFIG} from "./constants";

const initialState = {
  config: {
    "id": 1,
    "attributes": {
      "website": "www.shamaliroshan.com",
      "views": "1",
      "homeImage": "test",
      "linkedInUrl": "https://www.linkedin.com/in/shamal-iroshan-023485156/",
      "instagramUrl": "https://www.instagram.com/shamal_iroshan/",
      "githubUrl": "https://github.com/shamal-iroshan",
      "stackOverflowUrl": "https://stackoverflow.com/users/12289913/shamal-iroshan",
      "twitterUrl": "https://twitter.com/shamaliroshan9",
      "whatsAppUrl": "https://wa.me/94752736788",
      "aboutTitle": "Front End And Back End Developer",
      "aboutDescription": "I am shamal iroshan, I live in Colombo Sri Lanka. I’m an undergraduate student of IJSE and I'm currently working as a Software Engineer at F-code Labs PVT LTD. I’m here to help you with any kind of IT-related problem. feel free to leave a message to me.",
      "cvUrl": "https://www.shamaliroshan.com/assets/documents/shamal-iroshan.pdf",
      "address": "191/A/3, Imbulahena, Gonapola, Srilanka. 12410",
      "telephone": "+94 75 2736 788",
      "email": "hello@shamaliroshan.com",
      "availability": "8am-5pm GMT",
      "createdAt": "2022-01-07T16:33:59.641Z",
      "updatedAt": "2022-01-07T12:55:43.751Z",
      "publishedAt": "2022-01-07T11:40:21.673Z"
    }
  }
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CONFIG:
      return {
        ...state,
        config: action.payload
      }
    default:
      return state;
  }
}

export default homeReducer;