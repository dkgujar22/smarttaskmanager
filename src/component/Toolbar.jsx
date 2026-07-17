import React from 'react'

const Toolbar = () => {
  return (
    <div className="card shadow-sm mb-4 border-0">
      <div className="card-body d-flex flex-wrap align-items-center justify-content-between gap-3 bg-white rounded">
        
       
        <div className="d-flex align-items-center gap-2">
          <label className="form-label mb-0 text-secondary small fw-bold text-nowrap">
            <i className="bi bi-type me-1"></i> Font
          </label>
          <select id="fontSelector" className="form-select form-select-sm" style={{minWidth: "130px"}}>
            <option value="font-sans">Sans-Serif</option>
            <option value="font-serif">Serif</option>
            <option value="font-mono">Monospace</option>
          </select>
        </div>

        
        <div className="d-flex align-items-center gap-2">
          <span className="text-secondary small fw-bold text-nowrap">
            <i className="bi bi-grid-3x3-gap me-1"></i> Layout
          </span>
          <div className="btn-group btn-group-sm" role="group" aria-label="Layout choices">
            <input type="radio" className="btn-check" name="layoutRadio" id="layoutGrid" checked/>
            <label className="btn btn-outline-primary" for="layoutGrid">
              <i className="bi bi-grid-fill"></i> Grid
            </label>
            
            <input type="radio" className="btn-check" name="layoutRadio" id="layoutList"/>
            <label className="btn btn-outline-primary" for="layoutList">
              <i className="bi bi-view-list"></i> List
            </label>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span className="text-secondary small fw-bold text-nowrap">
            <i className="bi bi-brightness-high me-1"></i> Mode
          </span>
          <button id="themeToggle" className="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1">
            <i id="themeIcon" className="bi bi-moon-fill"></i>
            <span id="themeText">Dark</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Toolbar
