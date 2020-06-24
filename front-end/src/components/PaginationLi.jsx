import React from 'react'

class PaginationLi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  
  render() {
    const {btnNo:b, page:p} = this.props, bool = b === p;
    return(
      <>
        <li className={`page-item ` + (bool ? 'disabled active active-btn' : '')} onClick={() => {
          this.props.fun(p)
        }}>
          <button style={{backgroundColor: (bool ? '#008' : ''),color: (bool ? '#fff' : '')}} className="page-link border1">{p}</button>
        </li>
      </>
    )
  }

}

export default PaginationLi;