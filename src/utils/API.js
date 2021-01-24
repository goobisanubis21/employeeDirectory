import axios from "axios";

// API to get a list of 50 random users or in this case employees

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUser: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
};