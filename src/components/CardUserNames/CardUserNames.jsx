import React from 'react'
import { Card } from 'antd'
import ListUsers from '../ListUsers'
import './CardUserNames.scss'

const CardUserNames = ({ findUser, filterSearch }) => {
  return (
    <div>
      <Card title="User names" bordered={false}>
        <ul className="list-users">
          {filterSearch.map((item) => (
            item.nombre &&
             <ListUsers key={ item.id } item={ item } findUser={ findUser }/>
            ))}

            { !filterSearch.length ?
              <p>
                Ups.. User doesn't exist
                </p>
              : ''
            }
        </ul>
      </Card>
    </div>
  )
}

export default CardUserNames
