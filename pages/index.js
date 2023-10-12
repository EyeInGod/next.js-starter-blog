import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I have 8 years of experience in web development about the field of Health Care, Financial, Real Estate and Education. <br/>
          My technical skills are mainly relied on frontend development, and I am working as a full stack web developer spending 60% of time working on front-end and 40% on backend development.<br/>
          I always develop all web products according to Agile, Scrum Methodology, and my passions are focused on testing a lot, of course development to ensure the high quality.<br/>
          Strong background in project management and customer relations. Perceived as versatile, unconventional and committed, I am looking for new and interesting programming challenges.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://my-react-portfolia-site.onrender.com/">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href="/posts/first-post">Go to Post Page</Link>
    </Layout>
  );
}