import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import styled from 'styled-components';

const FancyH1 = styled.h1`
  color: purple;
  text-transform: uppercase;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <FancyH1>Hi from the second page</FancyH1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
