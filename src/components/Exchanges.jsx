import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

// Note: To get access to an endpoint that receives exchange data, you need a premium plan
// I'll design this component later

const Exchanges = () => {
  return (
    <div>Exchanges</div>
  )
}

export default Exchanges;