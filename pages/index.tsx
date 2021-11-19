import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Column, Grid, GridCol, Row } from 'shared/ui';
import React, { useState } from 'react';
import { Song } from 'shared/components';
import classnames from 'classnames';

function ListItem({ type }: { type?: string }) {
  return (
    <div>
      <Row className="hover:bg-black border-b-2 border-b-black hover:text-white group p-4 space-x-2">
        <Column className="flex-2">
          <p style={{ color: 'lightgrey' }}>19.11.2019</p>
          <p
            style={{
              fontWeight: 900,
              lineHeight: 1.2,
              fontFamily: 'helvetica',
              fontSize: '14px',
            }}
          >
            Ranking filmów Wesa Andersona od najgorszego do najlepszego
          </p>
          <div>
            <i
              style={{ fontSize: type === 'podcast' ? '20px' : '30px' }}
              className={classnames('mt-1', {
                'fas fa-play p-1 border-2 border-black group-hover:border-white relative':
                  type === 'podcast',
                'fas fa-long-arrow-alt-right ': type !== 'podcast',
              })}
            />
          </div>
        </Column>
        <div
          style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
          className="flex-1 border-4 border-black group-hover:border-white relative"
        >
          {' '}
          <div
            style={{ bottom: -10, right: -10, boxShadow: '2px 2px 0 #000' }}
            className=" text-white absolute bg-primary-blue"
          >
            <p
              className="uppercase px-1.5 py-px border-4 border-black group-hover:border-white"
              style={{
                fontWeight: 900,
                lineHeight: 1.2,
                fontFamily: 'Montserrat',
                fontSize: '12px',
              }}
            >
              Kino
            </p>
          </div>{' '}
        </div>
      </Row>
    </div>
  );
}

const Home: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState(19);

  const days = Array.from({ length: 31 }).map((_, index) => (
    <button
      className={classnames('px-2 py-1', {
        'bg-primary-blue text-white': selectedDay === index,
      })}
      onClick={() => setSelectedDay(index)}
    >
      <p>{index + 1}</p>
    </button>
  ));

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Song />
        <Grid gridGap={8}>
          <GridCol colSpan={7}>
            <div className="bg-red-700 w-full h-full"></div>
          </GridCol>
          <GridCol colSpan={5}>
            <div className={styles.historical}>
              <div className="flex items-center justify-between p-2">
                <p
                  style={{ fontSize: '32px', fontFamily: 'helvetica', fontWeight: 900 }}
                  className=" font-extrabold "
                >
                  19 Listopada
                </p>
                <i style={{ fontSize: '30px' }} className="fas fa-long-arrow-alt-right"></i>
              </div>
              <Row className="horizontal-scroll  w-full overflow-auto justify-between items-center px-4 mb-4">
                {days}
              </Row>
              <div className="bg-primary-blue text-white">
                <p style={{ fontSize: '20px' }} className="p-4">
                  Co wydarzyło się tego dnia:
                </p>
              </div>
              <div style={{ height: '400px' }} className="overflow-auto pb-10">
                <ListItem />
                <ListItem type={'podcast'} />
                <ListItem />
                <ListItem />
                <ListItem />
              </div>
            </div>
            <Link href={'/kalendarium'}>
              <button
                style={{
                  fontSize: '14px',
                  boxShadow: '2px 2px 0 #000',
                }}
                className="w-full mt-6 border-4 border-black"
              >
                <p
                  style={{ fontFamily: 'Montserrat', fontWeight: 900 }}
                  className="text-primary-blue py-1 uppercase "
                >
                  Zobacz kalendarium
                </p>
              </button>
            </Link>
          </GridCol>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
