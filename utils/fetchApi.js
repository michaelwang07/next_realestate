import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '9e85d214c4msha092aedffa4d1b7p114549jsna07475d8f718',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });

  return data;
}