import { useEffect, useState } from 'react';
import './App.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import andrew_photo from './assets/andrew.png';
import { client } from './sanityClient.ts';
import WebsiteRoutes from './WebsiteRoutes.tsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

function App() {
  const [blogPosts, setBlogPosts] = useState(false);

  useEffect(() => {
    client
      .fetch('*[_type == "blogPost"]{...}')
      .then((data) => {
        setBlogPosts(data);
      })
      .catch(console.error);
  }, []);

  return (<MantineProvider>
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>About Andrew</title>
          <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href={andrew_photo} type="image/x-icon"></link>
        </Helmet>
        <WebsiteRoutes blogPosts={blogPosts} />
        <Notifications autoClose={false} />
      </HelmetProvider>
    </div>
  </MantineProvider>
  );
}

export default App;