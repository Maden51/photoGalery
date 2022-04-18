import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'reactstrap';

function ButtonsCat({ selectHandler }) {
    const categories = ['1', '2', '3', '4'];
  return (
    <div className="btn-box">
        <ButtonGroup>
            {categories.map((item, index) => (
                <Button
                    color="primary"
                    name={item}
                    type="button"
                    onClick={selectHandler}
                    key={index}
                >
                    {item}
                </Button>
            ))}
            
        </ButtonGroup>
    </div>
  )
}

ButtonsCat.propTypes = {
    selectHandler: PropTypes.func.isRequired
}

export default ButtonsCat
