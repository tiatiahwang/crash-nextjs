import Head from 'next/head';

export default function Seo({ title }) {
  const fullTitle = `${title} | NextJS`;
  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
}
