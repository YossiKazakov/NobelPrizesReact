export default function DataIntro({ changeHandler, countires, startYear, endYear }) {
  return (
    <div >
      <div className="item intro">
        <div className="data-header">
          <strong>DiscoSver Laureates</strong>
        </div>
      </div>
      <div className="item intro filters">
        <div className="item control-container">
          <div className="content">
            <div >
              <div className="item control">
                <div>From year</div>
              </div>
              <input type="number" className="item control input" value={startYear} id="start-year" step="1" min="1900" max="2022" onChange={changeHandler} />
            </div>
          </div>
        </div>
        <div className="item control-container">
          <div className="content">
            <div className="item control">
              <div>To year</div>
            </div>
            <div>
              <input type="number" className="item control input" value={endYear} id="end-year" step="1" min={startYear} max="2022" onChange={changeHandler}>
              </input>
            </div>
          </div>
        </div>
        <div className="item control-container">
          <div className="content">
            <div >
              <div className="item control">
                <div>Order</div>
              </div>
              <select id="data-sort" className="item control input" onChange={changeHandler}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </div>
        </div>
        <div className="item control-container">
          <div className="content">
            <div >
              <div className="item control">
                <div>Category</div>
              </div>
              <select id="category-filter" className="item control input" onChange={changeHandler}>
                <option>All</option>
                <option>Chemistry</option>
                <option>Peace</option>
                <option>Literature</option>
                <option>Physics</option>
                <option>Physiology or Medicine</option>
                <option>Economic Sciences</option>
              </select>
            </div>
          </div>
        </div>
        <div className="item control-container">
          <div className="content">
            <div >
              <div className="item control">
                <div>Country</div>
              </div>
              <select id="country-filter" className="item control input" onChange={changeHandler}>
                <option>All</option>
                {countires.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
