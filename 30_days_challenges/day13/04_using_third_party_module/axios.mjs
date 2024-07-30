import axios from "axios";

const getData = async () => {
    const res = await axios.get("https://api.github.com/users/abdurrahmanrahat");
    console.log(res);
}
getData();