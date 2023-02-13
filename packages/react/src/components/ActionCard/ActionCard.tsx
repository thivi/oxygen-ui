/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com). All Rights Reserved.
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {FC, ReactElement, ReactNode} from 'react';
import Button from '../Button';
import Typography from '../Typography';
import {WithWrapperProps} from '../../models';

export interface ActionCardProps {
  actionText: string;
  description: string;
  image: ReactNode;
  onActionClick: () => void;
  title: string;
}

const COMPONENT_NAME: string = 'ActionCard';

const ActionCard: FC<ActionCardProps> & WithWrapperProps = (props: ActionCardProps): ReactElement => {
  const {image, title, description, actionText, onActionClick} = props;

  return (
    <Card
      sx={{
        borderRadius: 'borderRadius.lg',
        boxShadow: 'dropShadow.default',
      }}
    >
      <CardContent>
        {image}
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="body1" color="secondary.main">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onActionClick} variant="contained">
          {actionText}
        </Button>
      </CardActions>
    </Card>
  );
};

ActionCard.displayName = COMPONENT_NAME;
ActionCard.muiName = COMPONENT_NAME;
ActionCard.defaultProps = {};

export default ActionCard;
