/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// Import components
import  Header  from "../../components/Header";

export default function HomePage() {
  return (
    <div>
      <Header title="Avi Tannenbaum's Portfolio"></Header>
    </div>
  );
}
