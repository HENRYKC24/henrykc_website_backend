import React from 'react'

class PaginationLi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <>
        <li onClick={() => {
          this.props.fun(this.props.page)
        }} className="page-item"><a className="page-link" href="#">{this.props.page}</a></li>
      </>
    )
  }

}

export default PaginationLi;