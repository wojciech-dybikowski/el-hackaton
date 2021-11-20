import { Column, Grid, GridCol, Row } from 'shared/ui';
import React, { useState } from 'react';
import { Article, ArticleVertical, PodcastVertical, TagLabel } from 'shared/components';

// @ts-ignore
import classnames from 'classnames';

function NavbarTag({ label }: { label: string }) {
  return (
    <div className="border-4 border-black">
      <p style={{ fontWeight: 900 }} className="uppercase  py-1 px-6">
        {label}
      </p>
    </div>
  );
}

function Calendar({ selectedMonth }: { selectedMonth: number }) {
  const [selectedDay, setSelectedDay] = useState(19);

  const days = Array.from({ length: 35 }).map((_, index) => {
    const day = index + 1;
    const monthDaysFn = () => {
      if (selectedMonth === 2) {
        return 28;
      }

      return [2, 4, 6, 9, 11].find(shorterMonth => shorterMonth === selectedMonth) ? 30 : 31;
    };

    const monthDays = monthDaysFn();
    const dayValue = day > monthDays ? day - monthDays : day;

    return (
      <button
        className={classnames('col-span-1  py-1', {
          'bg-primary-blue text-white': selectedDay === index,
        })}
        onClick={() => setSelectedDay(index)}
      >
        <p style={{ fontSize: '28px' }}>{dayValue}</p>
      </button>
    );
  });

  return <div className="grid gap-2 grid-cols-7 py-4">{days}</div>;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3
      className=" uppercase text-black"
      style={{ fontSize: '32px', fontWeight: 900, fontFamily: 'Montserrat' }}
    >
      {title}{' '}
      <span style={{ fontSize: '24px' }} className="text-primary-blue">
        pokaż wszystko
      </span>
    </h3>
  );
}

const months = [
  {
    id: 1,
    name: 'styczeń',
    days: 31,
  },
  {
    id: 2,
    name: 'luty',
    days: 28,
  },
  {
    id: 3,
    name: 'marzec',
    days: 31,
  },
  {
    id: 4,
    name: 'kwiecień',
    days: 30,
  },
  {
    id: 5,
    name: 'maj',
    days: 31,
  },
  {
    id: 6,
    name: 'czerwiec',
    days: 30,
  },
  {
    id: 7,
    name: 'lipiec',
    days: 31,
  },
  {
    id: 8,
    name: 'sierpień',
    days: 31,
  },
  {
    id: 9,
    name: 'wrzesień',
    days: 30,
  },
  {
    id: 10,
    name: 'październik',
    days: 31,
  },
  {
    id: 11,
    name: 'listopad',
    days: 30,
  },
  {
    id: 12,
    name: 'grudzień',
    days: 31,
  },
];

const KalendariumPage = () => {
  const [month, setSelectedMonth] = useState(11);

  const setMonth = (newValue: number) => {
    console.log('ASDASD: ', newValue);
    if (newValue > 12) {
      return setSelectedMonth(1);
    }

    if (newValue < 1) {
      return setSelectedMonth(12);
    }

    return setSelectedMonth(newValue);
  };

  return (
    <main className="w-full h-screen">
      <Grid className="h-full mt-20" gridGap={8}>
        <GridCol className="space-y-8" colSpan={7}>
          <h3
            className=" uppercase "
            style={{ color: 'darkgrey', fontSize: '40px', fontWeight: 900 }}
          >
            Kalendarium
          </h3>
          <h3
            className=" uppercase text-primary-blue"
            style={{ fontSize: '48px', fontWeight: 900, fontFamily: 'Montserrat' }}
          >
            19 Listopada
          </h3>
          <Row className=" justify-between">
            <div className="flex space-x-4">
              <NavbarTag label={'polski rap'} />
              <NavbarTag label={'kino'} />
              <NavbarTag label={'pop'} />
              <NavbarTag label={'podcast'} />
            </div>
            <NavbarTag label={'sortuj'} />
          </Row>
          <SectionTitle title={'Muzyka'} />
          <div className="grid gap-2 grid grid-cols-2">
            <ArticleVertical />
            <ArticleVertical />
          </div>
          <SectionTitle title={'Artykuły'} />
          <Article />
          <Article />
          <Article />
          <SectionTitle title={'Podcasty'} />
          <div className="grid gap-2 grid grid-cols-2">
            <PodcastVertical />
            <PodcastVertical />
          </div>
          <SectionTitle title={'Video'} />
        </GridCol>
        <GridCol colSpan={5}>
          <div className="border-2 border-black mt-10 px-10">
            <Row className="items-center space-between w-full mt-4">
              <i
                onClick={() => setMonth(month - 1)}
                style={{ fontSize: '32px' }}
                className="cursor-pointer fas fa-long-arrow-alt-left"
              ></i>
              <p
                style={{ fontSize: '32px', fontFamily: 'Montserrat', fontWeight: 900 }}
                className="w-full text-center"
              >
                {months[month - 1].name}
              </p>
              <i
                onClick={() => setMonth(month + 1)}
                style={{ fontSize: '32px' }}
                className="cursor-pointer fas fa-long-arrow-alt-right"
              ></i>
            </Row>
            <div style={{ marginRight: '-5%', marginLeft: '-5%' }} className="">
              <Calendar selectedMonth={month} />
            </div>
          </div>
          <div className="text-white bg-primary-blue border-2 border-black p-4 group">
            <h3 className="py-4">TOP TEGO DNIA</h3>{' '}
            <div className="bg-primary-blue">
              <Row className="   space-x-2">
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
                      style={{ fontSize: '30px' }}
                      className={classnames('mt-1 fas fa-long-arrow-alt-right ')}
                    />
                  </div>
                </Column>
                <div
                  style={{ backgroundImage: 'url("/foto1.png")', backgroundSize: 'cover' }}
                  className="flex-1 border-4 border-white relative"
                >
                  <div
                    style={{ bottom: -10, right: -10, boxShadow: '2px 2px 0 #000' }}
                    className="absolute"
                  >
                    <TagLabel
                      textStyle={{ borderColor: '#fff' }}
                      className="flex items-center"
                      label={'Kino'}
                    />
                  </div>
                </div>
              </Row>
            </div>
          </div>
          <div style={{ height: '10%' }} className={'flex items-center justify-center'}>
            MIEJSCE NA TWOJĄ REKLEMĘ
          </div>
        </GridCol>
      </Grid>
    </main>
  );
};

export default KalendariumPage;
