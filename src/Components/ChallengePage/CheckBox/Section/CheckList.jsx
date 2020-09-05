import React, { useState } from 'react'
import styled from 'styled-components';
import { Done } from '@styled-icons/material/Done'
import { ChangeHistory } from '@styled-icons/material/ChangeHistory'
import { Close } from '@styled-icons/material/Close'

const Position = styled.div`
  position: absolute;
  bottom: 50px; left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`

const ListBlock = styled.div`
  width: 150px;
  background: #fff;
  font-size: 0.85rem;
  box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
  line-height: 1.5;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 48%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background: #fff;
    transform: rotate(45deg);
  }
`

const List = styled.li`
  width: 33.3333%;
  border-right: 1px solid #f2f2f2;
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: #f2f2f2;
  }
`

const Icon = styled.div`
  width: 25px;
  height: 25px;
  background:  ${props => props.color};
  border-radius: 3px;
  padding: 0.1rem;
  margin: 0 auto 0.2rem;
  svg {
    width: 20px;
    fill: #fff;
  }
`

const checkCategory = [
  { value: 0, icon: <Done />, label: 'good', color: '#4d55ff' },
  { value: 1, icon: <ChangeHistory />, label: 'soso', color: '#70a1ff'},
  { value: 2, icon: <Close />, label: 'bad', color: '#eb4d4b'},
]

function CheckList({ day, onCheckState }) {
  const [ localVisible, setLocalVisible ] = useState(false);

  const onClickCheck = (label) => {
    onCheckState(label, day)
  }

  return (
    <Position>
      <ListBlock>
        <ul style={{ display: 'flex'}}>
          {checkCategory.map(v => 
            <List key={v.value} onClick={() => onClickCheck(v.label)}>
              <Icon color={v.color}>{v.icon}</Icon>
              <p>{v.label}</p>
            </List>)}
        </ul>
      </ListBlock>
    </Position>
  )
}

export default CheckList
