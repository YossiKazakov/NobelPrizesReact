import useSWR from "swr";
import { API_PREFIX } from "../config";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useLaureatesData() {
  const { data, error } = useSWR(API_PREFIX, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export function cleanTheData(data) {
  const cleanData = [];
  data.laureates.forEach((element) => {
    try {
      cleanData.push({
        country: element.birth.place.countryNow.en,
        name: element.fullName.en,
        category: element.nobelPrizes[0].category.en,
        year: element.nobelPrizes[0].awardYear,
        desc: element.nobelPrizes[0].motivation.en,
      });
    }
    catch (err) { }
  });
  return cleanData;
}




