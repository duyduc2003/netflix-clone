import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useRecoilValue } from 'recoil';

import { MainLayout } from '~/components/common/layouts';
import { Banner, Row, RowProps } from '~/components/modules/browse';
import { Movie } from '~/interfaces/Movie';
import {
  getActionMovies,
  getComedyMovies,
  getDocumentaries,
  getHorrorMovies,
  getNetflixOriginals,
  getTopRated,
  getTrending,
} from '~/services/function';
import { modalVisibleState } from '~/store/modalState';
import ModalDetailMovie from '~/components/modules/browse/ModalDetailMovie';

interface BrowseProps {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  documentaries: Movie[];
}

function Browse(props: BrowseProps) {
  const { netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, documentaries } = props;
  const isShowModal = useRecoilValue(modalVisibleState);

  const rows: RowProps[] = React.useMemo(
    () => [
      { title: 'Trending Now', movies: trendingNow },
      { title: 'Top Rated', movies: topRated },
      { title: 'Action Movies', movies: actionMovies },
      { title: 'Comedy Movies', movies: comedyMovies },
      { title: 'Horror Movies', movies: horrorMovies },
      { title: 'Documentaries', movies: documentaries },
    ],
    [actionMovies, comedyMovies, documentaries, horrorMovies, topRated, trendingNow]
  );

  return (
    <>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <main className="relative bg-chinese_black">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24 md:px-[60px] px-[4%] bg-chinese_black">
          {rows.map((row, i) => (
            <Row key={`${row.title}-${i}`} title={row.title} movies={row.movies} />
          ))}
        </section>
      </main>
      {isShowModal && <ModalDetailMovie />}
    </>
  );
}

Browse.Layout = MainLayout;

export const getServerSideProps: GetServerSideProps<BrowseProps> = async () => {
  const [netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, documentaries] =
    await Promise.all([
      getNetflixOriginals(),
      getTrending(),
      getTopRated(),
      getActionMovies(),
      getComedyMovies(),
      getHorrorMovies(),
      getDocumentaries(),
    ]);
  return {
    props: {
      netflixOriginals: netflixOriginals || [],
      trendingNow: trendingNow || [],
      topRated: topRated || [],
      actionMovies: actionMovies || [],
      comedyMovies: comedyMovies || [],
      horrorMovies: horrorMovies || [],
      documentaries: documentaries || [],
    },
  };
};

export default Browse;
