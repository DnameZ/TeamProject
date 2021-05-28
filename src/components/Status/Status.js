import React from 'react';
import {
  FilterOption,
  Status as SingleStatus,
  Statuses,
  InfoIcon,
  Text,
  InfoMsg,
  Figure,
} from './StatusStyle';
import {
  Label,
  CheckboxOptionLabel,
  InputCheckbox,
} from '../../lib/styles/generalStyles';
import InfoIconImg from '../../assets/images/info-icon.png';

const Status = () => {
  const statuses = ['Svi', 'Nadolazeći', 'Završeni'];

  return (
    <>
      <FilterOption>
        <Label>Status događaja</Label>
        <Statuses>
          {statuses.map((status, index) => (
            <SingleStatus key={index}>
              <InputCheckbox
                type="checkbox"
                value={status}
                id={index}
                name="status"></InputCheckbox>
              <CheckboxOptionLabel htmlFor={index}>
                {status}
              </CheckboxOptionLabel>
              {index === 2 ? (
                <Figure>
                  <InfoIcon src={InfoIconImg} />
                </Figure>
              ) : null}
            </SingleStatus>
          ))}
        </Statuses>
        <InfoMsg>
          <Figure>
            <InfoIcon src={InfoIconImg} />
          </Figure>
          <Text>Završene događaje možete ocijeniti</Text>
        </InfoMsg>
      </FilterOption>
    </>
  );
};

export default Status;
