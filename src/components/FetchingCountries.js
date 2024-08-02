import axios from "axios";

const FetchCountries = async () => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v2/all?fields=name,region,flag`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }

  //   console.log(response.data);
};

export default FetchCountries;
