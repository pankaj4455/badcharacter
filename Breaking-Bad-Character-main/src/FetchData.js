const API_URL = "https://www.breakingbadapi.com/api/characters";

async function FetchData() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}


export default FetchData;
