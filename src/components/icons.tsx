export function Arrow({diagonal=false}:{diagonal?:boolean}){return <span aria-hidden="true">{diagonal?"↗":"→"}</span>}
export function MenuIcon({open}:{open:boolean}){return <span className="menu-icon" aria-hidden="true"><i className={open?"open":""}/><i className={open?"open":""}/></span>}
