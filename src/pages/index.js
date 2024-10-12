import Layout from '@theme/Layout';
import React from 'react';

import Home from '../components/Home';

function HomePage() {
  return (
    <Layout
      title="DocSearch: Search made for documentation"
      description="The easiest way to add search to your documentation - Powered by Spader"
    >
      <Home />
    </Layout>
  );
}

export default HomePage;
