import React from 'react'

import Spinner from '../Spinner/spinner.component'

const WithSpinner = WrappedComponent =>  ({isLoading,...otherProps}) => {
    return isLoading ? (
        <Spinner></Spinner>
    ):(<WrappedComponent {...otherProps}></WrappedComponent>)
}



export default WithSpinner