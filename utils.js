// export function makeGamesStats(id, year, gameData) {
//   const stats = { year };
//   if (!gameData) { return stats };
//   const raw = gameData.games.filter(game => {
//     return game.ateamid === id || game.hteamid === id;
//   })
//   stats.played = raw.length;
//   stats.won = raw.reduce((curr, next) => next.winnerteamid === id ? curr + 1 : curr + 0, 0);
//   stats.lost = stats.played - stats.won;
//   return stats;
// }

// // Our function to sort the data based on the user selection
// // See the HTML select element for the sort - there are two possible values, which in this function are the "key"
// // 1. "a-z", 2. "z-a"
// export function sortTeamData(teams, key) {

//   // initial load, so bypass the sorting logic enitrely
//   if (key === "-") { return teams; }

//   const sorted = teams.sort((a, b) => {
//     if (a.name > b.name) {
//       return key === "a-z" ? 1 : -1;
//     }
//     if (a.name < b.name) {
//       return key === "a-z" ? -1 : 1;
//     }
//     return 0;
//   })
//   return sorted;
// }

// // Our function to filter the data based on the user selection
// // See the HTML select element for the filter - there are three possible values, which in this function are the "key"
// // 1. "-", 2. "pre-1980", 3. "post-1980"
// export function filterTeamData(teams, key) {
//   const filtered = teams.filter((team) => {
//     if (key === "-") {
//       return team;
//     } else {
//       return key === "pre-1980" ? team.debut < 1980 : team.debut > 1980;
//     }
//   });
//   return filtered;
// }
export function filterDataCategory(data, key) {
  const filtered = data.filter((laureate) => {
    if (key === "All") {
      return laureate
    } else {
      return laureate.category === key
    }
  })
  return filtered
}

export function sortDataYear(data, key) {
  const sorted = data.sort((a, b) => {
    if (a.year > b.year) {
      return key === "ascending" ? -1 : 1
    }
    if (a.year < b.year) {
      return key === "ascending" ? 1 : -1
    }
  })
  return sorted
}

export function filterDataCountry(data, key) {
  const filtered = data.filter((laureate) => {
    if (key === "All") {
      return laureate
    } else {
      return laureate.country === key
    }
  })
  return filtered
}

export function filterDataStartYear(data, key) {
  const filtered = data.filter((laureate) => {
    return laureate.year >= key
  })
  return filtered
}

export function filterDataEndYear(data, key) {
  const filtered = data.filter((laureate) => {
    return laureate.year <= key
  })
  return filtered
}