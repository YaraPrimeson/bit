import axios from "./axios";

export default {
    async getAllPrices() {
        const {data} = await axios.get("prices/all");
        return data;
    },

};
