import axios from 'axios';

/**
 * 배열을 n개씩 묶어 2차원 배열로 반환
 */
export const groupByRows = (array, number) => {
  return (array ?? []).reduce((acc, cur, idx) => {
    if (idx % number === 0) acc.push([cur]);
    else acc[acc.length - 1].push(cur);
    return acc;
  }, []);
};

/**
 * public/data 폴더의 JSON 파일을 fetch
 */
export const axiosData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const axiosGet = async(path) => {
  const url = `http://localhost:9000${path}`; 
  const res = await axios.get(url);
  return res.data;
};

export const axiosPost = async(path, data) => {
  const url = `http://localhost:9000${path}`; 
  const res = await axios.post(url, data);
  return res.data;
};