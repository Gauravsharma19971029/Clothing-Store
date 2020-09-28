import React from 'react'
import MenuItem from '../Menu-Item/menu-item.component'
import {selectDirectorySection} from '../../redux/directory/directoty.selector'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import './directory.styles.scss'

const Directory = ({sections}) => {
   
    
        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionProps }) =>
                        (
                            <MenuItem key={id} {...otherSectionProps}></MenuItem>
                        ))
                }
            </div>
        )

}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory)