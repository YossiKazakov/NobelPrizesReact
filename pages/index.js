
import { useState } from "react";
import DataIntro from "../components/data-intro";
import Message from "../components/message";
import LaureatesList from "../components/laureates-list";
import { useLaureatesData, cleanTheData } from "../hooks/data";
import {
  filterDataCategory, sortDataYear, filterDataCountry,
  filterDataStartYear, filterDataEndYear
} from "../utils";

export default function IndexPage() {

  const { data, isLoading, isError } = useLaureatesData();

  const [sortKey, setSortKey] = useState("ascending");
  const [categoryFilterKey, setCategoryFilterKey] = useState("All");
  const [countryFilterKey, setCountryFilterKey] = useState("All");
  const [startYearFilterKey, setStartYearFilterKey] = useState(1901)
  const [endYearFilterKey, setEndYearFilterKey] = useState(2022)

  function getDataQueryKeys(event) {
    if (event.target.id === "data-sort") {
      setSortKey(event.target.value);
    }
    if (event.target.id === "category-filter") {
      setCategoryFilterKey(event.target.value);
    }
    if (event.target.id === "country-filter") {
      setCountryFilterKey(event.target.value);
    }
    if (event.target.id === "start-year") {
      setStartYearFilterKey(event.target.value);
    }
    if (event.target.id === "end-year") {
      setEndYearFilterKey(event.target.value);
    }
  }

  if (isLoading) return <Message content="Loading..." />
  if (isError) return <Message content="An error occured..." />
  if (!data) return <Message content="No data could be loaded..." />

  const cleanData = cleanTheData(data)
  const countrriesInData = new Set()
  cleanData.forEach(l => {
    countrriesInData.add(l.country)
  })

  const dataToRender = filterDataStartYear(filterDataEndYear(filterDataCountry(filterDataCategory(sortDataYear(
    cleanData, sortKey), categoryFilterKey), countryFilterKey), endYearFilterKey), startYearFilterKey)

  // const teams = filterTeamData(sortTeamData(data.teams, sortKey), filterKey);
  // const dataToRender = filterDataCountry(
  //   filterDataCategory(
  //     sortDataYear(cleanData, sortKey),
  //     categoryFilterKey), countryFilterKey)

  return (
    <>
      <DataIntro changeHandler={getDataQueryKeys} countires={[...countrriesInData]} startYear={startYearFilterKey} endYear={endYearFilterKey} />
      <LaureatesList laureates={dataToRender} />
    </>
  )
}
