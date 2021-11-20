import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Column, Grid, GridCol, Row } from 'shared/ui';
import React, { useState } from 'react';
import { ArticleListItem, Song, TagLabel } from 'shared/components';
// @ts-ignore
import classnames from 'classnames';

const Home: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState(19);

  const days = Array.from({ length: 31 }).map((_, index) => (
    <button
      key={'selected-day-' + index}
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
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
          <Grid gridGap={8}>
            <GridCol colSpan={7}>
              <div className="bg-red-100 w-full h-full"></div>
            </GridCol>
            <GridCol colSpan={5}>
              <div className={styles.historical}>
                <div className="flex items-center justify-between p-2">
                  <p
                    style={{ fontSize: '32px', fontFamily: 'helvetica', fontWeight: 900 }}
                    className=" font-extrabold "
                  >
                    {selectedDay} Listopada
                  </p>
                  <Link href={'/kalendarium'}>
                    <i
                      style={{ fontSize: '30px' }}
                      className="cursor-pointer fas fa-long-arrow-alt-right"
                    />
                  </Link>
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
                  <ArticleListItem />
                  <ArticleListItem type={'podcast'} />
                  <ArticleListItem />
                  <ArticleListItem />
                  <ArticleListItem />
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
        </div>
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

function Mobile() {
  return (
    <Column>
      <Row>
        <Column>
          <h3
            className=" uppercase "
            style={{ color: 'text-primary-blue', fontSize: '40px', fontWeight: 900 }}
          >
            Kalendarium Newonce
          </h3>
          <h3
            // className=" uppercase "trzeba zmienic klasę- nie uppercase
            style={{ fontSize: '48px', color: 'black', fontWeight: 900 }}
          >
            19 Listopada
          </h3>
        </Column>
        <div>
          <i
            style={{ fontSize: '20px' }}
            className={classnames('mt-1', {
              'fas fa-play p-1 border-2 border-black group-hover:border-white relative':
                'fas fa-long-arrow-alt-right ',
            })}
          />
        </div>
      </Row>
      <button
        style={{
          fontSize: '14px',
          boxShadow: '2px 2px 0 #000',
        }}
        className="w-full mt-6 border-4 border-black"
      >
        <p
          style={{ fontFamily: 'Montserrat', fontWeight: 900 }}
          //   kolor- whote, background color- blue
          className="py-1 uppercase "
        >
          Sprawdź o czym mówiliśmy tego dnia
        </p>
      </button>
      <Row>
        <div
          style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
          className="flex-1 border-4 border-black group-hover:border-white relative"
        ></div>
        <div
          style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
          className="flex-1 border-4 border-black group-hover:border-white relative"
        ></div>
        <div
          style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
          className="flex-1 border-4 border-black group-hover:border-white relative"
        ></div>
        <div
          style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
          className="flex-1 border-4 border-black group-hover:border-white relative"
        ></div>
      </Row>
    </Column>
  );
}

export default Home;
